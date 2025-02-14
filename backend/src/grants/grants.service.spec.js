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
var grants_service_1 = require("./grants.service");
var common_1 = require("@nestjs/common");
var cache_manager_1 = require("@nestjs/cache-manager");
var prisma_service_1 = require("../prisma/prisma.service");
var grants_interface_1 = require("./grants.interface");
var provider_service_1 = require("../provider/provider.service");
var fixtures_1 = require("../../test/fixtures");
var aws_service_1 = require("../aws/aws.service");
var nestjs_form_data_1 = require("nestjs-form-data");
var grantQuery = {
    sort: grants_interface_1.GrantSortOptions.NEWEST,
    filter: grants_interface_1.GrantFilterOptions.FUNDED,
    search: 'test',
};
describe('GrantsService', function () {
    var service;
    var prisma;
    var userA;
    var admin;
    var userB;
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
                                provide: provider_service_1.ProviderService,
                                useValue: fixtures_1.providerService,
                            },
                            {
                                provide: aws_service_1.AwsService,
                                useValue: fixtures_1.awsService,
                            },
                            grants_service_1.GrantsService,
                        ],
                    }).compile()];
                case 1:
                    module = _a.sent();
                    service = module.get(grants_service_1.GrantsService);
                    prisma = module.get(prisma_service_1.PrismaService);
                    grant = fixtures_1.grants[0];
                    id = grant.id, createdAt = grant.createdAt, updatedAt = grant.updatedAt, contributions = grant.contributions, team = grant.team, verified = grant.verified, createGrantBody = __rest(grant, ["id", "createdAt", "updatedAt", "contributions", "team", "verified"]);
                    createGrant = __assign(__assign({}, createGrantBody), { paymentAccount: createGrantBody.paymentAccountId });
                    fundingGoal = createGrant.fundingGoal, paymentAccount = createGrant.paymentAccount, updateGrantBody = __rest(createGrant, ["fundingGoal", "paymentAccount"]);
                    updateGrant = updateGrantBody;
                    userA = fixtures_1.users[0], admin = fixtures_1.users[1], userB = fixtures_1.users[2];
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be defined', function () {
        expect(service).toBeDefined();
    });
    describe('checkGrantOwnership', function () {
        it('should show that user is team member of grant', function () {
            expect(service.checkGrantOwnership(fixtures_1.grants[0], userA)).toEqual(true);
        });
        it('should throw error as user is not team member of grant', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, service.checkGrantOwnership(fixtures_1.grants[1], userB)];
                        }); }); }).rejects.toEqual(new common_1.HttpException('No edit rights', common_1.HttpStatus.FORBIDDEN))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('parseSorting', function () {
        it('should return the correct prisma input for GrantSortOptions.NEWEST', function () {
            expect(service.parseSorting(grants_interface_1.GrantSortOptions.NEWEST)).toEqual({
                createdAt: 'desc',
            });
        });
        it('should return the correct prisma input for GrantSortOptions.OLDEST', function () {
            expect(service.parseSorting(grants_interface_1.GrantSortOptions.OLDEST)).toEqual({
                createdAt: 'asc',
            });
        });
        it('should return the correct prisma input for GrantSortOptions.MOST_BACKED', function () {
            expect(service.parseSorting(grants_interface_1.GrantSortOptions.MOST_BACKED)).toEqual({
                contributions: {
                    _count: 'desc',
                },
            });
        });
        it('should return the correct prisma input for GrantSortOptions.MOST_FUNDED', function () {
            expect(service.parseSorting(grants_interface_1.GrantSortOptions.MOST_FUNDED)).toEqual(undefined);
        });
        it('should return the correct prisma input for a random string', function () {
            expect(service.parseSorting('random')).toEqual(undefined);
        });
    });
    describe('getAllGrants', function () {
        afterEach(function () {
            // Cleanup spies
            jest.clearAllMocks();
        });
        it('should call prisma with the correct parameters', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, service.getAllGrants(__assign(__assign({}, grantQuery), { isVerified: true }))];
                    case 1:
                        _a.sent();
                        expect(prisma.grant.findMany).toHaveBeenCalledWith({
                            where: {
                                verified: true,
                                name: {
                                    contains: 'test',
                                    mode: 'insensitive',
                                },
                            },
                            include: {
                                contributions: true,
                                team: true,
                            },
                            orderBy: {
                                createdAt: 'desc',
                            },
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the result of the findMany method', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, service.getAllGrants({
                            sort: '',
                            filter: '',
                            search: '',
                            isVerified: true,
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(fixtures_1.grants);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should filter the grants by funded', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, service.getAllGrants(__assign(__assign({}, grantQuery), { isVerified: true }))];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual([fixtures_1.grants[0]]);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should filter the grants by underfunded', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, service.getAllGrants(__assign(__assign({}, grantQuery), { filter: grants_interface_1.GrantFilterOptions.UNDERFUNDED, isVerified: true }))];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual([fixtures_1.grants[1], fixtures_1.grants[2]]);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should sort the grants by most funded', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, service.getAllGrants({
                            sort: grants_interface_1.GrantSortOptions.MOST_FUNDED,
                            filter: '',
                            isVerified: true,
                        })];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(fixtures_1.grants);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('getGrantById', function () {
        it('should call all functions appropriately', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, service.getGrantById(fixtures_1.grants[0].id)];
                    case 1:
                        result = _a.sent();
                        expect(prisma.grant.findUnique).toBeCalled();
                        expect(result).toEqual(fixtures_1.grants[0]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('getGrant', function () {
        beforeEach(function () {
            jest.spyOn(service, 'getGrantById').mockResolvedValue(fixtures_1.grants[2]);
        });
        afterEach(function () {
            // Cleanup spies
            jest.clearAllMocks();
        });
        it('should call all functions appropriately', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jest.spyOn(service, 'getGrantById').mockResolvedValue(fixtures_1.grants[0]);
                        return [4 /*yield*/, service.getGrant('cld1dnt1y000008m97yakhtrf', __assign({}, userA))];
                    case 1:
                        result = _a.sent();
                        expect(service.getGrantById).toBeCalled();
                        expect(result).toEqual(fixtures_1.grants[0]);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should handle NOT_FOUND appropriately', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jest.spyOn(service, 'getGrantById').mockResolvedValue(null);
                        return [4 /*yield*/, expect(service.getGrant('random', __assign({}, userA))).rejects.toEqual(new common_1.HttpException('Grant not found', common_1.HttpStatus.NOT_FOUND))];
                    case 1:
                        _a.sent();
                        expect(service.getGrantById).toBeCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        /**
         * This feature has been temporarily removed
         */
        // it('should handle unauthorized access for unverified grant with basic user', async () => {
        //   await expect(service.getGrant('random', undefined)).rejects.toEqual(
        //     new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED),
        //   );
        //   expect(service.getGrantById).toBeCalled();
        // });
        // it('should handle forbidden access for unverified grant with basic user', async () => {
        //   await expect(
        //     service.getGrant('random', {
        //       ...userA,
        //     }),
        //   ).rejects.toEqual(
        //     new HttpException('No edit rights', HttpStatus.FORBIDDEN),
        //   );
        //   expect(service.getGrantById).toBeCalled();
        // });
        // it('should allow admin to view an unverified grant', async () => {
        //   expect(
        //     await service.getGrant('random', {
        //       ...admin,
        //     }),
        //   ).toEqual(grants[2]);
        //   expect(service.getGrantById).toBeCalled();
        // });
        // it('should allow team member to view their own unverified grant', async () => {
        //   expect(
        //     await service.getGrant('random', {
        //       ...userB,
        //     }),
        //   ).toEqual(grants[2]);
        //   expect(service.getGrantById).toBeCalled();
        // });
    });
    describe('createGrant', function () {
        it('should return the expected value', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = expect;
                        return [4 /*yield*/, service.createGrant(createGrant, __assign({}, userA))];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toEqual(fixtures_1.grants[0]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('updateGrant', function () {
        it('should return the expected value', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = expect;
                        return [4 /*yield*/, service.updateGrant('id', createGrant, __assign({}, userA))];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toEqual(fixtures_1.grants[0]);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should throw error if grant doesn't exist", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jest.spyOn(service, 'getGrantById').mockResolvedValue(null);
                        return [4 /*yield*/, expect(service.updateGrant('id', updateGrant, __assign({}, userA))).rejects.toThrow(new common_1.HttpException('Grant not found', common_1.HttpStatus.NOT_FOUND))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not allow non team member to edit grant', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(service.updateGrant('1', updateGrant, __assign(__assign({}, userA), { id: 'randomuser' }))).rejects.toThrow(new common_1.HttpException('No edit rights', common_1.HttpStatus.FORBIDDEN))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('resubmitGrant', function () {
        afterEach(function () {
            // Cleanup spies
            jest.clearAllMocks();
        });
        it('should return the expected value', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        jest.spyOn(service, 'getGrantById').mockResolvedValue(__assign(__assign({}, fixtures_1.grants[0]), { verified: false }));
                        _a = expect;
                        return [4 /*yield*/, service.resubmitGrant('1', createGrant, __assign({}, userA))];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toEqual(fixtures_1.grants[0]);
                        return [2 /*return*/];
                }
            });
        }); });
        it("should throw error if grant doesn't exist", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jest.spyOn(service, 'getGrantById').mockResolvedValue(null);
                        return [4 /*yield*/, expect(service.resubmitGrant('1', createGrant, __assign({}, userA))).rejects.toThrow(new common_1.HttpException('Grant cannot be resubmitted', common_1.HttpStatus.UNPROCESSABLE_ENTITY))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it("should throw error if grant doesn't exist", function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(service.resubmitGrant('1', createGrant, __assign({}, userA))).rejects.toThrow(new common_1.HttpException('Grant cannot be resubmitted', common_1.HttpStatus.UNPROCESSABLE_ENTITY))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not allow non team member to resubmit grant', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        jest.spyOn(service, 'getGrantById').mockResolvedValue(__assign(__assign({}, fixtures_1.grants[0]), { verified: false }));
                        return [4 /*yield*/, expect(service.resubmitGrant('1', createGrant, __assign(__assign({}, userA), { id: 'randomuser' }))).rejects.toThrow(new common_1.HttpException('No edit rights', common_1.HttpStatus.FORBIDDEN))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('reviewGrant', function () {
        it('should allow not allow basic user to review', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(service.reviewGrant('1', __assign({}, userA))).rejects.toThrow(new common_1.HttpException('Unauthorized Access', common_1.HttpStatus.UNAUTHORIZED))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should allow admin to review', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = expect;
                        return [4 /*yield*/, service.reviewGrant('1', __assign({}, admin))];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toEqual(fixtures_1.grants[0]);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('checkoutGrants', function () {
        it('should call prisma with the appropriate values', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, service.checkoutGrants(fixtures_1.checkoutItems, __assign({}, userB))];
                    case 1:
                        _a.sent();
                        expect(prisma.grant.findMany).toBeCalledWith({
                            where: {
                                id: {
                                    in: fixtures_1.checkoutItems.grants.map(function (grant) { return grant.id; }),
                                },
                            },
                            include: {
                                paymentAccount: true,
                            },
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        it('should create a payment session', function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = expect;
                        return [4 /*yield*/, service.checkoutGrants(fixtures_1.checkoutItems, __assign({}, userB))];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).toEqual(fixtures_1.checkoutPaymentSession);
                        return [2 /*return*/];
                }
            });
        }); });
        it('should not allow owner to create a payment session', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, expect(service.checkoutGrants(fixtures_1.checkoutItems, __assign({}, userA))).rejects.toThrow(new common_1.HttpException('You cannot checkout your own grants!', common_1.HttpStatus.UNPROCESSABLE_ENTITY))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
