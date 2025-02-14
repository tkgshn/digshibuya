"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
var testing_1 = require("@nestjs/testing");
var grants_controller_1 = require("./grants.controller");
var cache_manager_1 = require("@nestjs/cache-manager");
var grants_service_1 = require("./grants.service");
var grants_interface_1 = require("./grants.interface");
var fixtures_1 = require("../../test/fixtures");
var prisma_service_1 = require("../prisma/prisma.service");
var provider_service_1 = require("../provider/provider.service");
var aws_service_1 = require("../aws/aws.service");
var nestjs_form_data_1 = require("nestjs-form-data");
describe('GrantsController', function () {
    var controller;
    var service;
    var user;
    var createGrant;
    var updateGrant;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        var module, grant, id, createdAt, updatedAt, contributions, team, verified, createGrantBody, fundingGoal, paymentAccount, updateGrantBody;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.Test.createTestingModule({
                        imports: [
                            cache_manager_1.CacheModule.register({
                                isGlobal: true,
                            }),
                            nestjs_form_data_1.NestjsFormDataModule.config({
                                isGlobal: true,
                            }),
                        ],
                        providers: [
                            {
                                provide: prisma_service_1.PrismaService,
                                useValue: fixtures_1.prismaService,
                            },
                            {
                                provide: grants_service_1.GrantsService,
                                useValue: fixtures_1.grantsService,
                            },
                            {
                                provide: provider_service_1.ProviderService,
                                useValue: fixtures_1.providerService,
                            },
                            {
                                provide: aws_service_1.AwsService,
                                useValue: fixtures_1.awsService,
                            },
                        ],
                        controllers: [grants_controller_1.GrantsController],
                    }).compile()];
                case 1:
                    module = _a.sent();
                    controller = module.get(grants_controller_1.GrantsController);
                    service = module.get(grants_service_1.GrantsService);
                    grant = fixtures_1.grants[0];
                    id = grant.id, createdAt = grant.createdAt, updatedAt = grant.updatedAt, contributions = grant.contributions, team = grant.team, verified = grant.verified, createGrantBody = __rest(grant, ["id", "createdAt", "updatedAt", "contributions", "team", "verified"]);
                    createGrant = __assign(__assign({}, createGrantBody), { paymentAccount: createGrantBody.paymentAccountId });
                    fundingGoal = createGrant.fundingGoal, paymentAccount = createGrant.paymentAccount, updateGrantBody = __rest(createGrant, ["fundingGoal", "paymentAccount"]);
                    updateGrant = updateGrantBody;
                    user = fixtures_1.users[0];
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be defined', function () {
        expect(controller).toBeDefined();
    });
    describe('getAllGrants', function () {
        var queries = {
            sort: '',
            filter: grants_interface_1.GrantFilterOptions.FUNDED,
            search: '',
        };
        it('should call the service function appropriately', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.getAllGrants(queries)];
                    case 1:
                        _a.sent();
                        expect(service.getAllGrants).toHaveBeenCalledWith(__assign(__assign({}, queries), { isVerified: true }));
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct value', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.getAllGrants(queries)];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(fixtures_1.grants);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('createGrant', function () {
        it('should call the service function appropriately', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.createGrant(createGrant, {
                            user: user,
                        })];
                    case 1:
                        _a.sent();
                        expect(service.createGrant).toHaveBeenCalledWith(createGrant, user);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct value', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.createGrant(createGrant, {
                            user: user,
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(fixtures_1.grants[0]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('reviewGrant', function () {
        it('should call the service function appropriately', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.reviewGrant(fixtures_1.grants[0].id, {
                            user: user,
                        })];
                    case 1:
                        _a.sent();
                        expect(service.reviewGrant).toHaveBeenCalledWith(fixtures_1.grants[0].id, user);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct value', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.reviewGrant(fixtures_1.grants[0].id, {
                            user: user,
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(fixtures_1.grants[0]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('getGrant', function () {
        it('should call the service function appropriately', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.getGrant(fixtures_1.grants[0].id, {
                            user: user,
                        })];
                    case 1:
                        _a.sent();
                        expect(service.getGrant).toHaveBeenCalledWith(fixtures_1.grants[0].id, user);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct value', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.getGrant(fixtures_1.grants[0].id, {
                            user: user,
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(fixtures_1.grants[0]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('updateGrant', function () {
        it('should call the service function appropriately', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.updateGrant(fixtures_1.grants[0].id, updateGrant, {
                            user: user,
                        })];
                    case 1:
                        _a.sent();
                        expect(service.updateGrant).toHaveBeenCalledWith(fixtures_1.grants[0].id, updateGrant, user);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct value', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.updateGrant(fixtures_1.grants[0].id, updateGrant, {
                            user: user,
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(fixtures_1.grants[0]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('resubmitGrant', function () {
        it('should call the service function appropriately', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.resubmitGrant(fixtures_1.grants[0].id, createGrant, {
                            user: user,
                        })];
                    case 1:
                        _a.sent();
                        expect(service.resubmitGrant).toHaveBeenCalledWith(fixtures_1.grants[0].id, createGrant, user);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct value', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.resubmitGrant(fixtures_1.grants[0].id, createGrant, {
                            user: user,
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(fixtures_1.grants[0]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('checkoutGrants', function () {
        it('should call the service function appropriately', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.checkoutGrants(fixtures_1.checkoutItems, {
                            user: user,
                        })];
                    case 1:
                        _a.sent();
                        expect(service.checkoutGrants).toHaveBeenCalledWith(fixtures_1.checkoutItems, user);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct properties', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.checkoutGrants(fixtures_1.checkoutItems, {
                            user: user,
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result['url']).toBeDefined();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
