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
exports.QfService = void 0;
var common_1 = require("@nestjs/common");
// import { ProviderModule } from 'src/provider/provider.module';
// import { PrismaModule } from 'src/prisma/prisma.module';
var QfService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var QfService = _classThis = /** @class */ (function () {
        function QfService_1(prismaService, providerService) {
            this.prismaService = prismaService;
            this.providerService = providerService;
            this.logger = new common_1.Logger(QfService.name);
        }
        /**
         * Get the latest active matching round the grant is part of
         * @param grantId
         * @returns
         */
        QfService_1.prototype.getActiveMatchingRoundByGrant = function (grantId) {
            return __awaiter(this, void 0, void 0, function () {
                var matchingRound;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prismaService.matchingRound.findFirst({
                                where: {
                                    grants: {
                                        some: {
                                            id: grantId,
                                        },
                                    },
                                    endDate: {
                                        gte: new Date(),
                                    },
                                },
                            })];
                        case 1:
                            matchingRound = _a.sent();
                            return [2 /*return*/, matchingRound];
                    }
                });
            });
        };
        QfService_1.prototype.estimateMatchedAmount = function (donationAmount, grantId) {
            return __awaiter(this, void 0, void 0, function () {
                var matchingRound, qfInfo, qfValue, squared, newQfValue, difference, newDivisor, newMatchedAmount, matchedAmountDifference;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getActiveMatchingRoundByGrant(grantId)];
                        case 1:
                            matchingRound = _a.sent();
                            if (!matchingRound || donationAmount <= 0)
                                return [2 /*return*/, 0];
                            return [4 /*yield*/, this.calculateQuadraticFundingAmount(matchingRound.id)];
                        case 2:
                            qfInfo = _a.sent();
                            console.log(qfInfo);
                            qfValue = qfInfo.grants[grantId].qfValue;
                            squared = Math.sqrt(qfValue) + Math.sqrt(donationAmount);
                            newQfValue = Math.pow(squared, 2);
                            difference = newQfValue - qfValue;
                            newDivisor = qfInfo.sumOfQfValues + difference;
                            newMatchedAmount = (qfInfo.totalFundsInPool * newQfValue) / newDivisor;
                            matchedAmountDifference = newMatchedAmount - qfInfo.grants[grantId].qfAmount;
                            return [2 /*return*/, matchedAmountDifference];
                    }
                });
            });
        };
        QfService_1.prototype.estimateMatchedAmounts = function (params, user) {
            return __awaiter(this, void 0, void 0, function () {
                var paramsOfMatchingRounds, _i, params_1, grant, round, matchingRounds, _a, _b, matchingRoundId, qfInfo;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            paramsOfMatchingRounds = {};
                            _i = 0, params_1 = params;
                            _c.label = 1;
                        case 1:
                            if (!(_i < params_1.length)) return [3 /*break*/, 4];
                            grant = params_1[_i];
                            return [4 /*yield*/, this.getActiveMatchingRoundByGrant(grant.grantId)];
                        case 2:
                            round = _c.sent();
                            if (paramsOfMatchingRounds[round.id]) {
                                paramsOfMatchingRounds[round.id].push(grant);
                            }
                            else {
                                paramsOfMatchingRounds[round.id] = [grant];
                            }
                            _c.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4:
                            if (Object.keys(paramsOfMatchingRounds).length === 0) {
                                return [2 /*return*/, {}];
                            }
                            matchingRounds = {};
                            _a = 0, _b = Object.keys(paramsOfMatchingRounds);
                            _c.label = 5;
                        case 5:
                            if (!(_a < _b.length)) return [3 /*break*/, 8];
                            matchingRoundId = _b[_a];
                            return [4 /*yield*/, this.calculateQuadraticFundingAmount(matchingRoundId, {
                                    userId: (user === null || user === void 0 ? void 0 : user.id) || 'unknown',
                                    grants: paramsOfMatchingRounds[matchingRoundId],
                                })];
                        case 6:
                            qfInfo = _c.sent();
                            matchingRounds[matchingRoundId] = qfInfo;
                            _c.label = 7;
                        case 7:
                            _a++;
                            return [3 /*break*/, 5];
                        case 8: return [2 /*return*/, matchingRounds];
                    }
                });
            });
        };
        QfService_1.prototype.calculateQuadraticFundingAmount = function (matchingRoundId, grantsForEstimation) {
            return __awaiter(this, void 0, void 0, function () {
                var matchingRound, totalFundsInPool, totalFundsForEstimation, qfInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prismaService.matchingRound.findUnique({
                                where: {
                                    id: matchingRoundId,
                                },
                                include: {
                                    contributions: true, // Contributions to pool
                                    grants: {
                                        include: {
                                            contributions: true, // Contributions to grant
                                            paymentAccount: true,
                                        },
                                    },
                                },
                            })];
                        case 1:
                            matchingRound = _a.sent();
                            totalFundsInPool = matchingRound.contributions.reduce(function (prev, matched) { return prev + matched.amountUsd; }, 0);
                            if (grantsForEstimation) {
                                totalFundsForEstimation = grantsForEstimation.grants.reduce(function (prev, grant) { return prev + grant.amount; }, 0);
                                totalFundsInPool += totalFundsForEstimation;
                            }
                            qfInfo = {
                                grants: {},
                                qfValues: {},
                                recipients: {},
                                sumOfQfValues: 0,
                            };
                            /**
                             * We now get the information about all grants within the matching pool
                             * The contributions for each grant have to be grouped by user ID
                             */
                            matchingRound.grants.forEach(function (grant) {
                                // We first need to group these contributions by user
                                var grantContributionInfo = grant.contributions.reduce(function (prev, contribution) {
                                    if (!prev[contribution.userId])
                                        prev[contribution.userId] = {
                                            amountUsd: 0,
                                            qfValue: 0,
                                        };
                                    prev[contribution.userId].amountUsd += contribution.amountUsd;
                                    prev[contribution.userId].qfValue += Math.sqrt(contribution.amountUsd);
                                    return prev;
                                }, {});
                                if (grantsForEstimation) {
                                    var grantForEstimation = grantsForEstimation.grants.find(function (g) { return g.grantId === grant.id; });
                                    if (grantForEstimation) {
                                        if (!grantContributionInfo[grantsForEstimation.userId])
                                            grantContributionInfo[grantsForEstimation.userId] = {
                                                amountUsd: 0,
                                                qfValue: 0,
                                            };
                                        grantContributionInfo[grantsForEstimation.userId].amountUsd +=
                                            grantForEstimation.amount;
                                        grantContributionInfo[grantsForEstimation.userId].qfValue +=
                                            Math.sqrt(grantForEstimation.amount);
                                    }
                                }
                                // Then now we can store the unique contributions under the grant
                                qfInfo.grants[grant.id] = grantContributionInfo;
                                qfInfo.recipients[grant.id] = grant.paymentAccount.recipientAddress;
                            });
                            /**
                             * Here is where the QF calculation is done
                             * 1. We need to get the sum of square roots of each donation amount
                             * 2. Then square it
                             *
                             * Important note: Contributions should be grouped by user
                             */
                            Object.keys(qfInfo.grants).forEach(function (grantId) {
                                var grant = qfInfo.grants[grantId];
                                var qfValue = Object.keys(grant).reduce(function (prev, userId) {
                                    return prev + grant[userId].qfValue;
                                }, 0);
                                var qfValueSquared = Math.pow(qfValue, 2);
                                qfInfo.qfValues[grantId] = qfValueSquared;
                                qfInfo.sumOfQfValues += qfValueSquared;
                            });
                            /**
                             * Now that we have all of the QF values,
                             * we can now calculate the amount of funds going to each grant
                             */
                            return [2 /*return*/, Object.keys(qfInfo.qfValues).reduce(function (prev, grantId) {
                                    var grants = prev.grants;
                                    var qfValue = qfInfo.qfValues[grantId];
                                    var qfPercentage = qfInfo.sumOfQfValues
                                        ? qfValue / qfInfo.sumOfQfValues
                                        : 0;
                                    var qfAmount = qfPercentage * totalFundsInPool;
                                    grants[grantId] = {
                                        qfValue: qfValue,
                                        qfAmount: qfAmount,
                                        recipientAddress: qfInfo.recipients[grantId],
                                    };
                                    return __assign(__assign({}, prev), { grants: grants, sumOfQfValues: qfInfo.sumOfQfValues, totalFundsInPool: totalFundsInPool });
                                }, {
                                    grants: {},
                                    sumOfQfValues: 0,
                                    totalFundsInPool: 0,
                                })];
                    }
                });
            });
        };
        // 本来Cronで自動的にマッチングした金額を振り込むが、今回は止める
        // @Cron(CronExpression.EVERY_HOUR)
        QfService_1.prototype.distributeMatchedFunds = function () {
            return __awaiter(this, void 0, void 0, function () {
                var endedPools, _loop_1, this_1, i;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prismaService.matchingRound.findMany({
                                where: {
                                    endDate: {
                                        lte: new Date(),
                                    },
                                    paid: false,
                                },
                            })];
                        case 1:
                            endedPools = _a.sent();
                            this.logger.log("".concat(endedPools.length, " pools found to process"));
                            _loop_1 = function (i) {
                                var pool, qfInfo, payoutPromise, promises, payout;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            pool = endedPools[i];
                                            return [4 /*yield*/, this_1.calculateQuadraticFundingAmount(pool.id)];
                                        case 1:
                                            qfInfo = _b.sent();
                                            // Within this pool, we now need to transfer the match amount to each grant & store the info
                                            // First, we set the pool as paid. This is an extra security step
                                            return [4 /*yield*/, this_1.prismaService.matchingRound.update({
                                                    where: {
                                                        id: pool.id,
                                                    },
                                                    data: {
                                                        paid: true,
                                                    },
                                                })];
                                        case 2:
                                            // Within this pool, we now need to transfer the match amount to each grant & store the info
                                            // First, we set the pool as paid. This is an extra security step
                                            _b.sent();
                                            payoutPromise = Object.keys(qfInfo.grants).map(function (grantId) { return __awaiter(_this, void 0, void 0, function () {
                                                var info;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            info = qfInfo.grants[grantId];
                                                            this.logger.log("\u2708\uFE0F Sending ".concat(info.qfAmount, " to ").concat(info.recipientAddress, "..."));
                                                            // For each grant, we will get the payment account and initiate a fund transfer
                                                            return [4 /*yield*/, this.providerService.initiateTransfer(info.recipientAddress, info.qfAmount)];
                                                        case 1:
                                                            // For each grant, we will get the payment account and initiate a fund transfer
                                                            _a.sent();
                                                            this.logger.log("\u2705 Funds sent to ".concat(info.recipientAddress));
                                                            // Once it is done, we return the info
                                                            return [2 /*return*/, {
                                                                    amount: info.qfAmount,
                                                                    denomination: 'USD',
                                                                    amountUsd: info.qfAmount,
                                                                    matchingRoundId: pool.id,
                                                                    grantId: grantId,
                                                                    payoutAt: new Date(),
                                                                }];
                                                    }
                                                });
                                            }); });
                                            return [4 /*yield*/, Promise.allSettled(payoutPromise)];
                                        case 3:
                                            promises = _b.sent();
                                            payout = promises
                                                .filter(function (promise) { return promise.status === 'fulfilled'; })
                                                .map(function (promise) { return promise.value; });
                                            if (!(payout.length > 0)) return [3 /*break*/, 5];
                                            // Save matched fund info
                                            return [4 /*yield*/, this_1.prismaService.matchedFund.createMany({
                                                    data: payout,
                                                })];
                                        case 4:
                                            // Save matched fund info
                                            _b.sent();
                                            this_1.logger.log("\uD83E\uDD11 Success! Paid out matching funds for pool ID: ".concat(pool.id));
                                            return [3 /*break*/, 6];
                                        case 5:
                                            this_1.logger.error("\u274C Failed! Unable to payout matching funds for pool ID: ".concat(pool.id));
                                            promises
                                                .filter(function (promise) { return promise.status === 'rejected'; })
                                                .forEach(function (failed) {
                                                return _this.logger.error(failed.reason);
                                            });
                                            _b.label = 6;
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            };
                            this_1 = this;
                            i = 0;
                            _a.label = 2;
                        case 2:
                            if (!(i < endedPools.length)) return [3 /*break*/, 5];
                            return [5 /*yield**/, _loop_1(i)];
                        case 3:
                            _a.sent();
                            _a.label = 4;
                        case 4:
                            i++;
                            return [3 /*break*/, 2];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        QfService_1.prototype.handleMatchedFunds = function (matchingRoundId, grantId) {
            return __awaiter(this, void 0, void 0, function () {
                var qfResult, grantInfo, matchedAmount, existingMatchedFund;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.calculateQuadraticFundingAmount(matchingRoundId)];
                        case 1:
                            qfResult = _a.sent();
                            grantInfo = qfResult.grants[grantId];
                            matchedAmount = grantInfo ? grantInfo.qfAmount : 0;
                            return [4 /*yield*/, this.prismaService.matchedFund.findUnique({
                                    where: {
                                        matchingRoundId_grantId: {
                                            matchingRoundId: matchingRoundId,
                                            grantId: grantId,
                                        },
                                    },
                                })];
                        case 2:
                            existingMatchedFund = _a.sent();
                            if (!existingMatchedFund) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.prismaService.matchedFund.update({
                                    where: {
                                        id: existingMatchedFund.id,
                                    },
                                    data: {
                                        amount: matchedAmount,
                                        amountUsd: matchedAmount,
                                    },
                                })];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 6];
                        case 4: 
                        // ない場合は新しくデータを作成する
                        return [4 /*yield*/, this.prismaService.matchedFund.create({
                                data: {
                                    matchingRoundId: matchingRoundId,
                                    grantId: grantId,
                                    amount: matchedAmount,
                                    denomination: 'JPY',
                                    amountUsd: matchedAmount,
                                    payoutAt: new Date(),
                                },
                            })];
                        case 5:
                            // ない場合は新しくデータを作成する
                            _a.sent();
                            _a.label = 6;
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        return QfService_1;
    }());
    __setFunctionName(_classThis, "QfService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        QfService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return QfService = _classThis;
}();
exports.QfService = QfService;
