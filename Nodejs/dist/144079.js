"use strict";
// https://quera.org/problemset/144079/
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSumAll = void 0;
//-----------------------------------------------------------------------------------------------
function getSumAll(n) {
    let a = [0, 1];
    const digitSum = (n) => String(n)
        .split("")
        .reduce((i, s) => Number(i) + Number(s), 0);
    for (let i = 2; i <= n; i++) {
        a[i] = 2 * a[i - 1] + digitSum(i);
    }
    return a[n] % (Math.pow(10, 9) + 7);
    // return a;
}
exports.getSumAll = getSumAll;
//-----------------------------------------------------------------------------------------------
// Read Input Numbers
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
rl.question("", (strNumber1) => {
    console.log(getSumAll(Number(strNumber1)));
    rl.close();
});
