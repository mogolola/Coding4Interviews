"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tester_1 = require("Tester");
function NumberOf1(n) {
    // write code here
    var mark = 0x01;
    var ans = 0;
    while (mark !== 0) {
        if (mark & n)
            ans++;
        mark <<= 1;
    }
    return ans;
}
function NumberOf1_2(n) {
    var ans = 0;
    while (n !== 0) {
        ++ans;
        n = n & (n - 1);
    }
    return ans;
}
var tester = new Tester_1.Tester(NumberOf1_2);
tester.addTest(0, 0);
tester.addTest(10, 2);
tester.doTest();
