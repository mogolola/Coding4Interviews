"use strict";
function FirstNotRepeatingChar(str) {
    // write code here
    var map = new Array(128);
    for (var i = 0; i < 128; i++) {
        map[i] = 0;
    }
    for (var i = 0; i < str.length; i++) {
        map[str.charCodeAt(i)] += 1;
    }
    for (var i = 0; i < str.length; i++) {
        if (map[str.charCodeAt(i)] === 1) {
            return i;
        }
    }
    return -1;
}
