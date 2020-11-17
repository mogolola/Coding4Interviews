"use strict";
var TreeNode = /** @class */ (function () {
    function TreeNode(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
function PrintFromTopToBottom(root) {
    // write code here
    if (!root)
        return [];
    var queue = [root], res = [];
    while (queue.length) {
        var node = queue.shift();
        if (node) {
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            res.push(node.val);
        }
    }
    return res;
}
