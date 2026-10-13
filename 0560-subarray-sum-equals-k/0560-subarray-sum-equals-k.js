/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {

    let map = new Map()
    let count = 0 , currSum = 0

    map.set(0,1)

    for(let i = 0 ; i < nums.length ; i++){

        currSum += nums[i]

        let diff = currSum - k

        if(map.has(diff)){
            count += map.get(diff)
        }

        if(map.has(currSum)){
            map.set(currSum , map.get(currSum)+1)
        }else{
            map.set(currSum , 1)
        }
    }
    return count
    
};