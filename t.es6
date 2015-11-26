/*
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

*/
/*
"use strict"
var fs = require('fs');
var max = 0;
read('./node_modules')
function read(path){
    fs.readdir(path,function(err,files){
        for(let i = 0,len=files.length ; i < len;i++){
            let tmppath = path + '/' + files[i];

            fs.stat(tmppath,function(err,stats){
                if (stats.isDirectory()) {
                    //console.log(stats)
                    read(tmppath)

                } else {
                    if(stats.size > max){
                        //console.log(tmppath)
                        max = stats.size
                    }
                }
            })
        }
    })
}

setTimeout(function(){
    console.log(max)
},5000)
*/
/**

"use strict"
var fs = require('fs');
var max = {
    size:0,
    name:''
};
var arr = []
function read(path){
    R(path);
    return arr;
}

function R(path){
    var files = fs.readdirSync(path);
    for(let i = 0,len=files.length ; i < len;i++){
        let tmppath = path + '/' + files[i];
        var stats = fs.statSync(tmppath);
        if (stats.isDirectory()) {
            //console.log(stats)
            R(tmppath)
        } else {
            arr.push(path+"/"+files[i])
        }
    }
}

console.log(read('./node_modules'));
 */


"use strict"

var thunkify = require('thunkify');
console.log(12313)