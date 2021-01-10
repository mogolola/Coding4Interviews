"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function KthNode(pRoot, k) {
    // write code here
    if (!pRoot)
        return null;
    let res;
    function mid(pRoot) {
        if (k < 0)
            return;
        if (pRoot.left) {
            mid(pRoot.left);
        }
        k -= 1;
        if (k == 0) {
            res = pRoot;
        }
        if (pRoot.right) {
            mid(pRoot.right);
        }
    }
    mid(pRoot);
    return res;
}
