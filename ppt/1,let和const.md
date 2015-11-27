title: 1、let和const
speaker: es6
url: ""
transition: move
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: light
usemathjax: yes

[slide]
#let和const
[slide]
let和const是块作用域的 ，const是声明常量用的。
```javascript
{
    let a = 10;
}
a // ReferenceError: a is not defined.
```
let和const不存在变量提升
```javascript
console.log(foo); // ReferenceError
let foo = 2;
```
```javascript
var tmp = 123;
(function(){
    console.log(tmp)
    let tmp = 456;
})()
```
[slide]
```javascript
const PI = 3;
PI = 1;
```
const 不可变的只是地址
```javascript
const foo = [];
PI.push('123');
PI.aa = 123;
foo = {} // TypeError: "foo" is read-only不起作用
```
如果真的想将对象冻结，应该使用Object.freeze方法。
```javascript
const foo = Object.freeze({});
foo.prop = 123; // 不起作用
```
[slide]
#箭头函数
`(x,y)=>{}`  `func(x,y){}`
[slide]
##外部保存的this,或用ES5引入的bind
```javascript
var app = {
    init:function(){
        var that = this;
        setTimeout(function() {
            that.bind();
        },0);
    },
    bind:function(){}
}
app.init();
```

```javascript
var app = {
    init(){
        setTimeout(()=>{
            this.bind();
        },0);
    },
    bind(){}
}
app.init();
```