"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//3680
//3080
function NumberOf1Between1AndN_Solution(n) {
    // write code here
    let r = 0;
    let arr = n.toString().split('');
    let length = arr.length;
    arr.forEach((i, idx) => {
        let value = parseInt(i);
        let low = parseInt(arr.slice(idx + 1).join('')) || 0;
        let high = parseInt(arr.slice(0, idx).join('')) || 0;
        if (value > 1) {
            r += Math.pow(10, (length - idx - 1)) * (high + 1);
        }
        else if (value === 1) {
            r += Math.pow(10, (length - idx - 1)) * (high) + (low + 1);
        }
        else {
            r += Math.pow(10, (length - idx - 1)) * (high);
        }
    });
    return r;
}
const Tester_1 = require("Tester");
let tester = new Tester_1.Tester(NumberOf1Between1AndN_Solution);
tester.addTest(13, 6);
tester.addTest(10000, 4001);
tester.doTest();
