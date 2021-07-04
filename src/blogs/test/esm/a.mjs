import { bar } from './b.mjs';
export function foo() {
  bar();  
  console.log('执行完毕');
}
foo();
