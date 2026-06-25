/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let symbol = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let sum = 0
    let num = 0;
    for(let i = 0; i < (s.length) ; i++){
        let curr = s[i]
        let next = s[i+1]
        if(i !== s.length-1  && symbol[curr] < symbol[next]){
            num = (-1 * symbol[curr])
        }else{
            num = symbol[curr]
        }
        sum += num
    }
    return sum
};