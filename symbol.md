# Symbol
----------
>ES6引入了一种新的原始数据类型Symbol，表示独一无二的值。它是JavaScript语言的第七种数据类型。

```javascript
(function(){
  var sb = Symbol();
  var app = {
    [sb]: 'Hello!'
  };
  return app;
})()
```

Symbol作为属性名，该属性不会出现在`for...in`、`for...of`循环中。
不会被 `Object.keys()` `Object.getOwnPropertyNames()`返回

`Object.getOwnPropertySymbols`可以获取指定对象的所有Symbol属性名。
`Reflect.ownKeys(obj)`会同时返回字符串键和symbol键

------

#### Symbol.for Symbol.keyFor
有时，我们希望重新使用同一个Symbol值，`Symbol.for`方法可以做到这一点。它接受一个字符串作为参数，然后搜索有没有以该参数作为名称的Symbol值。如果有，就返回这个Symbol值，否则就新建并返回一个以该字符串为名称的Symbol值。
```javascript
var s1 = Symbol.for('foo');
var s2 = Symbol.for('foo');
s1 === s2 // true
```
`Symbol.keyFor`方法返回一个已登记的Symbol类型值的key。
```javascript
var s1 = Symbol.for("foo");
Symbol.keyFor(s1) // "foo"
```
------

#### 内置的Symbol值

除了定义自己使用的Symbol值以外，ES6还提供了11个内置的Symbol值，指向语言内部使用的方法。

`Symbol.iterator`
`Symbol.replace`
`Symbol.search`
`Symbol.split`
`Symbol.toPrimitive`
`...`
