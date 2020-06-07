"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tester_1 = require("Tester");
var replaceSpace = function (str) {
    return str.split("").map(function (c) { return c === " " ? "%20" : c; }).join("");
};
var tester = new Tester_1.Tester(replaceSpace);
tester.addTest("We Are Happy", "We%20Are%20Happy");
tester.addTest("", "");
tester.addTest(" ", "%20");
tester.doTest();
