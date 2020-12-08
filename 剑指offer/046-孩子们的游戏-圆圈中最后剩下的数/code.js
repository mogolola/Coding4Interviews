function Node(val){
    this.val = val;
    this.next = null;
}

function genLoop(n){
    var head = new Node(0)
    var cur = head;
    for(var i=1; i<n+1;i++){
        if(i<n){
            cur.next = new Node(i);
            cur = cur.next;
        }
        cur.next = head;
    }
    return head;
}

function LastRemaining_Solution(n, m)
{
    // write code here
    if(n == 0)  return -1;
    var cur = genLoop(n);
    while(cur.next!==cur){
        for (var i = 1; i<m-1; i++){
            cur = cur.next;
        }
        var tmp = cur.next;
        cur.next = tmp.next;
        delete tmp;
        cur = cur.next;
    }
    return cur.val;
}

console.log(LastRemaining_Solution(5,3))