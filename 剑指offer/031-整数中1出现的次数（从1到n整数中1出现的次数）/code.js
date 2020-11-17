"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//3680
//3080
function NumberOf1Between1AndN_Solution(n) {
    // write code here
    var r = 0;
    var arr = n.toString().split('');
    var length = arr.length;
    arr.forEach(function (i, idx) {
        var value = parseInt(i);
        var low = parseInt(arr.slice(idx + 1).join('')) || 0;
        var high = parseInt(arr.slice(0, idx).join('')) || 0;
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
var Tester_1 = require("Tester");
var tester = new Tester_1.Tester(NumberOf1Between1AndN_Solution);
// tester.addTest(13, 6);
// tester.addTest(1000\0, 4001);
tester.addTest(21345, 18821);
tester.doTest();
