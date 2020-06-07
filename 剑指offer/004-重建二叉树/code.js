"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tester_1 = require("Tester");
var TreeNode = /** @class */ (function () {
    function TreeNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var reConstructBinaryTree = function (pre, vin) {
    var buildTree = function (pre, vin) {
        var rootVal = pre[0];
        var root = new TreeNode(rootVal);
        var vin_root_idx = vin.indexOf(rootVal);
        var l = pre.length;
        if (vin_root_idx > 0)
            root.left = buildTree(pre.slice(1, vin_root_idx + 1), vin.slice(0, vin_root_idx));
        if (vin_root_idx < pre.length - 1)
            root.right = buildTree(pre.slice(vin_root_idx + 1, l), vin.slice(vin_root_idx + 1, l));
        return root;
    };
    var root = buildTree(pre, vin);
    var result = [];
    var stack = [root];
    while (stack.length !== 0) {
        var node = stack.pop();
        result.push(node.val);
        if (node.left)
            stack.unshift(node.left);
        if (node.right)
            stack.unshift(node.right);
    }
    return result;
};
var tester = new Tester_1.Tester(reConstructBinaryTree);
tester.addTest([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6], [1, 2, 3, 4, 5, 6, 7, 8]);
tester.addTest([1, 2, 3, 4, 5, 6, 7], [3, 2, 4, 1, 6, 5, 7], [1, 2, 5, 3, 4, 6, 7]);
tester.doTest();
