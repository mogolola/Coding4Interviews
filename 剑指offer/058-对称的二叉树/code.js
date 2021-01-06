"use strict";
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("../helper");
function isSymmetrical(pRoot) {
    // write code here
    if (!pRoot)
        return true;
    var cur = [pRoot];
    function getNext(cur) {
        var next = [];
        while (cur.length) {
            var node = cur.shift();
            node && next.push(node.left);
            node && next.push(node.right);
        }
        return next;
    }
    function layerIsSymmetrical(lay) {
        var start = 0, end = lay.length - 1;
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
        var next = getNext(cur);
        if (!layerIsSymmetrical(next))
            return false;
        cur = next.filter(function (node) { return !!node; });
    }
    return true;
}
var p1 = new helper_1.TreeNode(1);
var p2 = new helper_1.TreeNode(2);
var p3 = new helper_1.TreeNode(2);
var p4 = new helper_1.TreeNode(3);
var p5 = new helper_1.TreeNode(4);
var p6 = new helper_1.TreeNode(4);
var p7 = new helper_1.TreeNode(3);
var p8 = new helper_1.TreeNode(5);
var p9 = new helper_1.TreeNode(5);
p1.left = p2;
p1.right = p3;
p2.left = p4;
p2.right = p5;
p3.left = p6;
p3.right = p7;
p4.left = p8;
p7.right = p9;
var Tester_1 = require("Tester");
var tester = new Tester_1.Tester(isSymmetrical);
tester.addTest(p1, true);
tester.doTest();
