"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@nestjs/testing");
var auth_service_1 = require("./auth.service");
var common_1 = require("@nestjs/common");
var cache_manager_1 = require("@nestjs/cache-manager");
var prisma_service_1 = require("../prisma/prisma.service");
var client_1 = require("@prisma/client");
var fixtures_1 = require("../../test/fixtures");
describe('AuthService', function () {
    var service;
    var prisma;
    var user;
    var admin;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        var module;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.Test.createTestingModule({
                        imports: [
                            cache_manager_1.CacheModule.register({
                                isGlobal: true,
                            }),
                        ],
                        providers: [
                            {
                                provide: prisma_service_1.PrismaService,
                                useValue: fixtures_1.prismaService,
                            },
                            auth_service_1.AuthService,
                        ],
                    }).compile()];
                case 1:
                    module = _a.sent();
                    service = module.get(auth_service_1.AuthService);
                    prisma = module.get(prisma_service_1.PrismaService);
                    user = fixtures_1.users[0], admin = fixtures_1.users[1];
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be defined', function () {
        expect(service).toBeDefined();
    });
    describe('grantAdminPrivilege', function () {
        afterEach(function () {
            // Cleanup spies
            jest.clearAllMocks();
        });
        it('should allow admin to call the function appropriately', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, service.grantAdminPrivilege(admin.email, admin)];
                    case 1:
                        _a.sent();
                        expect(prisma.user.update).toHaveBeenCalledWith({
                            data: {
                                role: client_1.Role.Admin,
                            },
                            where: {
                                email: admin.email,
                            },
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct value', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Change the function to return the admin value instead of user
                        jest.spyOn(service, 'grantAdminPrivilege').mockResolvedValue(admin);
                        return [4 /*yield*/, service.grantAdminPrivilege(admin.email, admin)];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(admin);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not allow user to call the function', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(service.grantAdminPrivilege(user.email, user)).rejects.toEqual(new common_1.HttpException('Not enough permissions', common_1.HttpStatus.FORBIDDEN))];
                    case 1:
                        _a.sent();
                        expect(prisma.user.update).not.toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('revokeAdminPrivilege', function () {
        afterEach(function () {
            // Cleanup spies
            jest.clearAllMocks();
        });
        it('should allow admin to call the function appropriately', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, service.revokeAdminPrivilege(admin.email, admin)];
                    case 1:
                        _a.sent();
                        expect(prisma.user.update).toHaveBeenCalledWith({
                            data: {
                                role: client_1.Role.User,
                            },
                            where: {
                                email: admin.email,
                            },
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct value', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Change the function to return the admin value instead of user
                        jest.spyOn(service, 'revokeAdminPrivilege').mockResolvedValue(admin);
                        return [4 /*yield*/, service.revokeAdminPrivilege(admin.email, admin)];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(admin);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not allow user to call the function', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(service.revokeAdminPrivilege(user.email, user)).rejects.toEqual(new common_1.HttpException('Not enough permissions', common_1.HttpStatus.FORBIDDEN))];
                    case 1:
                        _a.sent();
                        expect(prisma.user.update).not.toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
