"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tester_1 = require("Tester");
function reOrderArray(array) {
    // write code here
    var oddArr = [], evenArr = [];
    array.forEach(function (num) {
        num % 2 ? oddArr.push(num) : evenArr.push(num);
    });
    return oddArr.concat(evenArr);
}
var tester = new Tester_1.Tester(reOrderArray);
tester.addTest([1, 2, 5, 3, 6, 7, 4], [1, 5, 3, 7, 2, 6, 4]);
tester.doTest();
