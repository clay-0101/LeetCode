/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let maxWater = 0, i = 0 , j = height.length - 1

    while(i < j){

        if(height[i] < height[j]) {
            let area = height[i] * (j-i)
            maxWater = Math.max(maxWater, area)
            i++
        }
        else{
            let area = height[j] * (j-i)
            maxWater = Math.max(maxWater , area)
            j--
        }
    }
    return maxWater
};