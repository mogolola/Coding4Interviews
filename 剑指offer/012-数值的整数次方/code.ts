import {Tester} from "Tester";
//暴力法
function Power(base:number, exponent:number):number{
    let result = 1;
    if(exponent ===0)    return 1;
    if(base === 0)  return 0;
    if(exponent>0){
        while (exponent>0){
            result *= base;
            exponent--;
        }
    }else{
        while(exponent<0){
            result /= base;
            exponent ++
        }
    };
    return result;
}

//非递归快速幂
// function Power_2(base:number, exponent:number):number{
//     let mask = 0x01;
//     let 
// }


let tester = new Tester(Power);
tester.addTest(2,0,1);
tester.addTest(0,2,0);
tester.addTest(2,2,4);
tester.addTest(-2,2,4);
tester.addTest(2,-2,1/4);
tester.addTest(2,3,8);
tester.addTest(-2,3,-8);
tester.addTest(-2,-3,-1/8);
tester.doTest();