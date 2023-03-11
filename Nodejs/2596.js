//-----------------------------------------------------------------------------------------------
define("2596", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.calculateNumber = void 0;
    var calculateNumber = function (arr) {
        var j = 1;
        var multiple = arr.reduce(function (i, all) { return i * all; }, 1);
        while (multiple * j <= 1000)
            j++;
        return j - 1;
    };
    exports.calculateNumber = calculateNumber;
    //-----------------------------------------------------------------------------------------------
    // Read Input
    var readline = require("readline");
    var rl = readline.createInterface(process.stdin, process.stdout);
    rl.question("", function (strN) {
        rl.question("", function (strArr) {
            var arr = strArr.split(" ").map(function (i) { return Number(i); });
            console.log((0, exports.calculateNumber)(arr));
            rl.close();
        });
    });
});
//-----------------------------------------------------------------------------------------------
