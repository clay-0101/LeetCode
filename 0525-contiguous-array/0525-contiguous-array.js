/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
        let map = new Map()
    let sum = 0
    let count = 0

    map.set(0, -1)
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 0) {
            sum += -1
        } else sum += 1

        if (map.has(sum)) {

            let length = i - map.get(sum);

            count = Math.max(count, length);
        } else {

            map.set(sum, i);
        }


    }
    return count
};