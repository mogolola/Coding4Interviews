"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *       10
*     4      12
 * 2    8  11   15
 */
function FindPath(root, expectNumber) {
    // write code here
    if (!root)
        return false;
    var res = [];
    function traverse(node, expectNumber, path) {
        path = JSON.parse(JSON.stringify(path));
        path.push(node.val);
        if (node.left && node.val <= expectNumber)
            traverse(node.left, expectNumber - node.val, path);
        if (node.right && node.val <= expectNumber)
            traverse(node.right, expectNumber - node.val, path);
        if ((!node.left) && (!node.right) && node.val === expectNumber)
            res.push(path);
    }
    traverse(root, expectNumber, []);
    return res;
}
