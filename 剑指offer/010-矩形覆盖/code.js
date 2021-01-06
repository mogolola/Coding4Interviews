"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tester_1 = require("Tester");
function rectCover(number) {
    // write code here
    if (number === 0)
        return 0;
    if (number === 1)
        return 1;
    let [f1, f2] = [1, 1];
    while (number > 1) {
        [f2, f1] = [f1 + f2, f2];
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
