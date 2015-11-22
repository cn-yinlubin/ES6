## Iterator和for...of循环
------
#### iterrator
Iterator的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。
```javascript
let arr = ['a', 'b'];
let iter = arr[Symbol.iterator]();
iter.next() //{ value: 'a', done: false }
iter.next() //{ value: 'b', done: false }
iter.next() //{ value: undefined, done: true }
```
当使用for...of循环遍历某种数据结构时，该循环会自动去寻找Iterator接口。
```javascript
for (var value of arr) {
  console.log(value);
}
```
一个对象如果要有可被for...of循环调用的Iterator接口，就必须在Symbol.iterator的属性上部署遍历器生成方法（原型链上的对象具有该方法也可）。

在ES6中，有三类数据结构原生具备Iterator接口：数组、某些类似数组的对象、Set和Map结构

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
```

一些对象默认实现迭代器接口

`数组` `字符串` `Set` `Map` ...

------

#### 调用Iterator接口的场合

解构赋值
```javascript
let set = new Set().add('a').add('b').add('c');
let [x,y] = set;
// x='a'; y='b'
```
扩展运算符
```javascript
var str = 'hello';
[...str]
```
yield*
```javascript
let generator = function* () {
  yield* [2,3,4];
};
```
------

#### for of

```javascript
for (var value of myArray) {
  console.log(value);
}
```

避开了for-in循环的所有缺陷

与forEach()不同的是，它可以正确响应break、continue和return语句
