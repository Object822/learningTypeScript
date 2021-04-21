# typeScript语法概况

## 一、基础类型

### 1.布尔值类型数据: 类型为boolean

```typescript
let bool: boolean = true
bool = Boolean(0) // OK
```

### 2.数字: 类型为number,还可以支持二级制和八进制字面能量

```typescript
const num: number = 1234
const num1: number = 0xf00d
const num2: number = NaN
const num2: number = undefined
```

### 3.字符串: 类型为string

```typescript
const str: string = '1234asdf'
const str2: string = `${num}模板字符串`
```

### 4.数组:有两种方式

- 第一种是直接在元素类型后面接上[],用来表示由此类型组成的数组:

```typescript
const list1: number[] = [1,2,3]
```

- 第二种是使用数组泛型,Array[元素类型]:

```typescript
const list2: Array<number> = [1,23,4]
```

### 5.元祖Tuple: 元祖类型是指元素类型允许表示一个已知元素数量和类型的数组,各元素类型不必相同,比如可以定义一对值分别为string和number类型的元组

```typescript
const x: [string, number]
x = ['hello', 12] // ok
x = [10, 'nihao'] // Type 'number' is not assignable to type 'string'.
```

- 访问一个已知的索引的元素,会得到正确的类型:

```typescript
console.log(x[0].substr(1)) // ello 正确的打印
console.log(x[1].substr[1]) // 错误的提示 Property 'substr' does not exist on type 'number'.
```

- 当访问一个越界的元素,会使用**联合**类型代替:

```typescript
x[3] = 'world' // ok 字符串会赋值给(string | number) 类型的
console.log(x[5].toString()) // OK 以为string和nnumber都有toString()方法
x[6] = true // error, 布尔类型不是(string | number)类型
```

### 6.Any: 动态的任意类型的数据

```typescript
let notStr: any = 1234;
notStr = '1234'
```

- any类型可以定义任意的属性和方法

```typescript
let obj: any = '1234'
obj.str = 'zifu'
obj.setName('hhah')
// 可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
```

- 未声明类型的变量

```typescript
let anything
anything = '1234'
anything = 145
anything.sayName('hello')
```



## 二、变量声明

## 三、接口

## 四、类

## 五、函数



