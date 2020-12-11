function multiply(array)
{
    // write code here
    var n = array.length;
    var left = [1];
    var right = [1];
    for(var i=1; i<n; i++){
        left.push(left[i-1]*array[i-1])
        right.push(right[i-1]*array[n-i])
    }
    var re = [];
    for(var i=0; i<n; i++){
        re.push(left[i] * right[n-i-1])
    }
    return re;
}

console.log(multiply([1,2,3,4,5]))