/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let low = 0 , high = nums.length-1 , ans = -1

    while(low <= high){
        
        let mid = Math.floor((low + high) / 2)

        if(nums[mid] === target){
            ans = mid
            break;
        }

        if(nums[low] <= nums[mid]){

            if(target >= nums[low] && target <= nums[mid]){
                high = mid - 1
            }else{
                low = mid + 1
            }
        }else {
            
            if(target >= nums[mid + 1] && target <= nums[high]){
                low = mid + 1
            }else{
                high = mid - 1
            }
        }
    }
    return ans 
    
};