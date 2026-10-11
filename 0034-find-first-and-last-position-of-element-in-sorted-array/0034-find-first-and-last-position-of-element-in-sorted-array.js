/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    let arr = [] , ans = -1

    function bSearch(arr , f , l , isStart){

        while(f <= l){
            
            let mid = Math.floor((f + l)/ 2)

            if(nums[mid] === target){
                ans = mid

                if(isStart){
                    l = mid - 1
                }else f = mid + 1

            }else if(nums[mid] < target){
                f = mid + 1
            }else l = mid - 1
        }

        return ans
    }
    
    arr[0] = bSearch(nums , 0 , nums.length - 1,  true)
    arr[1] = bSearch(nums , 0 , nums.length - 1,  false)

    return arr
    
};