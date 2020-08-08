/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    // write code here
    if(!pHead || !pHead.next)    return pHead;
    let pre = null, cur = pHead, post = pHead.next;
    while(post){
        cur.next = pre;
        pre = cur;
        cur = post;
        post = post.next;
    }
    cur.next = pre;
    return cur;
}