"use strict";
// https://quera.org/problemset/171795/
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeIndication = void 0;
//------------------------------------------------
const timeIndication = (arr) => {
    const result = [];
    let calc = 0;
    for (const element of arr) {
        calc = (element[0] - 1) * element[2] + element[0] * element[1];
        result.push(calc);
    }
    return result;
};
exports.timeIndication = timeIndication;
//------------------------------------------------
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const lines = [];
let numberOfInitials = 1;
let lineNumber = 0;
rl.on("line", (line) => {
    lines.push(line);
    lineNumber++;
    if (lineNumber === Number(lines[0]) + numberOfInitials) {
        const m = Number(lines[0]);
        const n = Number(lines[1]);
        let matrix = [];
        for (let i = numberOfInitials; i < lines.length; i++) {
            matrix.push(lines[i].split(" ").map((item) => Number(item)));
        }
        for (let val of (0, exports.timeIndication)(matrix)) {
            console.log(val);
        }
        rl.close();
    }
});
