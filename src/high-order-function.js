Array.prototype.filter = function(array, fn) {
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

const result = array.filter(array, item => item > 3)
console.log('result = ', result)
