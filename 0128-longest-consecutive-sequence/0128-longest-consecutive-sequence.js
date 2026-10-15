/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

    let sort = nums.sort((a, b)=> a - b )
    let count = 1 , longestLen = 0

    for(let i = 0 ; i < sort.length ; i++){

        if(sort[i] === sort[i+1]){
            continue
        }

        if(sort[i+1] === sort[i] + 1){
            count++
        }else{
            longestLen = Math.max(longestLen , count)
            count = 1
        }
    }
    return longestLen
    
};