# let/const/var
1. let/const 不允许重复声明
2. let/const 块级作用域
3. let/const 没有变量提升
4. let/const dead zone

5. let 和 const 啥时候使用
优先 const 遇见变量时再去使用 let
```js
const obj = {
  teacher: 'old zhao',
  leader: 'old qian'
}
obj.teacher = 'old qian'; 
// * 引用类型 冻结
Object.freeze(obj)
obj.teacher = 'old zhao'; 
```
# 箭头函数
1. 没有 arguments
2. this 指向定义时函数作用域，this 指向永远不会改变
3. call,apply,bind 无法改变 this 指向
4. 不能作为构造函数使用

# class - class 本质是语法糖
## class 是什么类型？ - function

## class 是否有 prototype？
与 构造函数写法一致

## class 可以使用对象方法 & 属性么？ 可以

## class 定义属性的方式？ 构造器 & 顶层定义

## js 如何实现私有属性 - 闭包
```js
class Course {
  #course = 'shuxue';
  constructor(teacher, course) {
    this._teacher = teacher;
    const _course = 'yuwen';
    this.getCourse = () => {
      return _course;
    }
  }
  get teacher() {
    return this._teacher;
  }
  get course() {
    return this.#course;
  }
  set course(val) {
    this.#course = val;
  }
}
```

## 静态属性 && 方法 - 直接挂在构造函数上，无需实例化即可获取使用

## js 如何继承