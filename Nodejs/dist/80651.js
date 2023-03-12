"use strict";
//-----------------------------------------------------------------------------------------------
// https://quera.org/problemset/80651/
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberOfTeams = void 0;
const numberOfTeams = (arr) => {
    let result = 0;
    result =
        Math.min(arr[0], arr[1]) +
            Math.min(arr[2], arr[3]) +
            Math.min(arr[4], arr[5]);
    return result;
};
exports.numberOfTeams = numberOfTeams;
//-----------------------------------------------------------------------------------------------
// Read Input
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
rl.question("", (a1) => {
    rl.question("", (b1) => {
        rl.question("", (a2) => {
            rl.question("", (b2) => {
                rl.question("", (a3) => {
                    rl.question("", (b3) => {
                        console.log((0, exports.numberOfTeams)([
                            Number(a1),
                            Number(b1),
                            Number(a2),
                            Number(b2),
                            Number(a3),
                            Number(b3),
                        ]));
                        rl.close();
                    });
                });
            });
        });
    });
});
//-----------------------------------------------------------------------------------------------
