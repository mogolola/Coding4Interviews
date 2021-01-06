"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function IsBalanced_Solution(pRoot)
{   
    if(!pRoot)  return true;
    function isBalance(node){
        if(node.left && node.right){
            let l = isBalance(node.left);
            let r = isBalance(node.right);
            if(l && r && Math.abs(l-r) < 2){
                return Math.max(l, r) + 1;
            }else{
                return false;
            }
        }
        if(node.left){
            if(node.left.left || node.left.right){
                return false;
            }
            return 2;
        }
        if(node.right){
            if(node.right.left || node.right.right){
                return false;
            }
            return 2;
        }
        return 1
    }
    return isBalance(pRoot) && true;
}

let p1 = new TreeNode(1);
let p2 = new TreeNode(2);
let p3 = new TreeNode(3);
let p4 = new TreeNode(4);
let p5 = new TreeNode(5);
let p6 = new TreeNode(6);
let p7 = new TreeNode(7);
p1.left = p2;
p1.right = p3;
p2.left = p4;
p2.right = p5;
p3.left = p6;
p3.right = p7;

let Tester = require('Tester');
let tester = new Tester.Tester(IsBalanced_Solution);
tester.addTest(p1, true);
tester.doTest();