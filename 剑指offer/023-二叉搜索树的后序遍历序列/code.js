"use strict";
/**
 *       10
*     4      12
 * 2    8  11   15
 */
// [2, 8, 4, 11, 15, 12, 10]
function helper(sequence) {
    if (!sequence.length)
        return true;
    let [c] = sequence.splice(sequence.length - 1, 1);
    let i = 0;
    while (i < sequence.length) {
        if (sequence[i] > c)
            break;
        i++;
    }
    let j = i;
    while (j < sequence.length) {
        if (sequence[j] < c)
            return false;
        j++;
    }
    return helper(sequence.slice(0, i)) && helper(sequence.slice(i));
}
function VerifySquenceOfBST(sequence) {
    // write code here
    if (!sequence.length)
        return false;
    return helper(sequence);
}
