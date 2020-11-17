export class TreeNode{
    val:number;
    left:TreeNode | null;
    right:TreeNode | null;

    constructor(x:number){
        this.val = x;
        this.left = null;
        this.right = null;
    }
}