"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _18310_1 = require("./18310");
it("1830", () => {
    expect((0, _18310_1.stringProcess)("abcab", "ababcabab").result).toBe(true);
    expect((0, _18310_1.stringProcess)("abcd", "bcdabd").result).toBe(false);
    expect((0, _18310_1.stringProcess)("abc", "dabcd").result).toBe(true);
    expect((0, _18310_1.stringProcess)("abc", "").result).toBe(false);
});
