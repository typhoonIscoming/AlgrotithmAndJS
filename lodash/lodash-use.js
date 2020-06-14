const _ = require('lodash')

const array = ['jack', 'tom', 'alice', 'obama']

console.log(_.first(array))
console.log(_.head(array))

// console.log(array.reverse())
console.log(_.reverse(array))

function memoize(fn) { // 需要传递一个函数
    // 根据相同的输入始终有相同的输出的概念，所以可以把函数fn参数作为对象的键，把函数的结果作为对象的值
    let cache = {}
    return function() {
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || fn.apply(fn, arguments)
        return cache[key]
    }
}

function getArea(r) {
    console.log(r)
    return Math.PI * r * r
}

const getAreaWithMemoize = memoize(getArea)
console.log(getAreaWithMemoize(5))
console.log(getAreaWithMemoize(5))
console.log(getAreaWithMemoize(5))




