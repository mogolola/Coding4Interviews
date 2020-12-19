function Sum_Solution(n)
{
    // write code here
    var x = n > 1 && (n += Sum_Solution(n-1));
    return n
}   

console.log(Sum_Solution(5))