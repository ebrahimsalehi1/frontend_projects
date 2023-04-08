// https://quera.org/contest/assignments/51235/problems/175167
//-----------------------------------------------------------------------------------------------

export const jozvehDarsi = (arr: number[]) => {
  let midVal = 0;
  let maxVal = 0;
  let mIndex = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i];
      mIndex = i;
    }
  }
  arr.splice(mIndex, 1);

  //return { arr, r: Math.floor(arr.length / 2) };

  const sum = arr.slice(0, arr.length / 2).reduce((item, acc) => item + acc, 0);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === sum) {
      midVal = arr[i];
      mIndex = i;
    }
  }

  //return { mIndex, midVal, arr, sum };

  // if (
  //   arr.slice(0, arr.length / 2).reduce((item, acc) => item + acc, 0) ===
  //   arr[Math.floor(arr.length / 2)]
  // ) {
  //   midVal = arr[Math.floor(arr.length / 2)];
  // }

  // if (
  //   Math.floor(arr.length / 2) - 1 >= 0 &&
  //   arr.slice(0, arr.length / 2).reduce((item, acc) => item + acc, 0) ===
  //     arr[Math.floor(arr.length / 2) - 1]
  // ) {
  //   midVal = arr[Math.floor(arr.length / 2) - 1];
  // }

  return [midVal, maxVal];
};

//-----------------------------------------------------------------------------------------------

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

// Read Input Numbers

rl.question("", (strNumber1: string) => {
  rl.question("", (strArray: string) => {
    const number1 = Number(strNumber1);
    const array = strArray
      .split(" ")
      .filter((item) => item)
      .map((i) => Number(i));

    //console.log(array);

    const result = jozvehDarsi(array);
    console.log("." + result.join(" ") + ".");

    rl.close();
  });
});

//-----------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------
