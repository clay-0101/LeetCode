/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let ans = 0, isNeg = false
    if(x < 0){
        x = x * (-1)
        isNeg = true
    }
    while (x > 0) {
        let rem = x % 10

        if(ans > Math.floor(2147483647 / 10) || (ans === 2147483647 && rem > 7) ) return 0

        ans = (10 * ans) + rem
        x = Math.floor(x / 10)
    }
    if(ans.length >= 10) return 0
    return isNeg ? -ans : ans
};