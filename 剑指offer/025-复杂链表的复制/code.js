function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}

function Clone(pHead)
{
    // write code here
    var _pHead = new RandomListNode(pHead.label);
    var pNode = pHead
    var _pNode = _pHead
    while(pNode){
        pNode.cloned = _pNode;
        if(pNode.next) _pNode.next = new RandomListNode(pNode.next.label);
        _pNode = _pNode.next;
        pNode = pNode.next;
    }
    pNode = pHead;
    _pNode = _pHead;
    while(pNode){
        _pNode.random = pNode.random.cloned;
        _pNode = _pNode.next;
        pNode = pNode.next;
    }
    pNode = pHead;
    while(pNode){
        delete pNode.cloned;
        pNode = pNode.next;
    }
    return _pHead
}

var p1 = new RandomListNode(1);
var p2 = new RandomListNode(2);
var p3 = new RandomListNode(3);
p1.next = p2;
p2.next = p3;
p3.random = p1;
p1.random = p3;
p2.random = p1;

var _p1 = Clone(p1);
console.log(_p1);