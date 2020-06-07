import {Tester} from "Tester";

let replaceSpace = function (str:String):String
{
    return str.split("").map(c=>{return c===" "?"%20":c}).join("");
}

let tester = new Tester(replaceSpace);
tester.addTest("We Are Happy","We%20Are%20Happy");
tester.addTest("","");
tester.addTest(" ","%20");
tester.doTest();