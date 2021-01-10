"use strict";
//[1,2,3,4,5,6,7,0]
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function InversePairs(data) {
    // write code here
    let r = 0;
    let n = 0;
    while (n < data.length) {
        let i = 0;
        while (i < n) {
            if (data[i] > data[i + 1]) {
                swap(data, i, i + 1);
                r++;
            }
            i++;
        }
        n++;
    }
    return r;
}
console.log(InversePairs([1, 2, 3, 4, 5, 6, 7, 0]));
