"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tester_1 = require("Tester");
//暴力法
function Power(base, exponent) {
    var result = 1;
    if (exponent === 0)
        return 1;
    if (base === 0)
        return 0;
    if (exponent > 0) {
        while (exponent > 0) {
            result *= base;
            exponent--;
        }
    }
    else {
        while (exponent < 0) {
            result /= base;
            exponent++;
        }
    }
    ;
    return result;
}
function Power_2(base, exponent) {
    // write code here
    if (exponent < 0)
        return 1 / Power(base, -exponent);
    if (exponent === 0)
        return 1;
    if (exponent === 1)
        return base;
    var x = 2, r = base * base;
    while (exponent >= x * x) {
        r *= r;
        x *= x;
    }
    ;
    return r * Power(base, (exponent - x));
}
//非递归快速幂
function Power_3(base, exponent) {
    if (exponent < 0)
        return 1 / Power_3(base, -exponent);
    if (exponent === 0)
        return 1;
    if (exponent === 1)
        return base;
    var mask = 0x01, r = 1.0, x = base;
    while (mask !== 0) {
        if (mask & exponent)
            r *= x;
        x *= x;
        mask <<= 1;
    }
    return r;
}
var tester = new Tester_1.Tester(Power_3);
tester.addTest(2, 0, 1);
tester.addTest(0, 2, 0);
tester.addTest(2, 2, 4);
tester.addTest(-2, 2, 4);
tester.addTest(2, -2, 1 / 4);
tester.addTest(2, 3, 8);
tester.addTest(-2, 3, -8);
tester.addTest(-2, -3, -1 / 8);
tester.doTest();
