//-----------------------------------------------------------------------------------------------

export const calculateNumber = (arr: number[]) => {
  let j = 1;
  const multiple = arr.reduce((i, all) => i * all, 1);
  while (multiple * j <= 1000) j++;
  return j - 1;
};

//-----------------------------------------------------------------------------------------------
// Read Input

var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("", (strN: string) => {
  rl.question("", (strArr: string) => {
    const arr = strArr.split(" ").map((i) => Number(i));

    console.log(calculateNumber(arr));

    rl.close();
  });
});

//-----------------------------------------------------------------------------------------------
