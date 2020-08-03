/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/

function Merge(pHead1, pHead2)
{
    // write code here
    if(!pHead1)    return pHead2;
    if(!pHead2)    return pHead1;
    let cur = pHead2, pre = null, start = pHead1.val > pHead2.val? pHead2:pHead1;
    while(cur){
        if(!pHead1){
            pre.next = cur;
            break;
        }
        if(cur.val < pHead1.val){
            let toInsertBf = cur;
            cur = cur.next;
            toInsertBf.next = pHead1;
            if(pre)  pre.next = toInsertBf;
            pre = toInsertBf;
        }else{
            pre = pHead1;
            pHead1 = pHead1.next;
        }
    }
    return start;
}