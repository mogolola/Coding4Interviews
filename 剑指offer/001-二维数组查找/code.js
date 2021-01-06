"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tester_1 = require("Tester");
let Find = (target, array) => {
    let lenY = array.length;
    let lenX = array[0].length;
    let y = lenY - 1, x = 0;
    do {
        let cur = array[x][y];
        if (cur === target) {
            return true;
        }
        else if (cur > target) {
            y--;
        }
        else {
            x++;
        }
    } while (y >= 0 && x <= lenX - 1);
    return false;
};
let tester = new Tester_1.Tester(Find);
tester.addTest(1, [[1, 2, 3], [4, 5, 6], [7, 8, 9]], true);
tester.addTest(2, [[1, 2, 3], [4, 5, 6], [7, 8, 9]], true);
tester.doTest();
