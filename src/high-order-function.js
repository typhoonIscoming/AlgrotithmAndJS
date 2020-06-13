Array.prototype.filter = function(fn) {
    const array = this
    let result = []
    for(let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            result.push(array[i])
        } else {
            console.log(`${array[i]} is not satisfied with condition`)
        }
    }
    return result
}

const array = [1, 2, 3, 4, 5, 6];

const result = array.filter(item => item > 3)
console.log('result = ', result);

// 返回函数
function makeFn() {
    let msg = 'hello function'
    return function() {
        console.log(msg)
    }
}
const fn = makeFn()
fn()
makeFn()()

// 只执行一次的函数
function once(fn) {
    let done = false;
    return function() {
        if (!done) {
            done = true
            return fn.apply(this, arguments); // 传arguments即是给fn传值
        }
    }
}
let pay = once(function(money) {
    console.log(`支付了￥${money}元`)
})
pay(5)
pay(5)
pay(5)
