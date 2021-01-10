import {TreeNode, genNodes} from '../helper';
import {Tester} from "Tester";

function Serialize(pRoot:TreeNode | null)
{
    // write code here
    let res:Array<any> = [];
    function forwardTraverse(node:TreeNode|null){
        if(!node){
            res.push("#");
            return;
        }
        res.push(node.val);
        forwardTraverse(node.left);
        forwardTraverse(node.right);
    }
    forwardTraverse(pRoot);
    return res.join(",");
}
function Deserialize(s:string)
{
    // write code here
    let values = s.split(",");
    if(!values.length)  return null;
    let i = -1;
    function buildTreeNode(){
        if(i>=values.length){
            return null
        }
        i+=1;
        let val = values[i];
        if(val !== "#"){
            let node = new TreeNode(parseInt(val));
            node.left = buildTreeNode();
            node.right = buildTreeNode();
            return node;
        }else{
            return null;
        }
    }
    let pRoot = buildTreeNode();
    return pRoot;
}

let [n1,n2,n3,n4,n5,n6,n7] = genNodes([8,6,10,5,7,9,11]);
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

Deserialize(Serialize(n1));