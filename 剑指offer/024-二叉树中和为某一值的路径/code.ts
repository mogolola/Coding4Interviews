import {TreeNode} from "../helper";
import {Tester} from "Tester";

/**
 *       10
*     4      12
 * 2    8  11   15
 */


function FindPath(root:TreeNode, expectNumber:number)
{
    // write code here
    if(!root)   return false;
    let res:Array<any> = [];
    function traverse(node:TreeNode, expectNumber:number, path:Array<number>){
        let _path = path
        _path.push(node.val)
        if(node.left && node.val <= expectNumber)   traverse(node.left, expectNumber - node.val, _path);
        if(node.right && node.val <= expectNumber)  traverse(node.right, expectNumber - node.val, _path);
        if((!node.left) && (!node.right) && node.val === expectNumber)  res.push(path);
    }
    traverse(root, expectNumber, []);
    return res;
}
