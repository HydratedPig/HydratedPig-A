'use strict';

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) reject(new TypeError('The promise and the return value are the same'));
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  if (x instanceof MyPromise) {
    x.then(v => resolvePromise(promise, v, resolve, reject), reject);
  } else if (typeof x === 'object' || typeof x === 'function') {
    if (x === null) resolve(x);
    let then;
    try {
      then = x.then;
    } catch (error) {
      reject(error);
    }
    if (typeof then === 'function') {
      let called = false;
      try {
        then.call(
          x,
          y => {
            if (called) return;
            called = true;
            resolvePromise(promise, y, resolve, reject);
          },
          r => {
            if (called) return;
            called = true;
            reject(r);
          },
        );
      } catch (e) {
        if (called) return;
        reject(e);
      }
    } else {
      resolve(x);
    }
  } else {
    resolve(x);
  }
}

class MyPromise {
  FULFILLED_CALLBACK_LIST = [];

  REJECTED_CALLBACK_LIST = [];

  constructor(callback) {
    try {
      this._status = PENDING;
      this.value = null;
      this.reason = null;
      callback(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }

  resolve = value => {
    if (this._status !== PENDING) return;
    this._status = FULFILLED;
    this.value = value;
    this.FULFILLED_CALLBACK_LIST.forEach(callback => callback(this.value));
  };

  reject = reason => {
    if (this._status !== PENDING) return;
    this._status = REJECTED;
    this.reason = reason;
    this.REJECTED_CALLBACK_LIST.forEach(callback => callback(this.reason));
  };

  then(onFulfilled, onRejected) {
    if (!(this instanceof MyPromise)) {
      throw new TypeError('Method Promise.prototype.then called on incompatible receiver undefined');
    }
    const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : value => value;
    const realOnRejected = this.isFunction(onRejected) ? onRejected : reason => { throw reason; };
    // const microOnFulfilled = (value) => {
    //   queueMicrotask(() => realOnFulfilled(value))
    // }
    // const microOnRejected = (reason) => {
    //   queueMicrotask(() => realOnRejected(reason))
    // }
    // switch (this._status) {
    //   case PENDING: {
    //     this.FULFILLED_CALLBACK_LIST.push(microOnFulfilled);
    //     this.REJECTED_CALLBACK_LIST.push(microOnRejected);
    //     break;
    //   }
    //   case FULFILLED: {
    //     microOnFulfilled(this.value);
    //     break;
    //   }
    //   case REJECTED: {
    //     microOnRejected(this.reason);
    //     break;
    //   }
    // }
    // 链式调用
    const promise2 = new MyPromise((resolve, reject) => {
      const microOnFulfilled = value => {
        queueMicrotask(() => {
          const x = realOnFulfilled(value);
          // resolve(x);
          // 实现 resolvePromise
          resolvePromise(promise2, x, resolve, reject);
        });
      };
      const microOnRejected = reason => {
        queueMicrotask(() => {
          const x = realOnRejected(reason);
          // resolve(x);
          resolvePromise(promise2, x, resolve, reject);
        });
      };
      switch (this._status) {
        case PENDING: {
          this.FULFILLED_CALLBACK_LIST.push(microOnFulfilled);
          this.REJECTED_CALLBACK_LIST.push(microOnRejected);
          break;
        }
        case FULFILLED: {
          microOnFulfilled(this.value);
          break;
        }
        case REJECTED: {
          microOnRejected(this.reason);
          break;
        }
        default: {
          console.error('error status');
        }
      }
    });
    return promise2;
  }

  isFunction(f) {
    return typeof f === 'function';
  }
}
