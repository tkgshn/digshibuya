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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
var common_1 = require("@nestjs/common");
var UsersService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var UsersService = _classThis = /** @class */ (function () {
        function UsersService_1(prisma) {
            this.prisma = prisma;
            this.logger = new common_1.Logger(UsersService.name);
        }
        UsersService_1.prototype.calculateUserDonationMetrics = function (user) {
            /**
             * Now we need to calculate a few things
             * 1. Total donated amount - Amount they have contributed to all grants
             * 2. Total raised amount - Amount they have raised from all their owned grants
             * 3. Total contributed amount - Amount they have contributed to all pools
             * 4. Total pooled amount - Amount they have raised from all their owned pools
             *
             * Since we need to display the donations and grants in the frontend,
             * we might as well calculate them manually here
             *
             * There is also another thing we need to calculate, which is the matched amount.
             * This has to be computed by:
             * 1. Sum the total matched by grant
             * 2. Sum the total contribution of user by grant
             * 3. Divide the values to get an approximation of how much the user's
             *    contribution was matched to
             */
            var donations = user.contributions
                .filter(function (contribution) { return contribution.grant; })
                .reduce(function (prev, contribution) {
                var grantIndex = prev.findIndex(function (cont) { return cont.grantId === contribution.grantId; });
                if (grantIndex === -1) {
                    return __spreadArray(__spreadArray([], prev, true), [
                        __assign(__assign({}, contribution), { totalMatched: contribution.grant.matchedFund.reduce(function (prev, fund) { return prev + fund.amountUsd; }, 0), totalDonated: contribution.grant.contributions.reduce(function (prev, fund) { return prev + fund.amountUsd; }, 0) }),
                    ], false);
                }
                else {
                    var temp = prev[grantIndex];
                    prev[grantIndex] = __assign(__assign({}, temp), { amountUsd: temp.amountUsd + contribution.amountUsd, amount: temp.amount + contribution.amount });
                    return __spreadArray([], prev, true);
                }
            }, []);
            var grants = user.grants.map(function (grant) {
                return __assign(__assign({}, grant), { amountRaised: grant.contributions.reduce(function (acc, contribution) { return acc + contribution.amountUsd; }, 0) });
            });
            /**
             * Now that we have all of these items, we can calculate the sum
             */
            var totalDonated = donations.reduce(function (prev, donation) { return prev + donation.amountUsd; }, 0);
            var totalRaised = grants.reduce(function (prev, grant) { return prev + grant.amountRaised; }, 0);
            var contributions, pools, totalContributed, totalPooled = undefined;
            if (user.ecosystemBuilder) {
                this.logger.log('User is an ecosystem builder 🌲');
                contributions = user.contributions
                    .filter(function (contribution) { return contribution.matchingRound; })
                    .reduce(function (prev, contribution) {
                    var matchingRoundIndex = prev.findIndex(function (cont) { return cont.matchingRoundId === contribution.matchingRoundId; });
                    if (matchingRoundIndex === -1) {
                        return __spreadArray(__spreadArray([], prev, true), [contribution], false);
                    }
                    else {
                        var temp = prev[matchingRoundIndex];
                        prev[matchingRoundIndex] = __assign(__assign({}, temp), { amountUsd: temp.amountUsd + contribution.amountUsd, amount: temp.amount + contribution.amount });
                        return __spreadArray([], prev, true);
                    }
                }, []);
                pools = user.ecosystemBuilder.matchingRounds.map(function (pool) {
                    return __assign(__assign({}, pool), { amountRaised: pool.contributions.reduce(function (acc, contribution) { return acc + contribution.amountUsd; }, 0) });
                });
                totalContributed = contributions.reduce(function (prev, contribution) { return prev + contribution.amountUsd; }, 0);
                totalPooled = pools.reduce(function (prev, pool) { return prev + pool.amountRaised; }, 0);
            }
            return __assign(__assign({}, user), { grants: grants, donations: donations, contributions: contributions, pools: pools, totalDonated: totalDonated, totalRaised: totalRaised, totalContributed: totalContributed, totalPooled: totalPooled });
        };
        UsersService_1.prototype.retrieveUserProfile = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.user.findUnique({
                                where: {
                                    id: id,
                                },
                                include: {
                                    // Items I've donated to
                                    contributions: {
                                        include: {
                                            // Grants I've dontated to, we need to know how much we got matched
                                            grant: {
                                                include: {
                                                    matchedFund: true,
                                                    contributions: true, // This is to get all contributions by EVERYONE including myself
                                                },
                                            },
                                            // Pools I've donated to
                                            matchingRound: true,
                                        },
                                    },
                                    // Grants I've created
                                    grants: {
                                        include: {
                                            contributions: true, // How much they raised
                                        },
                                    },
                                    ecosystemBuilder: {
                                        include: {
                                            // Pools I've created
                                            matchingRounds: {
                                                include: {
                                                    contributions: true, // How much they raised
                                                },
                                            },
                                        },
                                    },
                                },
                            })];
                        case 1:
                            user = _a.sent();
                            if (!user)
                                throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
                            return [2 /*return*/, this.calculateUserDonationMetrics(user)];
                    }
                });
            });
        };
        UsersService_1.prototype.updateUserProfile = function (userId, data) {
            return __awaiter(this, void 0, void 0, function () {
                var user;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.user.update({
                                data: __assign({}, data),
                                where: {
                                    id: userId,
                                },
                                include: {
                                    contributions: {
                                        include: {
                                            grant: {
                                                include: {
                                                    matchedFund: true,
                                                    contributions: true,
                                                },
                                            },
                                            matchingRound: true,
                                        },
                                    },
                                    grants: {
                                        include: {
                                            contributions: true,
                                        },
                                    },
                                    ecosystemBuilder: {
                                        include: {
                                            matchingRounds: {
                                                include: {
                                                    contributions: true,
                                                },
                                            },
                                        },
                                    },
                                },
                            })];
                        case 1:
                            user = _a.sent();
                            return [2 /*return*/, this.calculateUserDonationMetrics(user)];
                    }
                });
            });
        };
        return UsersService_1;
    }());
    __setFunctionName(_classThis, "UsersService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        UsersService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UsersService = _classThis;
}();
exports.UsersService = UsersService;
