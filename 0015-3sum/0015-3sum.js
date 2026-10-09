/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    let result = []
    let sArr = nums.sort((a, b) => a - b)

    for (let i = 0; i < sArr.length - 2; i++) {

        if (i !== 0 && sArr[i - 1] === sArr[i]) continue

        let j = i + 1, k = sArr.length - 1

        while (j < k) {

            let sum = sArr[i] + sArr[j] + sArr[k]

            if (sum === 0) {
                let temp = [sArr[i], sArr[j++], sArr[k--]]
                result.push(temp)

                while (j < k && sArr[j - 1] === sArr[j]) j++
                while (j < k && sArr[k + 1] === sArr[k]) k--

            }else if(sum < 0) j++

            else k--
        }


    }
    return result

};