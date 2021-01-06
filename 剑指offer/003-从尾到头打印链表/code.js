"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tester_1 = require("Tester");
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
var n1 = new ListNode(3);
var n2 = new ListNode(0);
var n3 = new ListNode(5);
n1.next = n2;
n2.next = n3;
let printListFromTailToHead_normal = function (head) {
    let arr = [];
    do {
        if (head && !((typeof head.val) === "undefined"))
            arr.splice(0, 0, head.val);
        if (head && head.next && head.next !== null) {
            head = head.next;
        }
        else {
            break;
        }
    } while (true);
    return arr;
};
let printListFromTailToHead_stack = (head) => {
    let stack = [];
    let result = [];
    while (head) {
        if (typeof head.val !== 'undefined') {
            stack.push(head.val);
        }
        head = head.next;
    }
    while (stack.length > 0) {
        result.push(stack.pop());
    }
    return result;
};
let printListFromTailToHead_recursive = function (head) {
    let resultArr = [];
    let f = (head) => {
        if (head && typeof head.val !== 'undefined') {
            f(head.next);
            resultArr.push(head.val);
        }
        return resultArr;
    };
    f(head);
    return resultArr;
};
let tester = new Tester_1.Tester(printListFromTailToHead_recursive);
tester.addTest(n1, [5, 0, 3]);
tester.addTest(n2, [5, 0]);
tester.addTest(n3, [5]);
tester.addTest({}, []);
tester.doTest();
