"use strict";
// https://quera.org/problemset/35253/
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSolution = void 0;
//-----------------------------------------------------------------------------------------------
const findSolution = (arr) => {
    let max = 0;
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            index = i;
        }
    }
    return index + 1;
};
exports.findSolution = findSolution;
//-----------------------------------------------------------------------------------------------
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
// Read Input Numbers
rl.question("", (strNumber1) => {
    const n = Number(strNumber1);
    rl.question("", (strArr) => {
        console.log((0, exports.findSolution)(strArr.split(" ").map((item) => Number(item))));
        rl.close();
    });
});
