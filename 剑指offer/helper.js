"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genNodes = exports.TreeNode = void 0;
class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}
exports.TreeNode = TreeNode;
function genNodes(arr) {
    return arr.map(v => new TreeNode(v));
}
exports.genNodes = genNodes;
