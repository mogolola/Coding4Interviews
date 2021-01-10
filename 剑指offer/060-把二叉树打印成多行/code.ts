import {TreeNode, genNodes} from '../helper';
import {Tester} from "Tester";

function Print(pRoot:TreeNode | null)
{
    // write code here
    let res:Array<any> = [];
    if(!pRoot)  return res;
    let cur = [pRoot];
    let next = [];
    while(cur.length){
        for(let node of cur){
            node.left && next.push(node.left);
            node.right && next.push(node.right);
        }
        res.push(cur.map(node=>node.val));
        cur = next;
        next = [];
    }
    return res;
}

let [n1,n2,n3,n4,n5,n6,n7] = genNodes([8,6,10,5,7,9,11]);
n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.left = n6;
n3.right = n7;

let tester = new Tester(Print);
tester.addTest(n1, [[8],[6,10],[5,7,9,11]]);
tester.doTest();



