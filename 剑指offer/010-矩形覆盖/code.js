"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tester_1 = require("Tester");
function rectCover(number) {
    var _a;
    // write code here
    if (number === 0)
        return 0;
    if (number === 1)
        return 1;
    var _b = [1, 1], f1 = _b[0], f2 = _b[1];
    while (number > 1) {
        _a = [f1 + f2, f2], f2 = _a[0], f1 = _a[1];
        number--;
    }
    return f2;
}
var tester = new Tester_1.Tester(rectCover);
tester.addTest(1, 1);
tester.addTest(2, 2);
tester.addTest(3, 3);
tester.addTest(4, 5);
tester.doTest();
