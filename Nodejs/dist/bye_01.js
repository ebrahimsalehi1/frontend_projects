"use strict";
//-----------------------------------------------------------------------------------------------
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHowManyTimes = void 0;
const getHowManyTimes = (n) => {
    if (n == 1)
        return 2;
    return 3;
};
exports.getHowManyTimes = getHowManyTimes;
//-----------------------------------------------------------------------------------------------
// Read Input Numbers
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
rl.question("", (strNumber1) => {
    const n = Number(strNumber1);
    console.log((0, exports.getHowManyTimes)(n));
    rl.close();
});
