/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    let subStr = ""
    let count = 0, longest = 0

    for (let i = 0; i < s.length; i++) {

        for(let j = i ; j < s.length ; j++){

            if(subStr.includes(s[j])){
                subStr = ""
                break;
            }

            subStr += s[j]
            count++   
        }
        longest = Math.max(longest , count)
         count = 0
    }
    return longest
};