//-----------------------------------------------------------------------------------------------

export const getHowManyTimes = (n: number): number => {
  if (n == 1) return 2;

  return 3;
};

//-----------------------------------------------------------------------------------------------
// Read Input Numbers

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("", (strNumber1: string) => {
  const n = Number(strNumber1);

  console.log(getHowManyTimes(n));

  rl.close();
});
