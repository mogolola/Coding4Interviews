"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tester_1 = require("Tester");
function NumberOf1(n) {
    // write code here
    let mark = 0x01;
    let ans = 0;
    while (mark !== 0) {
        if (mark & n)
            ans++;
        mark <<= 1;
    }
    return ans;
}
function NumberOf1_2(n) {
    let ans = 0;
    while (n !== 0) {
        ++ans;
        n = n & (n - 1);
    }
    return ans;
}
let tester = new Tester_1.Tester(NumberOf1_2);
tester.addTest(0, 0);
tester.addTest(10, 2);
tester.doTest();
