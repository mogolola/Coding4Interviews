function FindGreatestSumOfSubArray(array:Array<number>)
{
    // write code here
    let r = array[0];
    let max = r;
    for(let i = 1; i<array.length; i++){
        if(r<0) r=0;
        r+=array[i];
        max = Math.max(max, r);
    }
    return max;
}

import {Tester} from 'Tester';
let tester = new Tester(FindGreatestSumOfSubArray);
tester.addTest([1,-2,3,10,-4,7,2,-5],18);
tester.addTest([6,-3,-2,7,-15,1,2,2],8);
tester.addTest([-3,-1,-3,-5,-5],-1);
tester.addTest([5,3,-6,1,9,200,-300],212);
tester.doTest();
