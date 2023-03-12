//-----------------------------------------------------------------------------------------------
// https://quera.org/problemset/80651/

export const numberOfTeams = (arr: number[]) => {
  let result = 0;

  result =
    Math.min(arr[0], arr[1]) +
    Math.min(arr[2], arr[3]) +
    Math.min(arr[4], arr[5]);

  return result;
};

//-----------------------------------------------------------------------------------------------
// Read Input

var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("", (a1: string) => {
  rl.question("", (b1: string) => {
    rl.question("", (a2: string) => {
      rl.question("", (b2: string) => {
        rl.question("", (a3: string) => {
          rl.question("", (b3: string) => {
            console.log(
              numberOfTeams([
                Number(a1),
                Number(b1),
                Number(a2),
                Number(b2),
                Number(a3),
                Number(b3),
              ])
            );

            rl.close();
          });
        });
      });
    });
  });
});

//-----------------------------------------------------------------------------------------------
