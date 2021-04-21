// boolean
let bool: boolean = true
bool = Boolean(0)

// number
const num: number = 1234

// string
const str: string = '1234'
const str2: string = `${num}模板字符串`

// array
// 1.普通类型的
const arr: number[] = [num]
// 2.泛型
const arr2: Array<number> = [123, 435]

// 元组
let x: [string, number]
x = ['hello', 10]
// x = [12, 'nihao']
console.log(x)
console.log(x[0].substr(1)) // ello
// console.log(x[1].substr(1)) //Property 'substr' does not exist on type 'number'.
// x[3] = 'world'

// test = 4  // Type 'number' is not assignable to type 'string'.
// Any
let notStr: any = '1234';
notStr.str = 'fdsa'
console.log(notStr)
