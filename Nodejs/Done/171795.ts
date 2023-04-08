// https://quera.org/problemset/171795/

//------------------------------------------------

export const timeIndication = (arr: number[][]): number[] => {
  const result = [];
  let calc = 0;
  for (const element of arr) {
    calc = (element[0] - 1) * element[2] + element[0] * element[1];
    result.push(calc);
  }
  return result;
};

//------------------------------------------------

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const lines: string[] = [];
let numberOfInitials = 1;
let lineNumber = 0;

rl.on("line", (line: string) => {
  lines.push(line);
  lineNumber++;

  if (lineNumber === Number(lines[0]) + numberOfInitials) {
    const m = Number(lines[0]);
    const n = Number(lines[1]);
    let matrix: number[][] = [];
    for (let i = numberOfInitials; i < lines.length; i++) {
      matrix.push(lines[i].split(" ").map((item) => Number(item)));
    }

    for (let val of timeIndication(matrix)) {
      console.log(val);
    }

    rl.close();
  }
});
