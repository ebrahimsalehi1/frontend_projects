// https://quera.org/problemset/35253/

//-----------------------------------------------------------------------------------------------

export const findSolution = (arr: number[]) => {
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

//-----------------------------------------------------------------------------------------------

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

// Read Input Numbers

rl.question("", (strNumber1: string) => {
  const n = Number(strNumber1);
  rl.question("", (strArr: string) => {
    console.log(findSolution(strArr.split(" ").map((item) => Number(item))));
    rl.close();
  });
});
