// https://quera.org/contest/assignments/51235/problems/175166
//-----------------------------------------------------------------------------------------------

export const Tardasti = (lines: string[]): number[] => {
  let result = [];
  for (let line of lines) {
    result.push([...line.split("1")].filter((i) => i.length > 0).length);
  }
  return result;
};

//-----------------------------------------------------------------------------------------------

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

const lines: string[] = [];
let lineNumber = 0;

rl.on("line", (line: string) => {
  lines.push(line);
  lineNumber++;

  if (lineNumber === Number(lines[0]) + 1) {
    const result = Tardasti(lines.filter((_, index) => index !== 0));
    result.forEach((item) => {
      console.log(item);
    });

    rl.close();
  }
});

//-----------------------------------------------------------------------------------------------
