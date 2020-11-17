function IsPopOrder(pushV:Array<number>, popV:Array<number>):boolean{
    let temp = [];
    while(pushV.length){
        let toPush = pushV.shift();
        temp.push(toPush);
        while(popV.length && temp[temp.length-1] === popV[0]){
            temp.pop();
            popV.shift();
        }
    }
    console.log(temp)
    return temp.length === 0;
}

console.log(IsPopOrder([1,2,3,4,5], [4,5,3,2,1]));