// 两数之和
// 给定一个数组nums和目标值target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标。
// const nums = [2, 5, 7, 11, 15] const target = 9
// 因为nums[0] + nums[2] = 9
// 所以返回下标[0, 2]



function getIndex(nums, target) {
    /**-----method one
    while(nums.length > 1) {
        let last = nums.pop()
        if(nums.indexOf(target - last) > -1) {
            return [nums.indexOf(target - last), nums.length]
        }
    }
    */

    /** method two
    let result
    nums.some((item, index) => {
        let _index = nums.indexOf(target - item)
        if (_index !== -1 && _index !== index) {
            result = [_index, index]
            return true
        }
    })
    return result
    */
    // /** method three
    let tmp = []
    for (var i = 0; i < nums.length; i++) {
        var diff = target - nums[i];
        if(tmp[diff] !== undefined) {
            return [tmp[diff], i]
        }
        tmp[nums[i]] = i
    }
}

const nums = [2, 5, 7, 11, 15], target = 9

const result = getIndex(nums, target)

console.log('result = ', result)
// method one： [Done] exited with code=0 in 0.109 seconds
// method two： [Done] exited with code=0 in 0.083 seconds
// method three：[Done] exited with code=0 in 0.074 seconds