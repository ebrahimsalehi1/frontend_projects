//-----------------------------------------------------------------------------------------------
// https://quera.org/problemset/18310/

export const stringProcess = (str1: string, str2: string) => {
  const obj = { a: "", b: "", result: false };

  if (str2.length < str1.length) return obj;
  if (str1.length === 0 && str2.length > 0) return obj;

  const str = str2.replace(str1, "");
  return {
    a: str.substring(0, str.length / 2),
    b: str.substring(str.length / 2, str.length),
    result:
      str.substring(0, str.length / 2) ===
      str.substring(str.length / 2, str.length),
  };
};

//-----------------------------------------------------------------------------------------------
// Read Input

var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);

rl.question("", (str1: string) => {
  rl.question("", (str2: string) => {
    if (stringProcess(str1, str2).result) console.log("Yes");
    else console.log("No");

    rl.close();
  });
});

//-----------------------------------------------------------------------------------------------
