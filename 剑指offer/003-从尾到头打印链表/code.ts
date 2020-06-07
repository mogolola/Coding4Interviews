import {Tester} from "Tester"
class ListNode{
    val:any
    next:ListNode|null
    constructor(val:any){
        this.val = val
        this.next = null
    }
}

var n1 = new ListNode(3);
var n2 = new ListNode(0);
var n3 = new ListNode(5);
n1.next = n2;
n2.next = n3;

let printListFromTailToHead_normal = function (head:any)
{
    let arr:any = [];
    do{
        if(head && !((typeof head.val)==="undefined"))    arr.splice(0,0,head.val);
        if(head && head.next && head.next !== null){
            head = head.next;
        }else{
            break;
        }
    }while(true)
    return arr;
}

let printListFromTailToHead_stack = (head:any)=>{
    let stack = [];
    let result = []
    while(head){
        if(typeof head.val!=='undefined'){
            stack.push(head.val);
        }
        head = head.next;
    }
    while(stack.length>0){
        result.push(stack.pop());
    }
    return result
    
}


let printListFromTailToHead_recursive = function (head:any){
    let resultArr:any[] = [];
    let f = (head:any)=>{
        if(head && typeof head.val!=='undefined'){
            f(head.next);
            resultArr.push(head.val);
        }
        return resultArr;
    }
    f(head);
    return resultArr;
}


let tester = new Tester(printListFromTailToHead_recursive);
tester.addTest(n1, [5,0,3]);
tester.addTest(n2, [5,0]);
tester.addTest(n3, [5]);
tester.addTest({},[])
tester.doTest();