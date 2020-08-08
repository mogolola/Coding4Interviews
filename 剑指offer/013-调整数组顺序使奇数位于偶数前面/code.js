"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tester_1 = require("Tester");
//辅助数组
function reOrderArray(array) {
    // write code here
    var oddArr = [], evenArr = [];
    array.forEach(function (num) {
        num % 2 ? oddArr.push(num) : evenArr.push(num);
    });
    return oddArr.concat(evenArr);
}
//不开辟另外的数组（in-Place）,双指针
function reOrderArray_inPlace(array) {
    var headOdd = 0, headEven = 0;
    while (headEven < array.length) {
        if (array[headOdd] % 2) {
            headOdd++;
            headEven++;
        }
        else {
            headEven++;
            var n = array.splice(headOdd, 1)[0];
            array.push(n);
        }
    }
    return array;
}
var tester = new Tester_1.Tester(reOrderArray_inPlace);
tester.addTest([1, 2, 5, 3, 6, 7, 4], [1, 5, 3, 7, 2, 6, 4]);
tester.doTest();
