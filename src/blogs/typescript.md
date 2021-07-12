---
title: typescript
---

# TypeScript
1. enum
```ts
export enum ActivityStatus {
  /** 未开始 */
  NOT_START = 'notStart',
  /** 已开始 */
  STARTED = 'started',
}
```
2. type, interface
表示数据结构
```ts
```

3. 联合类型 | (联合类型一次只能一种类型；而交叉类型每次都是多个类型的合并类型。)

4. 交叉类型 & (联合类型一次只能一种类型；而交叉类型每次都是多个类型的合并类型。)

5. typeof
```ts
function toArray(x: T): Array<T> {
  return [x];
}

type Func = typeof toArray;
```
6. keyof
```ts
interface Person {
  name: string;
  age: number;
}

type KPerson = keyof Person; // 'name' | 'age';
```

7. in

in 用来遍历枚举类型：

```ts
type Keys = "a" | "b" | "c"

type Obj =  {
  [key in Keys]: any
} // -> { a: any, b: any, c: any }

```

8. extends 

有时候我们定义的泛型不想过于灵活或者说想继承某些类等，可以通过 extends 关键字添加泛型约束。

```ts
interface ILengthwise {
  length: number;
}

function loggingIdentity<T extends ILengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

loggingIdentity(3);
loggingIdentity({length: 10, value: 3});
```

9.  Partial

Partial<T> 的作用就是将某个类型里的属性全部变为可选项 ?。
```js
interface PageInfo {
  title: string;
}

type OptionalPageInfo = Partial<PageInfo>;
```

10. Required

Required<T> 的作用就是将某个类型里的属性全部变为必选项。

11. Readonly 

Readonly<T> 的作用是将某个类型所有属性变为只读属性，也就意味着这些属性不能被重新赋值。

12. Record 

Record<K extends keyof any, T> 的作用是将 K 中所有的属性的值转化为 T 类型。

```ts
interface PageInfo {
  title: string;
}

type Page = "home" | "about" | "contact";

const x: Record<Page, PageInfo> = {
  about: { title: "about" },
  contact: { title: "contact" },
  home: { title: "home" }
};
```

13.  Exclude

Exclude<T, U> 的作用是将某个类型中属于另一个的类型移除掉。

```ts
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
```

14.  Extract

Extract<T, U> 的作用是从 T 中提取出 U。

```ts
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // "a"
type T1 = Extract<string | number | (() => void), Function>; // () => void

```

## 使用 TS 的好处
1. TS 是 JS 的超集，拓展了 js 的语法
2. ts 是面向对象的编程语言，包含类和接口的概念
3. ts 在开发阶段就能给出编译错误，而 js 需要在运行时才能暴露
4. ts 是强类型语言，可以明确知道各种数据类型，代码可读性强。
5. ts 中有很多方便的特性，例如可选链。

## type 和 interface 的区别
用 interface 来描述数据结构，type 来描述类型

1. 都支持描述一个对象或者函数
```ts
interface User {
  name: string;
  age: number;
}
type User = {
  name: string;
  age: number;
}
```
2. 都允许扩展 extends
```ts
type Name = {
  name: string;
}

interface User extends Name {

}
```
3. 只有 type 可以做而 interface 不可以做的事
type 可以声明基本类型别名，联合类型，元组等类型
```ts
// 基本类型别名
type Name = string

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]

// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div
```
## 如何基于一个已有类型, 扩展出一个大部分内容相似, 但是有部分区别的类型?
首先可以通过Pick和Omit
```ts
interface Test {
    name: string;
    sex: number;
    height: string;
}

interface NextTest extends Pick<Test, 'sex'> {
  age: number;
}

type Sex = Pick<Test, 'sex'>;

const a: Sex = { sex: 1 };

type WithoutSex = Omit<Test, 'sex'>;

const b: WithoutSex = { name: '1111', height: 'sss' };
```

比如Partial, Required.

再者可以通过泛型.

## 什么是泛型？具体怎么用？
泛型是指在定义函数、接口或类的时候，不预先指定具体的类型，使用时再去指定类型的一种特性。