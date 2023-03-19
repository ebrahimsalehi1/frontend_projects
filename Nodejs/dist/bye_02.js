"use strict";
//-----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tardasti = void 0;
const Tardasti = (lines) => {
    let result = [];
    for (let line of lines) {
        result.push([...line.split("1")].filter((i) => i.length > 0).length);
    }
    return result;
};
exports.Tardasti = Tardasti;
//-----------------------------------------------------------------------------------------------
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const lines = [];
let lineNumber = 0;
rl.on("line", (line) => {
    lines.push(line);
    lineNumber++;
    if (lineNumber === Number(lines[0]) + 1) {
        const result = (0, exports.Tardasti)(lines.filter((_, index) => index !== 0));
        result.forEach((item) => {
            console.log(item);
        });
        rl.close();
    }
});
//-----------------------------------------------------------------------------------------------
