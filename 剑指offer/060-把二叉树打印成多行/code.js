"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../helper");
const Tester_1 = require("Tester");
function Print(pRoot) {
    // write code here
    let res = [];
    if (!pRoot)
        return res;
    let cur = [pRoot];
    let next = [];
    while (cur.length) {
        for (let node of cur) {
            node.left && next.push(node.left);
            node.right && next.push(node.right);
        }
        res.push(cur.map(node => node.val));
        cur = next;
        next = [];
    }
    return res;
}
let [n1, n2, n3, n4, n5, n6, n7] = helper_1.genNodes([8, 6, 10, 5, 7, 9, 11]);
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;
let tester = new Tester_1.Tester(Print);
tester.addTest(n1, [[8], [6, 10], [5, 7, 9, 11]]);
tester.doTest();
