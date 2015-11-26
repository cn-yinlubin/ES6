
# let 和 const
----------
let和const是块作用域的 ，const是声明常量用的。
```javascript
{let a = 10;}
a // ReferenceError: a is not defined.
```
let和const不存在变量提升
```javascript
console.log(foo); // ReferenceError
let foo = 2;
```
```javascript
var tmp = 123;

if (true) {
  console.log(tmp)
  let tmp = 456;
}
```
const 不可变的只是地址
```javascript
const foo = [];
foo.prop = 123;//可变

foo = {} // TypeError: "foo" is read-only不起作用
```
如果真的想将对象冻结，应该使用Object.freeze方法。
```javascript
const foo = Object.freeze({});
foo.prop = 123; // 不起作用
```
----------
