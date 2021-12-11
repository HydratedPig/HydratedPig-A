---
title: 读源码后感
---

> 从 ReactDOM.render(<App/>, document.selectElementById('root'), function () {}) 到 mounted 再到 updated 到组件销毁

- ```ReactDOMLegacy.js```文件中的 render 是入口函数
剖析下 ```ReactDOM.render(element: React$Element<any>, container: Container, callback: ?Function)``` 函数
  1. judgement 告诉我们 React 18 将会使用 [ReactDOM.createRoot 这个api 替代 ReactDOM.render](https://reactjs.org/link/switch-to-createroot)
  2. 判断 container 是否是个合法的 domElement
  3. 判断 isContainerMarkedAsRoot(container) && container._reactRootContainer === undefined;
  4. 调用 legacyRenderSubtreeIntoContainer
