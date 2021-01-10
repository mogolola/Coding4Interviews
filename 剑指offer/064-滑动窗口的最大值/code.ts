function maxInWindows(num:Array<number>, size:number)
{
    // write code here
    if(size===0)    return [];
    let l = num.length;
    let res = [];
    let queue:Array<number> = [];
    for(let i=0; i<num.length; i++){
        while(queue && queue[0]<=i-size){
            queue.shift();
        }
        while(queue && num[queue[queue.length-1]]< num[i]){
            queue.pop()
        }
        queue.push(i);
        if(i<size-1)  continue;
        res.push(num[queue[0]]);
    }
    return res;


}