/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {

    function isValid(arr, mid, hour) {
        let total = 0
        for (let i = 0; i < arr.length; i++) {

            if (arr[i] % mid === 0) total += arr[i] / mid

            else total += Math.floor((arr[i] / mid) + 1)

            if(total > h) return false
        }
        return true
    }


    let first = 1, endPoint = 0, ans = -1

    for (let i = 0; i < piles.length; i++) {
        endPoint = Math.max(endPoint , piles[i])
    }

    while (first <= endPoint) {
        let mid = Math.floor((first + endPoint) / 2)

        if (isValid(piles, mid, h)) {
            ans = mid
            endPoint = mid - 1

        }else first = mid + 1
    }

    return ans

};