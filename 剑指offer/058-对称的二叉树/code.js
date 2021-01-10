"use strict";
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../helper");
function isSymmetrical(pRoot) {
    // write code here
    if (!pRoot)
        return true;
    let cur = [pRoot];
    function getNext(cur) {
        let next = [];
        while (cur.length) {
            let node = cur.shift();
            node && next.push(node.left);
            node && next.push(node.right);
        }
        return next;
    }
    function layerIsSymmetrical(lay) {
        let start = 0, end = lay.length - 1;
        while (start < end) {
            if (lay[start]) {
                if (!lay[end] || lay[start].val != lay[end].val) {
                    return false;
                }
            }
            else {
                if (lay[end]) {
                    return false;
                }
            }
            start++;
            end--;
        }
        return true;
    }
    while (cur.length) {
        let next = getNext(cur);
        if (!layerIsSymmetrical(next))
            return false;
        cur = next.filter(node => !!node);
    }
    return true;
}
let p1 = new helper_1.TreeNode(1);
let p2 = new helper_1.TreeNode(2);
let p3 = new helper_1.TreeNode(2);
let p4 = new helper_1.TreeNode(3);
let p5 = new helper_1.TreeNode(4);
let p6 = new helper_1.TreeNode(4);
let p7 = new helper_1.TreeNode(3);
let p8 = new helper_1.TreeNode(5);
let p9 = new helper_1.TreeNode(5);
p1.left = p2;
p1.right = p3;
p2.left = p4;
p2.right = p5;
p3.left = p6;
p3.right = p7;
p4.left = p8;
p7.right = p9;
const Tester_1 = require("Tester");
let tester = new Tester_1.Tester(isSymmetrical);
tester.addTest(p1, true);
tester.doTest();
