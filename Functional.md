# 函数式编程

- Functional Programming, FP(函数式编程), FP是编程范式之一
- 常听说的范式还有面向过程编程、面向对象编程

- 面向对象：把现实世界的实物抽象成程序世界中的类和对象，通过继承，封装，多态来演示事物的联系
- 函数式编程的思维方式：把现实世界的事物和事物之间的联系抽象到程序世界（对运算过程抽象）
   
   - 程序的本质：根据输入某种运算获得相应的输出，程序开发过程会涉及到很多输入输出的函数。
   - x -> f(联系，映射) -> y;  y = f(x)
   - 函数式编程中的函数不是指程序中的函数(方法)，而是数学中函数，即映射关系。y = sin(x)
   - 相同的输入得到相同的输出（纯函数）
   - 函数式编程用来描述数据(函数)之间的关系

```javascript
// 非函数式
let num1 = 1;
let num2 = 2;
let num3 = num1 + num2;
console.log(num3)

// 函数式
function add(n1, n2) {
    return n1 + n2
}
let sum = add(1, 2)
console.log(sum)
// 函数可以无数次的重用，抽取出来的函数式细粒度的函数，可以组合成更多用途的函数
```

# 函数式一等公民(First class Function)
- 函数可以存储在变量中
- 函数作为参数
- 函数作为返回值

在JS中，**函数就是一个普通对象**，我们可以把函数存储在变量/数组中，它还可以作为另一个函数的参数或返回值，甚至在运行时通过
new Function()来构造一个新函数
```javascript
// 把函数赋值给变量
let fn = function() {
    console.log(12345)
}
fn()
```

# 高阶函数(Higher-order Function)
- 可以把函数作为参数传给另一个函数
- 可以把函数作为另一个函数的返回值
```javascript
// forEach
function forEach(array, fn) {
    for(let i = 0; i < array.length; i++) {
        fn(array[i])
    }
}
// filter
function filter(array, fn) {
    let results = [];
    for(let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            results.push(array[i])
        }
    }
    return results
}
```
[高级函数例子](./src/high-order-function.js)











