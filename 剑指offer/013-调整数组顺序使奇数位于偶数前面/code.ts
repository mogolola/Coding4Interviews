import {Tester} from "Tester";

function reOrderArray(array:number[]):number[]
{
    // write code here
    let oddArr: number[] = [], evenArr:number[] = [];
    array.forEach(num=>{
        num%2?oddArr.push(num):evenArr.push(num);
    });
    return oddArr.concat(evenArr);
}

let tester = new Tester(reOrderArray);
tester.addTest([1,2,5,3,6,7,4],[1,5,3,7,2,6,4]);
tester.doTest();