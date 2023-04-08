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

rl.question("", (strNumber1: string) => {
  rl.question("", (strNumber2: string) => {
    rl.question("", (strNumber3: string) => {
      rl.question("", (strNumber4: string) => {
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
