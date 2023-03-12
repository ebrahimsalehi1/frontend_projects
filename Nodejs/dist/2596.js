"use strict";
//-----------------------------------------------------------------------------------------------
// https://quera.org/problemset/2596/
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateNumber = void 0;
const calculateNumber = (arr) => {
    let j = 1;
    const multiple = arr.reduce((i, all) => i * all, 1);
    while (multiple * j <= 1000) {
        j++;
    }
    return j - 1;
};
exports.calculateNumber = calculateNumber;
//-----------------------------------------------------------------------------------------------
// Read Input
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
rl.question("", (strN) => {
    rl.question("", (strArr) => {
        const arr = strArr.split(" ").map((i) => Number(i));
        console.log((0, exports.calculateNumber)(arr));
        rl.close();
    });
});
//-----------------------------------------------------------------------------------------------
