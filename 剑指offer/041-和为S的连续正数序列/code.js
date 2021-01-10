"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRange(start, end) {
    let n = end - start;
    return Array(n).fill(start).map((it, idx) => { return it + idx; });
}
function FindContinuousSequence(sum) {
    // write code here
    let rr = [];
    let r = [];
    for (let i = 0; i < Math.ceil(sum / 2); i++) {
        rr.push([i + 1]);
        let j = i;
        while (rr[i][j] <= sum) {
            if (rr[i][j] === sum) {
                r.push(getRange(i + 1, j + 2));
            }
            rr[i].push(rr[i][j] + j + 1);
            j++;
        }
    }
    return r;
}
const Tester_1 = require("Tester");
let tester = new Tester_1.Tester(FindContinuousSequence);
tester.addTest(100, [[9, 10, 11, 12, 13, 14, 15, 16], [18, 19, 20, 21, 22]]);
tester.addTest(3, [[1, 2]]);
tester.doTest();
