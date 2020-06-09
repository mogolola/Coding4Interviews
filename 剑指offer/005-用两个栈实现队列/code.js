"use strict";
var stack_1 = [], stack_2 = [];
function push(node) {
    stack_1.push(node);
}
function pop() {
    while (stack_1.length > 1) {
        stack_2.push(stack_1.pop());
    }
    var re = stack_1.pop();
    while (stack_2.length >= 1) {
        stack_1.push(stack_2.pop());
    }
    return re;
}
