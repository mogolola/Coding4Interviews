"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tester_1 = require("Tester");
let replaceSpace = function (str) {
    return str.split("").map(c => { return c === " " ? "%20" : c; }).join("");
};
let tester = new Tester_1.Tester(replaceSpace);
tester.addTest("We Are Happy", "We%20Are%20Happy");
tester.addTest("", "");
tester.addTest(" ", "%20");
tester.doTest();
