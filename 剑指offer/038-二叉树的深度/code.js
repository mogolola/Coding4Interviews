"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 


function TreeDepth(pRoot)
{
    let r = 0;
    function traverse(stack){
        r = Math.max(r, stack.length);
        let node = stack[stack.length-1];
        if(node.left){
            stack.push(node.left);
            traverse(stack);
        }
        if(node.right){
            stack.push(node.right);
            traverse(stack);
        }
        stack.pop();
    }
    pRoot && traverse([pRoot])
    return r;

}

let p1 = new TreeNode(1);
let p2 = new TreeNode(2);
let p3 = new TreeNode(3);
let p4 = new TreeNode(4);
let p5 = new TreeNode(5);
let p6 = new TreeNode(6);
p1.left = p2;
p1.right = p3;
p2.left = p4;
p2.right = p5;
p4.right = p6;

let Tester = require('Tester');
let tester = new Tester.Tester(TreeDepth);
tester.addTest(p1, 4);
tester.addTest(null, 0)
tester.doTest();
