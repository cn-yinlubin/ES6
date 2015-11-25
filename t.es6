var co = require('co');
var fetch = require('node-fetch');
var readFile = require('fs-readfile-promise');

co(function *(){
    var a = readFile('symbol.md');
    var b = readFile('symbol.md');
    var files = yield [a,b];
    var c = Promise.resolve(files);
    var res2 = yield [c];
    console.log(res2)
});
