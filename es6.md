ECMAScript6 笔记

## let 和 const
let和const是块作用域的 ，const是声明常量用的。
```Javascript
{let a = 10;}
a // ReferenceError: a is not defined.
```
let和const不存在变量提升
```Javascript
console.log(foo); // ReferenceError
let foo = 2;
```
```Javascript
var tmp = 123;
if (true) {
  tmp = 'abc'; // ReferenceError
  let tmp;
}
```
```Javascript
function bar(x = y, y = 2) {
  return [x, y];
}
bar(); // 报错
```
const 不可变的只是引用的地址
```Javascript
const foo = {};
foo.prop = 123;
foo.prop// 123
foo = {} // TypeError: "foo" is read-only不起作用
```
如果真的想将对象冻结，应该使用Object.freeze方法。
```
const foo = Object.freeze({});
foo.prop = 123; // 不起作用
```
----------

##class

```javascript
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static classMethod() {
        console.log('fathor jt:hello');
    }
}
class ColorPoint extends Point { //mix(Cons1,Cons2)
    constructor(x, y, color) {
        super(x, y);
        this.color = color; // 正确
    }
    //原型方法
    ptMethod(){
        console.log('pt:hello');
    }
    static classMethod() {
        //静态方法也是可以从super对象上调用
        super.classMethod();
        console.log('jt:hello');
    }
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: '+value);
    }
}
```

##Iterator和for...of循环
Iterator的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。
```Javascript
let arr = ['a', 'b'];
let iter = arr[Symbol.iterator]();
iter.next() //{ value: 'a', done: false }
iter.next() //{ value: 'b', done: false }
iter.next() //{ value: undefined, done: true }
```
上面代码中，变量arr是一个数组，原生就具有遍历器接口，部署在arr的Symbol.iterator属性上面。所以，调用这个属性，就得到遍历器对象。

一个对象如果要有可被for...of循环调用的Iterator接口，就必须在Symbol.iterator的属性上部署遍历器生成方法（原型链上的对象具有该方法也可）。
```javascript
class RangeIterator {
  constructor(start, stop) {
    this.value = start;
    this.stop = stop;
  }
  [Symbol.iterator]() { return this; }
  next() {
    var value = this.value;
    if (value < this.stop) {
      this.value++;
      return {done: false, value: value};
    } else {
      return {done: true, value: undefined};
    }
  }
}
for (var value of new RangeIterator(0, 3)) {
  console.log(value);
}
```

##Symbol
ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型，前六种是：Undefined、Null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

symbol键的设计初衷是避免初衷，因此JavaScript中最常见的对象检查的特性会忽略symbol键。例如，for-in循环只会遍历对象的字符串键，symbol键直接跳过，Object.keys(obj)和Object.getOwnPropertyNames(obj)也是一样。但是symbols也不完全是私有的：用新的API Object.getOwnPropertySymbols(obj)就可以列出对象的symbol键。另一个新的API，Reflect.ownKeys(obj)，会同时返回字符串键和symbol键。（我们将在随后的文章中讲解Reflect(反射) API）

###获取symbol的三种方法

 1. 调用Symbol()。这种方式每次调用都会返回一个新的唯一symbol。
 2. 调用Symbol.for(string)。这种方式会访问symbol注册表，其中存储了已经存在的一系列symbol。这种方式与通过Symbol()定义的独立symbol不同，symbol注册表中的symbol是共享的。如果你连续三十次调用Symbol.for("cat")，每次都会返回相同的symbol。注册表非常有用，在多个web页面或同一个web页面的多个模块中经常需要共享一个symbol。
 3. 使用标准定义的symbol，例如：`Symbol.iterator`

```javascript
var s1 = Symbol();
var s2 = Symbol();
s1 === s2 // false
```
```javascript
var mySymbol = Symbol();
var a = {
  [mySymbol]: 'Hello!'
};
```

##promie
##生成器 Generators
##集合
##箭头函数
箭头函数提供了更简洁的语法，并且箭头函数中 this 对象的指向是不变的，this 对象绑定定义时所在的对象
```
// bad
"use strict";
var fn = function fn(v) {
  return console.log(v);
};

// good
var fn= (v=>console.log(v));
```
##Module
##Babel下的ES6兼容性与规范
http://imweb.io/topic/561f9352883ae3ed25e400f5?utm_source=tuicool&utm_medium=referral
http://efe.baidu.com/blog/es6-develop-overview/
