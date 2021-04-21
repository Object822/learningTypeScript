// boolean
var bool = true;
bool = Boolean(0);
// number
var num = 1234;
// string
var str = '1234';
var str2 = num + "\u6A21\u677F\u5B57\u7B26\u4E32";
// array
// 1.普通类型的
var arr = [num];
// 2.泛型
var arr2 = [123, 435];
// 元组
var x;
x = ['hello', 10];
// x = [12, 'nihao']
console.log(x);
console.log(x[0].substr(1)); // ello
// console.log(x[1].substr(1)) //Property 'substr' does not exist on type 'number'.
// x[3] = 'world'
var test = '1234';
// test = 4  // Type 'number' is not assignable to type 'string'.
// Any
var notStr = '1234';
notStr.str = '1234';
console.log(notStr);
