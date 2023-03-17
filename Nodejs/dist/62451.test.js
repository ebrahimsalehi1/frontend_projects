"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _62451_1 = require("./62451");
it("62451", () => {
    expect((0, _62451_1.searchForTorob)(1, 5, 10, 6)).toBe("BORO BORO");
    expect((0, _62451_1.searchForTorob)(1, -5, -10, -5)).toBe("WAIT WAIT");
    expect((0, _62451_1.searchForTorob)(1, 6, 10, -5)).toBe("SEE YOU");
    expect((0, _62451_1.searchForTorob)(1, -6, 10, 5)).toBe("BORO BORO");
});
