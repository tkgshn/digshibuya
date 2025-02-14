"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("../../../types/constants");
var Roles = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (0, common_1.SetMetadata)(constants_1.ROLES_KEY, args);
};
exports.Roles = Roles;
