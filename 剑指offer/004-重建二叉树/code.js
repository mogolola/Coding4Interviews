"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tester_1 = require("Tester");
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let reConstructBinaryTree = (pre, vin) => {
    let buildTree = (pre, vin) => {
        let rootVal = pre[0];
        let root = new TreeNode(rootVal);
        let vin_root_idx = vin.indexOf(rootVal);
        let l = pre.length;
        if (vin_root_idx > 0)
            root.left = buildTree(pre.slice(1, vin_root_idx + 1), vin.slice(0, vin_root_idx));
        if (vin_root_idx < pre.length - 1)
            root.right = buildTree(pre.slice(vin_root_idx + 1, l), vin.slice(vin_root_idx + 1, l));
        return root;
    };
    let root = buildTree(pre, vin);
    let result = [];
    let stack = [root];
    while (stack.length !== 0) {
        let node = stack.pop();
        result.push(node.val);
        if (node.left)
            stack.unshift(node.left);
        if (node.right)
            stack.unshift(node.right);
    }
    return result;
};
let tester = new Tester_1.Tester(reConstructBinaryTree);
tester.addTest([1, 2, 4, 7, 3, 5, 6, 8], [4, 7, 2, 1, 5, 3, 8, 6], [1, 2, 3, 4, 5, 6, 7, 8]);
tester.addTest([1, 2, 3, 4, 5, 6, 7], [3, 2, 4, 1, 6, 5, 7], [1, 2, 5, 3, 4, 6, 7]);
tester.doTest();
