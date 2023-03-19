"use strict";
// https://quera.org/problemset/3410/
Object.defineProperty(exports, "__esModule", { value: true });
exports.KhayamPascalMosalas = void 0;
//-----------------------------------------------------------------------------------------------
const KhayamPascalMosalas = (n) => {
    const result = [[1]];
    let first = 0;
    let second = 0;
    let currentRow = [];
    for (let i = 1; i <= n; i++) {
        currentRow = [1];
        for (let j = 0; j < result[i - 1].length; j++) {
            currentRow.push(result[i - 1][j] +
                (j + 1 < result[i - 1].length ? result[i - 1][j + 1] : 0));
        }
        result.push(currentRow);
    }
    return result;
};
exports.KhayamPascalMosalas = KhayamPascalMosalas;
//-----------------------------------------------------------------------------------------------
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
// Read Input Numbers
rl.question("", (strNumber) => {
    const n = Number(strNumber);
    const result = (0, exports.KhayamPascalMosalas)(n - 1);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].join(" "));
    }
    rl.close();
});
//-----------------------------------------------------------------------------------------------
