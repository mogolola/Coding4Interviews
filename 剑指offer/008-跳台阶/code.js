"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tester_1 = require("Tester");
//递归
function jumpFloor_recrusive(number) {
    // write code here
    if (number === 1)
        return 1;
    if (number === 2)
        return 2;
    return jumpFloor_recrusive(number - 1) + jumpFloor_recrusive(number - 2);
}
//动规
function jumpFloor(number) {
    if (number === 1)
        return 1;
    if (number === 2)
        return 2;
    let _pre = 1, _cur = 2;
    while (number > 2) {
        let temp = _cur;
        _cur += _pre;
        _pre = temp;
        number--;
    }
    return _cur;
}
let tester = new Tester_1.Tester(jumpFloor);
tester.addTest(1, 1);
tester.addTest(2, 2);
tester.addTest(3, 3);
tester.addTest(4, 5);
tester.doTest();
