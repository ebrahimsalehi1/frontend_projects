// https://quera.org/problemset/62451/

//-------------------------------------------------------------------

export const searchForTorob = (
  x1: number,
  v1: number,
  x2: number,
  v2: number
): string => {
  const direction = v1 * v2;
  const v11 = Math.abs(v1);
  const v22 = Math.abs(v2);

  if (v11 === v22) {
    if (x1 > x2 && v1 > 0 && v2 > 0) {
      if (v22 > v11) return "SEE YOU";
      else return "BORO BORO";
    }

    if (x1 > x2 && v1 > 0 && v2 < 0) return "BORO BORO";
    if (x1 > x2 && v1 < 0 && v2 > 0) return "SEE YOU";
    if (x1 > x2 && v1 < 0 && v2 < 0) {
      if (v11 > v22) return "SEE YOU";
      else "BORO BORO";
    }
  }

  if (x1 > x2 && v1 > 0 && v2 > 0) {
    if (v22 > v11) return "SEE YOU";
    else return "BORO BORO";
  }

  if (x1 > x2 && v1 > 0 && v2 < 0) return "BORO BORO";
  if (x1 > x2 && v1 < 0 && v2 > 0) return "SEE YOU";
  if (x1 > x2 && v1 < 0 && v2 < 0) {
    if (v11 > v22) return "SEE YOU";
    else "BORO BORO";
  }

  //.........

  if (x1 < x2 && v1 > 0 && v2 > 0) {
    if (v22 < v11) return "SEE YOU";
    else return "BORO BORO";
  }

  if (x1 < x2 && v1 > 0 && v2 < 0) return "SEE YOU";
  if (x1 < x2 && v1 < 0 && v2 > 0) return "BORO BORO";
  if (x1 < x2 && v1 < 0 && v2 < 0) {
    if (v11 < v22) return "SEE YOU";
    else "BORO BORO";
  }

  return "";
};

//-------------------------------------------------------------------

const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("", (strNumber1: string) => {
  rl.question("", (strNumber2: string) => {
    rl.question("", (strNumber3: string) => {
      rl.question("", (strNumber4: string) => {
        const x1 = Number(strNumber1);
        const v1 = Number(strNumber2);
        const x2 = Number(strNumber3);
        const v2 = Number(strNumber4);

        console.log(searchForTorob(x1, v1, x2, v2));

        rl.close();
      });
    });
  });
});

//-------------------------------------------------------------------
