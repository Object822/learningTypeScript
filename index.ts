// 元组
let x: [string, number]
x = ['hello', 10]
// x = [12, 'nihao']
console.log(x)
console.log(x[0].substr(1)) // ello
// console.log(x[1].substr(1)) //Property 'substr' does not exist on type 'number'.
// x[3] = 'world'