/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    let map = new Map()

    for(let i = 0 ; i < nums.length ; i++){
        
        let left = target - nums[i]

        if(map.has(left)){
            return [map.get(left), i]
        }
        map.set(nums[i], i)
    }
};