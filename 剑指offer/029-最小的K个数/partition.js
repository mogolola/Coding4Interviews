"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function swap(A, i, j) {
    var temp = A[i];
    A[i] = A[j];
    A[j] = temp;
}
function partition(input, low, high) {
    var pivot = input[low];
    var x = low;
    for (var i = low; i <= high; i++) {
        if (input[i] > pivot) {
            swap(input, i, x + 1);
            x++;
        }
    }
    swap(input, low, x);
    return x;
}
function GetLeastNumbers_Solution(input, k) {
    if (k > input.length || k <= 0)
        return [];
    var idx = partition(input, 0, input.length - 1);
    var low = 0;
    var high = input.length - 1;
    while (idx !== k - 1) {
        if (idx < k - 1) {
            low = idx + 1;
            idx = partition(input, low, high);
        }
        if (idx > k - 1) {
            high = idx - 1;
            idx = partition(input, low, high);
        }
    }
    return input.slice(k);
}
var Tester_1 = require("Tester");
var tester = new Tester_1.Tester(GetLeastNumbers_Solution);
tester.addTest([4, 5, 1, 6, 2, 7, 3, 8], 4, [1, 2, 3, 4]);
tester.doTest();
