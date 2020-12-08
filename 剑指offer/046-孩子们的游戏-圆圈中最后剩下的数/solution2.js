function removeOnce(n, m, start){
    return (m-1+start)%n;
}

function LastRemaining_Solution(n, m)
{
    // write code here
    if(n<1) return -1;
    var arr = Array(n).fill(0).map((it, idx)=>it+idx);
    var start = 0;
    while (n>1){
        var outIdx = removeOnce(n,m,start);
        arr.splice(outIdx,1);
        start = outIdx;
        n--;
    }
    return arr[0];
}

function LastRemaining_Solution_simplified(n, m)
{
    // write code here
    if(n<1) return -1;
    if(n==1) return 0; 
    while(n>1){
        return (m + LastRemaining_Solution_simplified(n-1, m)) % n
    }
}

console.log(LastRemaining_Solution_simplified(5,3))