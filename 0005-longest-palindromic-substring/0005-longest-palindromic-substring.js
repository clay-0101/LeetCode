/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

let maxLen = ""


 function checkPali(f , l){

    while(f <= l){
        
        if(s[f] === s[l]){
            f++ , l--
        }else{
            return false
        }
    }
    return true
 }

 for(let i = 0 ; i < s.length ; i++){

    for(let j = s.length - 1 ; j >= 0 ; j--){
       
        if(checkPali(i , j)){
          let currLen = (j - i) + 1

          if(currLen > maxLen.length){
            maxLen = s.slice(i , j+1)
          }
        }
    }
 }
 return maxLen

    
};