"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tester_1 = require("Tester");

function ListNode(x){
    this.val = x;
    this.next = null;
}

function FindKthToTail(head, k)
{
    // write code here
    let i = 0;
    let r;
    let origin = head;
    k-=1;
    while(head){
        if(k){k-=1}
        else{
            r = typeof(r)==="undefined"?origin:r.next;
        }
        head = head.next;
    }
    return r
}

var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var tester = new Tester_1.Tester(FindKthToTail);
tester.addTest(node1,1,5);
tester.doTest();
