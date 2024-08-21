// https://quera.org/problemset/144079/

//-----------------------------------------------------------------------------------------------

const getNumberOfEyeInEye = (a?: Array<number>, b?: Array<number>): number => {
  if (!a || !b) return 0;

  if (a.length !== b.length) return 0;

  if (a.length !== 8 || b.length !== 8) return 0;

  let count = 0;
  for (let i = 0; i < 8; i++) {
    if (a[i] === b[i] && a[i] === 1) count++;
  }

  return count;
};

//-----------------------------------------------------------------------------------------------
// Read Input Numbers

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("", (strArray1: string) => {
  const arr1 = strArray1.split(" ").map((i) => Number(i));

  rl.question("", (strArray2: string) => {
    const arr2 = strArray2.split(" ").map((i) => Number(i));

    console.log(getNumberOfEyeInEye(arr1, arr2));

    rl.close();
  });
});
