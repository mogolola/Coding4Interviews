"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function left(i) {
    return 2 * ++i - 1;
}
function right(i) {
    return 2 * ++i;
}
function swap(A, i, j) {
    var temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}
function minHeapify(A, i) {
    var p = A[i];
    var l = A[left(i)], r = A[right(i)];
    var smallest;
    if (p > l) {
        smallest = left(i);
    }
    else {
        smallest = i;
    }
    if (r < A[smallest]) {
        smallest = right(i);
    }
    if (smallest !== i) {
        swap(A, smallest, i);
        minHeapify(A, smallest);
    }
}
function buildMinHeap(A) {
    for (var i = Math.floor(A.length / 2); i >= 0; i--) {
        minHeapify(A, i);
    }
}
function GetLeastNumbers_Solution(input, k) {
    // write code here
    var result = [];
    buildMinHeap(input);
    while (k-- > 0) {
        result.push(input.shift());
        minHeapify(input, 0);
    }
    return result;
}
var Tester_1 = require("Tester");
var tester = new Tester_1.Tester(GetLeastNumbers_Solution);
tester.addTest([4, 5, 1, 6, 2, 7, 3, 8], 4, [1, 2, 3, 4]);
tester.doTest();
