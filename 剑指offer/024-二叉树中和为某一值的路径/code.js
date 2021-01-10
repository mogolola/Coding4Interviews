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
    let res = [];
    function traverse(node, expectNumber, path) {
        let _path = path;
        _path.push(node.val);
        if (node.left && node.val <= expectNumber)
            traverse(node.left, expectNumber - node.val, _path);
        if (node.right && node.val <= expectNumber)
            traverse(node.right, expectNumber - node.val, _path);
        if ((!node.left) && (!node.right) && node.val === expectNumber)
            res.push(path);
    }
    traverse(root, expectNumber, []);
    return res;
}
