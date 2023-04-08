"use strict";
//-----------------------------------------------------------------------------------------------
// https://quera.org/problemset/80645/
//-----------------------------------------------------------------------------------------------
// Read Input
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});
rl.question("", (strNumber1) => {
    rl.question("", (strNumber2) => {
        rl.question("", (strNumber3) => {
            rl.question("", (strNumber4) => {
                const n1 = Number(strNumber1);
                const n2 = Number(strNumber2);
                const n3 = Number(strNumber3);
                const n4 = Number(strNumber4);
                rl.close();
            });
        });
    });
});
//-----------------------------------------------------------------------------------------------
