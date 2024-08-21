// https://quera.org/problemset/144079/
//-----------------------------------------------------------------------------------------------
var getNumberOfEyeInEye = function (a, b) {
    if (!a || !b)
        return 0;
    if (a.length !== b.length)
        return 0;
    if (a.length !== 8 || b.length !== 8)
        return 0;
    var count = 0;
    for (var i = 0; i < 8; i++) {
        if (a[i] === b[i] && a[i] === 1)
            count++;
    }
    return count;
};
//-----------------------------------------------------------------------------------------------
// Read Input Numbers
var readline = require("readline");
var rl = readline.createInterface(process.stdin, process.stdout);
rl.question("", function (strArray1) {
    var arr1 = strArray1.split(" ").map(function (i) { return Number(i); });
    rl.question("", function (strArray2) {
        var arr2 = strArray2.split(" ").map(function (i) { return Number(i); });
        console.log(getNumberOfEyeInEye(arr1, arr2));
        rl.close();
    });
});
