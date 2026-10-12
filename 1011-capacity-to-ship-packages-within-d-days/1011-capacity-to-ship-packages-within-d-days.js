/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    
    function isValid(arr, mid , d){

        let totalDay = 1 , sum = 0

        for(let i = 0 ; i < arr.length; i++){

            if(arr[i] > mid) return false

            if(sum + arr[i] > mid){
                totalDay++
                sum = arr[i]

            }else sum += arr[i]

            if(totalDay > d) return false
        }
        return true
    }

    let low = -Infinity , high = 0 , ans = -1
    
    for(let i = 0 ; i < weights.length ; i++){
        low = Math.max(low , weights[i])
        high += weights[i]
    }

    while(low <= high){

        let mid = Math.floor((low + high)/2)

        if(isValid(weights, mid , days)){
            ans = mid
            high = mid - 1

        }else low = mid + 1
    }

    return ans
};