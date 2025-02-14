"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seed = void 0;
var cuid_1 = require("./cuid");
var Seed = /** @class */ (function () {
    function Seed(prisma) {
        this.prisma = prisma;
        this.users = [];
        this.grants = [];
        this.cuid = new cuid_1.CUID();
    }
    return Seed;
}());
exports.Seed = Seed;
