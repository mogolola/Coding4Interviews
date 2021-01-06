"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tester_1 = require("Tester");
function Fibonacci(n) {
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    let dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 2] + dp[i - 1];
    }
    return dp[n];
}
let tester = new Tester_1.Tester(Fibonacci);
tester.addTest(0, 0);
tester.addTest(1, 1);
tester.addTest(2, 1);
tester.addTest(3, 2);
tester.addTest(4, 3);
tester.addTest(5, 5);
tester.doTest();
