import {TreeNode, genNodes} from '../helper';
import {Tester} from "Tester";

function KthNode(pRoot:TreeNode|null, k:number)
{
    // write code here
    if(!pRoot)  return null;
    let res
    function mid(pRoot:TreeNode){
        if(k<0) return;
        if(pRoot.left){
            mid(pRoot.left);
        }
        k-=1;
        if(k==0){
            res = pRoot;
        }
        if(pRoot.right){
            mid(pRoot.right);
        }
    }
    mid(pRoot);
    return res;
}