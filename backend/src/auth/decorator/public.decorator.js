"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Public = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("../../../types/constants");
var Public = function () { return (0, common_1.SetMetadata)(constants_1.PUBLIC_KEY, true); };
exports.Public = Public;
