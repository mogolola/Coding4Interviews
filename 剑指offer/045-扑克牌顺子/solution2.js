const { max, min } = require("underscore");

function IsContinuous(numbers)
{
    // write code here
    if(!numbers.length) return false;
    var numZero = 0;
    var leftNumbers = numbers.filter(it=>{
        if(it==0){
            numZero++;
            return false;
        }
        return true;
    })
    var deduplicatedNumbers = Array.from(new Set(leftNumbers));
    if(deduplicatedNumbers.length + numZero !== numbers.length){
        return false;
    }
    return Math.max(...leftNumbers) - Math.min(...leftNumbers) - numZero < leftNumbers.length
}
console.log(IsContinuous([1,3,0,5,0]))