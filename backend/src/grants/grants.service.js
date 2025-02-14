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
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrantsService = void 0;
var common_1 = require("@nestjs/common");
var client_1 = require("@prisma/client");
var grants_interface_1 = require("./grants.interface");
var cuid = require("cuid");
var provider_interface_1 = require("../provider/provider.interface");
var GrantsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var GrantsService = _classThis = /** @class */ (function () {
        function GrantsService_1(prisma, providerService, awsService, qfService) {
            this.prisma = prisma;
            this.providerService = providerService;
            this.awsService = awsService;
            this.qfService = qfService;
            this.paymentProvider = this.providerService.getProvider();
        }
        /**
         * Throws error if not a member, otherwise returns true
         * @param grant
         * @param user
         * @returns `true` if is a team member
         */
        GrantsService_1.prototype.checkGrantOwnership = function (grant, user) {
            if (!grant.team.some(function (member) { return member.id === user.id; }))
                throw new common_1.HttpException('No edit rights', common_1.HttpStatus.FORBIDDEN);
            return true;
        };
        /**
         * Converts a basic sorting string to something Prisma can understand
         * @param sort Sorting option
         * @returns Prisma orderBy query object
         */
        GrantsService_1.prototype.parseSorting = function (sort) {
            switch (sort) {
                case grants_interface_1.GrantSortOptions.NEWEST:
                    return {
                        createdAt: 'desc',
                    };
                case grants_interface_1.GrantSortOptions.OLDEST:
                    return {
                        createdAt: 'asc',
                    };
                // case GrantSortOptions.MOST_FUNDED: // Currently quite difficult with prisma
                //   return {
                //     createdAt: 'desc',
                //   };
                case grants_interface_1.GrantSortOptions.MOST_BACKED:
                    return {
                        contributions: {
                            _count: 'desc',
                        },
                    };
            }
        };
        /**
         * To retrieve all grants from public route
         * @param data
         * @returns
         */
        GrantsService_1.prototype.getAllGrants = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var isVerified, sort, filter, search, grants;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isVerified = data.isVerified, sort = data.sort, filter = data.filter, search = data.search;
                            return [4 /*yield*/, this.prisma.grant.findMany({
                                    where: {
                                        verified: isVerified,
                                        name: {
                                            contains: search,
                                            mode: 'insensitive',
                                        },
                                    },
                                    include: {
                                        contributions: true,
                                        team: true,
                                    },
                                    orderBy: this.parseSorting(sort),
                                })];
                        case 1:
                            grants = _a.sent();
                            // Apply filtering first. Currently no Prisma based solution, so it's a workaround
                            switch (filter) {
                                case grants_interface_1.GrantFilterOptions.FUNDED:
                                    grants = grants.filter(function (grant) {
                                        var total = grant.contributions.reduce(function (acc, contribution) { return acc + contribution.amountUsd; }, 0);
                                        return total >= grant.fundingGoal;
                                    });
                                    break;
                                case grants_interface_1.GrantFilterOptions.UNDERFUNDED:
                                    grants = grants.filter(function (grant) {
                                        var total = grant.contributions.reduce(function (acc, contribution) { return acc + contribution.amountUsd; }, 0);
                                        return total < grant.fundingGoal;
                                    });
                                    break;
                            }
                            // Due to Prisma limitations, this is a workaround
                            if (sort === grants_interface_1.GrantSortOptions.MOST_FUNDED) {
                                grants = grants.sort(function (a, b) {
                                    var aTotal = a.contributions.reduce(function (acc, contribution) { return acc + contribution.amountUsd; }, 0);
                                    var bTotal = b.contributions.reduce(function (acc, contribution) { return acc + contribution.amountUsd; }, 0);
                                    // Sort in descending order
                                    return bTotal - aTotal;
                                });
                            }
                            return [2 /*return*/, grants.map(function (grant) {
                                    return __assign(__assign({}, grant), { amountRaised: grant.contributions.reduce(function (acc, contribution) { return acc + contribution.amountUsd; }, 0) });
                                })];
                    }
                });
            });
        };
        /**
         * For internal use.
         * @note Also retrieves unverified grants
         * @param id ID of the grant to retrieve
         * @returns
         */
        GrantsService_1.prototype.getGrantById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.grant.findUnique({
                                where: {
                                    id: id,
                                },
                                include: {
                                    contributions: true,
                                    team: true,
                                    paymentAccount: {
                                        include: {
                                            provider: true,
                                        },
                                    },
                                },
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Retrieve a grant by ID
         * @param id
         * @param user Used to check if the caller is the owner in the event
         * that the grant is still unverified to prevent leaking private info
         * @returns
         */
        GrantsService_1.prototype.getGrant = function (id, user) {
            return __awaiter(this, void 0, void 0, function () {
                var grant;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getGrantById(id)];
                        case 1:
                            grant = _a.sent();
                            if (!grant)
                                throw new common_1.HttpException('Grant not found', common_1.HttpStatus.NOT_FOUND);
                            /**
                             * If a grant is not verified, we need to do a few checks:
                             * 1. Only admins can view unverified grants
                             * 2. Only the grant owner can view their own unverified grant
                             */
                            user; // Do nothing with user for now
                            // if (!grant.verified) {
                            //   if (!user)
                            //     throw new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED);
                            //   if (user.role !== Role.Admin) this.checkGrantOwnership(grant, user);
                            // }
                            // Otherwise, we can return it
                            return [2 /*return*/, __assign(__assign({}, grant), { amountRaised: grant.contributions.reduce(function (acc, contribution) { return acc + contribution.amountUsd; }, 0) })];
                    }
                });
            });
        };
        /**
         * Creates a grant with the provided data
         * @param data
         * @param user The owner to tie this grant to
         * @returns
         */
        GrantsService_1.prototype.createGrant = function (data, user) {
            return __awaiter(this, void 0, void 0, function () {
                var paymentProvider, id;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.paymentProvider];
                        case 1:
                            paymentProvider = _a.sent();
                            id = cuid();
                            return [4 /*yield*/, this.prisma.grant.create({
                                    data: __assign(__assign({}, data), { id: id, 
                                        // image: data.image,  // 直接URLを保存
                                        twitter: data.twitter || '', verified: true, team: {
                                            connect: {
                                                id: user.id,
                                            },
                                        }, paymentAccount: {
                                            connectOrCreate: {
                                                create: {
                                                    recipientAddress: data.paymentAccount,
                                                    provider: {
                                                        connect: {
                                                            id: paymentProvider.id,
                                                        },
                                                    },
                                                },
                                                where: {
                                                    recipientAddress_providerId: {
                                                        recipientAddress: data.paymentAccount,
                                                        providerId: paymentProvider.id,
                                                    },
                                                },
                                            },
                                        } }),
                                    include: {
                                        team: true,
                                    },
                                })];
                        case 2: 
                        // 画像のアップロード処理を削除
                        // // First, we need to upload this to AWS
                        // const image = await this.awsService.uploadFile(data.image, id);
                        // After getting back the url, we create an entry in our database
                        return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Updates a grant
         * @param id
         * @param data
         * @param user Checks if caller is a team member that can edit this grant
         * @returns
         */
        GrantsService_1.prototype.updateGrant = function (id, data, user) {
            return __awaiter(this, void 0, void 0, function () {
                var grant, image;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getGrantById(id)];
                        case 1:
                            grant = _a.sent();
                            if (!grant)
                                throw new common_1.HttpException('Grant not found', common_1.HttpStatus.NOT_FOUND);
                            // Check if grant owner is calling this function
                            this.checkGrantOwnership(grant, user);
                            if (!data.image) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.awsService.uploadFile(data.image, id)];
                        case 2:
                            image = _a.sent();
                            _a.label = 3;
                        case 3: return [4 /*yield*/, this.prisma.grant.update({
                                data: __assign(__assign({}, data), { image: image }),
                                where: {
                                    id: id,
                                },
                            })];
                        case 4: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Resubmit a grant for verification
         * @note Even the funding goal & payment account can be changed
         * @param id
         * @param data
         * @param user
         * @returns
         */
        GrantsService_1.prototype.resubmitGrant = function (id, data, user) {
            return __awaiter(this, void 0, void 0, function () {
                var grant, paymentProvider, image;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getGrantById(id)];
                        case 1:
                            grant = _a.sent();
                            /**
                             * If a grant doesn't exist or is already verified,
                             * we cannot allow it to update funding goal & payment provider
                             */
                            if (!grant || grant.verified)
                                throw new common_1.HttpException('Grant cannot be resubmitted', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                            // Check if grant owner is calling this function
                            this.checkGrantOwnership(grant, user);
                            return [4 /*yield*/, this.paymentProvider];
                        case 2:
                            paymentProvider = _a.sent();
                            if (!data.image) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.awsService.uploadFile(data.image, id)];
                        case 3:
                            image = _a.sent();
                            _a.label = 4;
                        case 4: return [4 /*yield*/, this.prisma.grant.update({
                                data: __assign(__assign({}, data), { image: image, verified: false, paymentAccount: {
                                        connectOrCreate: {
                                            create: {
                                                recipientAddress: data.paymentAccount,
                                                provider: {
                                                    connect: {
                                                        id: paymentProvider.id,
                                                    },
                                                },
                                            },
                                            where: {
                                                recipientAddress_providerId: {
                                                    recipientAddress: data.paymentAccount,
                                                    providerId: paymentProvider.id,
                                                },
                                            },
                                        },
                                    } }),
                                where: {
                                    id: id,
                                },
                            })];
                        case 5: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Only an admin can execute this function
         * The Admin role check should already be done by the guard,
         * but adding another check here in case the guard was bypassed
         * @param id
         * @param user
         * @returns
         */
        GrantsService_1.prototype.reviewGrant = function (id, user) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // First we validate if the user is an admin
                            if (user.role !== client_1.Role.Admin)
                                throw new common_1.HttpException('Unauthorized Access', common_1.HttpStatus.UNAUTHORIZED);
                            return [4 /*yield*/, this.prisma.grant.update({
                                    data: {
                                        verified: true,
                                    },
                                    where: {
                                        id: id,
                                    },
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Retrieve the grants that the user wants to checkout
         * @param grants The grants to checkout
         * @param user User making the purchase
         */
        GrantsService_1.prototype.checkoutGrants = function (body, user) {
            return __awaiter(this, void 0, void 0, function () {
                var grants, feeAllocation, ids, data, ownedGrants, amountLookup, grantWithFunding, matchingRoundId, _i, grantWithFunding_1, grant;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            grants = body.grants, feeAllocation = body.feeAllocation;
                            ids = grants.map(function (grant) { return grant.id; });
                            return [4 /*yield*/, this.prisma.grant.findMany({
                                    where: {
                                        id: {
                                            in: ids,
                                        },
                                    },
                                    include: {
                                        paymentAccount: true,
                                        team: true,
                                    },
                                })];
                        case 1:
                            data = _a.sent();
                            if (data.length < 0)
                                throw new common_1.HttpException('Grants not found', common_1.HttpStatus.NOT_FOUND);
                            ownedGrants = data.some(function (grant) {
                                return grant.team.some(function (team) { return team.email === user.email; });
                            });
                            if (ownedGrants)
                                throw new common_1.HttpException('You cannot checkout your own grants!', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
                            amountLookup = grants.reduce(function (acc, grant) {
                                acc[grant.id] = grant.amount;
                                return acc;
                            }, {});
                            grantWithFunding = data.map(function (grant) {
                                return __assign(__assign({}, grant), { amount: amountLookup[grant.id] || 0 });
                            });
                            return [4 /*yield*/, this.getMatchingRoundIdForGrants(grantWithFunding)];
                        case 2:
                            matchingRoundId = _a.sent();
                            _i = 0, grantWithFunding_1 = grantWithFunding;
                            _a.label = 3;
                        case 3:
                            if (!(_i < grantWithFunding_1.length)) return [3 /*break*/, 6];
                            grant = grantWithFunding_1[_i];
                            return [4 /*yield*/, this.qfService.handleMatchedFunds(matchingRoundId, grant.id)];
                        case 4:
                            _a.sent();
                            _a.label = 5;
                        case 5:
                            _i++;
                            return [3 /*break*/, 3];
                        case 6: return [4 /*yield*/, this.providerService.createPaymentSession(grantWithFunding, feeAllocation || provider_interface_1.FeeAllocationMethod.PASS_TO_ENTITY, // By default, we will pass the fees to grants
                            user, provider_interface_1.CheckoutType.GRANT)];
                        case 7: 
                        // Pass to the payment provider to create a payment session
                        return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        // // 与えられたグラントに対応するマッチングラウンドIDを取得するメソッド
        GrantsService_1.prototype.getMatchingRoundIdForGrants = function (grantWithFunding) {
            return __awaiter(this, void 0, void 0, function () {
                var grantId, matchingRound;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(grantWithFunding.length > 0)) return [3 /*break*/, 2];
                            grantId = grantWithFunding[0].id;
                            return [4 /*yield*/, this.prisma.matchingRound.findFirst({
                                    where: {
                                        grants: {
                                            some: {
                                                id: grantId,
                                            },
                                        },
                                    },
                                })];
                        case 1:
                            matchingRound = _a.sent();
                            if (matchingRound) {
                                return [2 /*return*/, matchingRound.id];
                            }
                            else {
                                throw new Error('Matching round not found for the provided grant');
                            }
                            _a.label = 2;
                        case 2: throw new Error('No grants provided');
                    }
                });
            });
        };
        return GrantsService_1;
    }());
    __setFunctionName(_classThis, "GrantsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GrantsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GrantsService = _classThis;
}();
exports.GrantsService = GrantsService;
