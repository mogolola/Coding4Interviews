"use strict";
class TreeNode {
    constructor(x) {
        this.val = x;
        this.left = null;
        this.right = null;
    }
}
function PrintFromTopToBottom(root) {
    // write code here
    if (!root)
        return [];
    let queue = [root], res = [];
    while (queue.length) {
        let node = queue.shift();
        if (node) {
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            res.push(node.val);
        }
    }
    return res;
}
