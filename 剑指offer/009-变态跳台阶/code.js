"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tester_1 = require("Tester");
function jumpFloorII_(number) {
    // write code here
    if (number === 1)
        return 1;
    let dp = [1, 1];
    let sum = function (arr) {
        return arr.reduce((a, b) => a + b);
    };
    while (number > 1) {
        dp.push(sum(dp));
        number--;
    }
    return dp.pop();
}
function jumpFloorII(number) {
    // write code here
    if (number === 1)
        return 1;
    let r = 1;
    while (number > 1) {
        r *= 2;
        number--;
    }
    return r;
}
let tester = new Tester_1.Tester(jumpFloorII);
tester.addTest(1, 1);
tester.addTest(2, 2);
tester.addTest(3, 4);
tester.addTest(4, 8);
tester.doTest();
