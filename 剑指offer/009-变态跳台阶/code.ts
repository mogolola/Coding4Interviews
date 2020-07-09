import {Tester} from "Tester";

function jumpFloorII_(number:number):number
{
    // write code here
    if(number===1)  return 1;
    let dp:number[] = [1,1];
    let sum=function(arr:Array<number>):number{
        return arr.reduce((a,b)=>a+b);
    
    }
    while(number>1){
        dp.push(sum(dp));
        number--;
    }
    return dp.pop() as number;
}

function jumpFloorII(number:number):number
{
    // write code here
    if(number===1)  return 1;
    let r = 1;
    while(number>1){
        r*=2;
        number--;
    }
    return r;
}

let tester = new Tester(jumpFloorII);
tester.addTest(1,1);
tester.addTest(2,2);
tester.addTest(3,4);
tester.addTest(4,8);
tester.doTest();