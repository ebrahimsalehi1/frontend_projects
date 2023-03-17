const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

//-----------------------------------------------------------------------------------------------
// Read Input Numbers

// rl.question("Number 1 ?", (strNumber1: string) => {
//   rl.question("Number 2 ?", (strNumber2: string) => {
//     rl.close();
//   });
// });

//-----------------------------------------------------------------------------------------------
// Read Input Numbers

// rl.question("Number 1 ?", (strNumber1: string) => {
//   rl.question("Array in Line ?", (strArray: string) => {
//     const number1 = Number(strNumber1);
//     const array = strArray.split(" ").map((i) => Number(i));

//     console.log(number1, array);

//     rl.close();
//   });
// });

//-----------------------------------------------------------------------------------------------
// Input for matrix

// const lines: string[] = [];
// const lineNumber = 0;

// rl.on("line", (line: string) => {
//   lines.push(line);
//   lineNumber++;

//   if (lineNumber === Number(lines[0]) + 2) {
//     const m = Number(lines[0]);
//     const n = Number(lines[1]);
//     let matrix: number[][] = [];
//     for (let i = 2; i < lines.length; i++) {
//       matrix.push(lines[i].split(" ").map((item) => Number(item)));
//     }

//     console.log(matrix);

//     rl.close();
//   }
// });

//-----------------------------------------------------------------------------------------------

const Stack = function () {
  let count: number = 0;
  let storage: any = {};

  // Adds a value onto the end of the stack
  const push = function (value: any) {
    storage[count] = value;
    count++;
  };

  // Removes and returns the value at the end of the stack
  const pop = function () {
    if (count === 0) {
      return undefined;
    }

    count--;
    const result = storage[count];
    delete storage[count];
    return result;
  };

  const size = function () {
    return count;
  };

  // Returns the value at the end of the stack
  const peek = function () {
    return storage[count - 1];
  };

  return { push, pop, peek, size };
};

// const myStack = Stack();

// myStack.push(1);
// myStack.push(2);
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());
// console.log(myStack.size());
// console.log(myStack.peek());
// console.log(myStack.pop());
// console.log(myStack.peek());

//-----------------------------------------------------------------------------------------------
/* Sets */

function mySet() {
  // the const collection will hold the set
  const collection: any[] = [];
  // this method will check for the presence of an element and return true or false
  const has = function (element: any) {
    return collection.indexOf(element) !== -1;
  };
  // this method will return all the values in the set
  const values = function () {
    return collection;
  };
  // this method will add an element to the set
  const add = function (element: any) {
    if (!has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  // this method will remove an element from a set
  const remove = function (element: any) {
    if (has(element)) {
      const index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // this method will return the size of the collection
  const size = function () {
    return collection.length;
  };
  // this method will return the union of two sets
  const union = function (otherSet: any) {
    const unionSet = mySet();
    const firstSet = values();
    const secondSet = otherSet.values();
    firstSet.forEach(function (e: any) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e: any) {
      unionSet.add(e);
    });
    return unionSet;
  };
  // this method will return the intersection of two sets as a new set
  const intersection = function (otherSet: any) {
    const intersectionSet = mySet();
    const firstSet = values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  // this method will return the difference of two sets as a new set
  const difference = function (otherSet: any) {
    const differenceSet = mySet();
    const firstSet = values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  // this method will test if the set is a subset of a different set
  const subset = function (otherSet: any) {
    const firstSet = values();
    return firstSet.every(function (value: any) {
      return otherSet.has(value);
    });
  };

  return { add, remove, size, union, intersection, difference, subset, values };
}
const setA = mySet();
const setB = mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
// console.log(setA.intersection(setB).values());
// console.log(setB.difference(setA).values());

// const setC = new Set();
// const setD = new Set();
// setC.add("a");
// setD.add("b");
// setD.add("c");
// setD.add("a");
// setD.add("d");
// console.log(setD.values());
// setD.delete("a");
// console.log(setD.has("a"));
// console.log(setD.add("d"));
