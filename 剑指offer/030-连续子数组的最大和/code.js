"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FindGreatestSumOfSubArray(array) {
    // write code here
    var r = array[0];
    var max = r;
    for (var i = 1; i < array.length; i++) {
        if (r < 0)
            r = 0;
        r += array[i];
        max = Math.max(max, r);
    }
    return max;
}
var Tester_1 = require("Tester");
var tester = new Tester_1.Tester(FindGreatestSumOfSubArray);
tester.addTest([1, -2, 3, 10, -4, 7, 2, -5], 18);
tester.addTest([6, -3, -2, 7, -15, 1, 2, 2], 8);
tester.addTest([-3, -1, -3, -5, -5], -1);
tester.addTest([5, 3, -6, 1, 9, 200, -300], 212);
tester.doTest();
