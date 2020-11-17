class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(x:number){
        this.val = x;
        this.left = null;
        this.right = null;
    }
    
}


function PrintFromTopToBottom(root: any)
{
    // write code here
    if(!root)   return [];
    let queue : Array<TreeNode> = [root], res : Array<number> = [];
    while(queue.length){
        let node = queue.shift();
        if(node){
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            res.push(node.val)    
        }
    }
    return res;
}