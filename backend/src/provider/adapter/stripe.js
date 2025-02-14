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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
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
exports.StripeProvider = void 0;
var stripe_1 = require("stripe");
var cuid = require("cuid");
var common_1 = require("@nestjs/common");
var provider_interface_1 = require("../provider.interface");
var StripeProvider = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var StripeProvider = _classThis = /** @class */ (function () {
        function StripeProvider_1(constructorProps) {
            this.logger = new common_1.Logger(StripeProvider.name);
            var prisma = constructorProps.prisma, secret = constructorProps.secret, country = constructorProps.country;
            this.prisma = prisma;
            this.country = country;
            this.stripe = new stripe_1.default(secret, {
                apiVersion: '2022-11-15',
            });
        }
        // Technically a payment provider should never be updated during runtime
        // so we can save and cache information about the payment provider in the class itself
        /**
         * Rounds a number to two decimal places
         * @param num Number to round
         * @returns Number rounded to 2 decimal places
         */
        StripeProvider_1.prototype.roundNumber = function (num) {
            // Using epsilon for precision errors
            return Math.round((num + Number.EPSILON) * 100) / 100;
        };
        /**
         * TODO: Perhaps find a way to dynamically change Stripe fees based on country
         * Right now it is hardcoded to the US fees of 2.9% + 30c
         * @param amount
         * @returns The Stripe fees needed to be added in to the total payment amount
         */
        StripeProvider_1.prototype.getCustomerFee = function (amount) {
            var fixedFee = 0.3;
            var percentFee = 0.029;
            return this.roundNumber((amount + fixedFee) / (1 - percentFee) - amount);
        };
        /**
         * TODO: Perhaps find a way to dynamically change Stripe fees based on country
         * Right now it is hardcoded to the US fees of 2.9% + 30c
         * @param amount
         * @param feeAllocation
         * @param totalAmount
         * @returns A lookup table for the amount each grant should receive.
         * Minus Stripe fees if `feeAllocation` is `PASS_TO_ENTITY`
         */
        StripeProvider_1.prototype.getTransferAmount = function (items, feeAllocation, totalAmount) {
            var _this = this;
            var fixedFee = 0.3;
            var percentFee = 0.029;
            var totalFee = totalAmount * percentFee + fixedFee;
            // If the fee allocation method is to pass to grant, we calculate the amount after fees
            return items.reduce(function (acc, item) {
                acc[item.id] =
                    feeAllocation === provider_interface_1.FeeAllocationMethod.PASS_TO_ENTITY
                        ? _this.roundNumber(item.amount - (item.amount / totalAmount) * totalFee)
                        : item.amount;
                return acc;
            }, {});
        };
        /**
         * We can assume that in v1, we can only have 1 payment provider
         * @returns Default payment provider
         */
        StripeProvider_1.prototype.getDetails = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.paymentProvider.findFirst()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Initiate a payment process with Stripe for grants
         * @param grantWithFunding
         * @param user
         * @returns
         */
        StripeProvider_1.prototype.createGrantPayment = function (grantWithFunding, feeAllocation, user) {
            return __awaiter(this, void 0, void 0, function () {
                var provider, transferGroup, totalDonation, grantAmountLookup, grant, e_1_1, session;
                var _a, grantWithFunding_1, grantWithFunding_1_1;
                var _b, e_1, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0: return [4 /*yield*/, this.getDetails()];
                        case 1:
                            provider = _e.sent();
                            transferGroup = cuid();
                            totalDonation = grantWithFunding.reduce(function (acc, grant) { return acc + grant.amount; }, 0);
                            grantAmountLookup = this.getTransferAmount(grantWithFunding, feeAllocation, totalDonation);
                            _e.label = 2;
                        case 2:
                            _e.trys.push([2, 8, 9, 14]);
                            _a = true, grantWithFunding_1 = __asyncValues(grantWithFunding);
                            _e.label = 3;
                        case 3: return [4 /*yield*/, grantWithFunding_1.next()];
                        case 4:
                            if (!(grantWithFunding_1_1 = _e.sent(), _b = grantWithFunding_1_1.done, !_b)) return [3 /*break*/, 7];
                            _d = grantWithFunding_1_1.value;
                            _a = false;
                            grant = _d;
                            if (!(grant.amount > 0)) return [3 /*break*/, 6];
                            // Contribution テーブルにデータを保存
                            return [4 /*yield*/, this.prisma.contribution.create({
                                    data: {
                                        userId: user.id,
                                        amount: grantAmountLookup[grant.id],
                                        denomination: provider.denominations[0],
                                        amountUsd: grantAmountLookup[grant.id], // USD換算が必要な場合は変換ロジックを追加
                                        grantId: grant.id,
                                        flagged: false, // デフォルトは false, 特定の条件で true に設定
                                        paymentMethodId: 'clg3bs740000kx6s51e9fe8lu', // PaymentMethodId は Checkout の ID として仮置き
                                        createdAt: new Date(),
                                        updatedAt: new Date(),
                                    },
                                })];
                        case 5:
                            // Contribution テーブルにデータを保存
                            _e.sent();
                            _e.label = 6;
                        case 6:
                            _a = true;
                            return [3 /*break*/, 3];
                        case 7: return [3 /*break*/, 14];
                        case 8:
                            e_1_1 = _e.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 14];
                        case 9:
                            _e.trys.push([9, , 12, 13]);
                            if (!(!_a && !_b && (_c = grantWithFunding_1.return))) return [3 /*break*/, 11];
                            return [4 /*yield*/, _c.call(grantWithFunding_1)];
                        case 10:
                            _e.sent();
                            _e.label = 11;
                        case 11: return [3 /*break*/, 13];
                        case 12:
                            if (e_1) throw e_1.error;
                            return [7 /*endfinally*/];
                        case 13: return [7 /*endfinally*/];
                        case 14: return [4 /*yield*/, this.stripe.checkout.sessions.create({
                                mode: 'payment',
                                payment_method_types: ['card'],
                                line_items: __spreadArray(__spreadArray([], grantWithFunding.map(function (grant) {
                                    return {
                                        price_data: {
                                            currency: provider.denominations[0],
                                            product_data: {
                                                name: grant.name,
                                                description: grant.description.length > 80
                                                    ? grant.description.slice(0, 80) + '...'
                                                    : grant.description,
                                            },
                                            unit_amount: grant.amount, // JPYを扱うのでMath.round()の削除
                                        },
                                        quantity: 1,
                                    };
                                }), true), [
                                    feeAllocation === provider_interface_1.FeeAllocationMethod.PASS_TO_CUSTOMER
                                        ? {
                                            price_data: {
                                                currency: provider.denominations[0],
                                                product_data: {
                                                    name: 'Stripe Fees',
                                                    description: 'Processing fees taken by Stripe',
                                                },
                                                unit_amount: this.getCustomerFee(totalDonation),
                                            },
                                            quantity: 1,
                                        }
                                        : undefined,
                                ], false),
                                payment_intent_data: {
                                    transfer_group: transferGroup,
                                    metadata: {
                                        userId: user.id,
                                        denomination: provider.denominations[0],
                                        type: 'grant',
                                    },
                                },
                                success_url: "".concat(process.env.FRONTEND_URL, "/grants/checkout/success?session_id={CHECKOUT_SESSION_ID}"),
                                cancel_url: "".concat(process.env.FRONTEND_URL, "/grants/checkout"),
                            })];
                        case 15:
                            session = _e.sent();
                            return [2 /*return*/, session];
                    }
                });
            });
        };
        /**
         * Initiate a payment process with Stripe for pools
         * @param poolWithFunding
         * @param user
         * @returns
         */
        StripeProvider_1.prototype.createPoolPayment = function (poolWithFunding, feeAllocation, user) {
            return __awaiter(this, void 0, void 0, function () {
                var provider, transferGroup, totalDonation, poolAmountLookup, pool, e_2_1, session;
                var _a, poolWithFunding_1, poolWithFunding_1_1;
                var _b, e_2, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0: return [4 /*yield*/, this.getDetails()];
                        case 1:
                            provider = _e.sent();
                            transferGroup = cuid();
                            totalDonation = poolWithFunding.reduce(function (acc, pool) { return acc + pool.amount; }, 0);
                            poolAmountLookup = this.getTransferAmount(poolWithFunding, feeAllocation, totalDonation);
                            _e.label = 2;
                        case 2:
                            _e.trys.push([2, 8, 9, 14]);
                            _a = true, poolWithFunding_1 = __asyncValues(poolWithFunding);
                            _e.label = 3;
                        case 3: return [4 /*yield*/, poolWithFunding_1.next()];
                        case 4:
                            if (!(poolWithFunding_1_1 = _e.sent(), _b = poolWithFunding_1_1.done, !_b)) return [3 /*break*/, 7];
                            _d = poolWithFunding_1_1.value;
                            _a = false;
                            pool = _d;
                            if (!(pool.amount > 0)) return [3 /*break*/, 6];
                            return [4 /*yield*/, this.prisma.checkout.create({
                                    data: {
                                        user: {
                                            connect: {
                                                id: user.id,
                                            },
                                        },
                                        amount: poolAmountLookup[pool.id],
                                        denomination: provider.denominations[0],
                                        matchingRound: {
                                            connect: {
                                                id: pool.id,
                                            },
                                        },
                                        groupId: transferGroup,
                                    },
                                })];
                        case 5:
                            _e.sent();
                            _e.label = 6;
                        case 6:
                            _a = true;
                            return [3 /*break*/, 3];
                        case 7: return [3 /*break*/, 14];
                        case 8:
                            e_2_1 = _e.sent();
                            e_2 = { error: e_2_1 };
                            return [3 /*break*/, 14];
                        case 9:
                            _e.trys.push([9, , 12, 13]);
                            if (!(!_a && !_b && (_c = poolWithFunding_1.return))) return [3 /*break*/, 11];
                            return [4 /*yield*/, _c.call(poolWithFunding_1)];
                        case 10:
                            _e.sent();
                            _e.label = 11;
                        case 11: return [3 /*break*/, 13];
                        case 12:
                            if (e_2) throw e_2.error;
                            return [7 /*endfinally*/];
                        case 13: return [7 /*endfinally*/];
                        case 14: return [4 /*yield*/, this.stripe.checkout.sessions.create({
                                mode: 'payment',
                                payment_method_types: ['card'],
                                line_items: __spreadArray(__spreadArray([], poolWithFunding.map(function (pool) {
                                    var _a;
                                    return {
                                        price_data: {
                                            currency: provider.denominations[0],
                                            product_data: {
                                                name: pool.name,
                                                description: ((_a = pool.description) === null || _a === void 0 ? void 0 : _a.length) > 80
                                                    ? pool.description.slice(0, 80) + '...'
                                                    : pool.description || undefined,
                                            },
                                            unit_amount: pool.amount, // JPYを扱うのでMath.round()の削除
                                        },
                                        quantity: 1,
                                    };
                                }), true), [
                                    feeAllocation === provider_interface_1.FeeAllocationMethod.PASS_TO_CUSTOMER
                                        ? {
                                            price_data: {
                                                currency: provider.denominations[0],
                                                product_data: {
                                                    name: 'Stripe Fees',
                                                    description: 'Processing fees taken by Stripe',
                                                },
                                                unit_amount: this.getCustomerFee(totalDonation),
                                            },
                                            quantity: 1,
                                        }
                                        : undefined,
                                ], false),
                                payment_intent_data: {
                                    transfer_group: transferGroup,
                                    metadata: {
                                        userId: user.id,
                                        denomination: provider.denominations[0],
                                        type: 'pool',
                                    },
                                },
                                success_url: "".concat(process.env.FRONTEND_URL, "/pools/checkout/success?session_id={CHECKOUT_SESSION_ID}"),
                                cancel_url: "".concat(process.env.FRONTEND_URL, "/pools/checkout"),
                            })];
                        case 15:
                            session = _e.sent();
                            return [2 /*return*/, session];
                    }
                });
            });
        };
        StripeProvider_1.prototype.initiateTransfer = function (to, amount) {
            return __awaiter(this, void 0, void 0, function () {
                var provider, transfer;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getDetails()];
                        case 1:
                            provider = _a.sent();
                            return [4 /*yield*/, this.stripe.transfers.create({
                                    amount: amount, // 日本円の場合はそのまま渡す
                                    currency: provider.denominations[0],
                                    destination: to,
                                })];
                        case 2:
                            transfer = _a.sent();
                            return [2 /*return*/, transfer];
                    }
                });
            });
        };
        /**
         * We need to retrieve all checkout items tied to the specific transfer_group
         * Also need to retrieve & store the payment method to the table
         * Then we create a transfer for each item, and save the info into contributions
         * @param data
         */
        StripeProvider_1.prototype.handleWebhook = function (body) {
            return __awaiter(this, void 0, void 0, function () {
                var paymentProvider, data, stripePaymentMethod, userPaymentMethod, transferGroup, checkoutsToProcess, _a, checkoutsToProcess_1, checkoutsToProcess_1_1, checkout, e_3_1;
                var _b, e_3, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0: return [4 /*yield*/, this.getDetails()];
                        case 1:
                            paymentProvider = _e.sent();
                            data = body.data.object;
                            if (body.type != 'payment_intent.succeeded')
                                return [2 /*return*/];
                            this.logger.log('Received webhook for successful payment intent!');
                            return [4 /*yield*/, this.stripe.paymentMethods.retrieve(data.payment_method)];
                        case 2:
                            stripePaymentMethod = _e.sent();
                            this.logger.log('Payment Method retrieved from Stripe!');
                            return [4 /*yield*/, this.prisma.paymentMethod.upsert({
                                    create: {
                                        uniqueId: stripePaymentMethod.card.fingerprint,
                                        displayInfo: stripePaymentMethod.card.last4,
                                        denomination: data.metadata.denomination,
                                        provider: {
                                            connect: {
                                                id: paymentProvider.id,
                                            },
                                        },
                                        metadata: __assign({}, stripePaymentMethod.card),
                                        user: {
                                            connect: {
                                                id: data.metadata.userId,
                                            },
                                        },
                                    },
                                    update: {},
                                    where: {
                                        uniqueId: stripePaymentMethod.card.fingerprint,
                                    },
                                })];
                        case 3:
                            userPaymentMethod = _e.sent();
                            return [4 /*yield*/, this.prisma.user.update({
                                    data: {
                                        paymentMethods: {
                                            connect: {
                                                id: userPaymentMethod.id,
                                            },
                                        },
                                    },
                                    where: {
                                        id: data.metadata.userId,
                                    },
                                })];
                        case 4:
                            _e.sent();
                            this.logger.log('User payment method saved!');
                            this.logger.log('Retrieving checkout items...');
                            transferGroup = data.transfer_group;
                            return [4 /*yield*/, this.prisma.checkout.findMany({
                                    where: {
                                        groupId: transferGroup,
                                    },
                                    include: {
                                        grant: {
                                            include: {
                                                paymentAccount: true,
                                            },
                                        },
                                        matchingRound: true,
                                    },
                                })];
                        case 5:
                            checkoutsToProcess = _e.sent();
                            this.logger.log("".concat(checkoutsToProcess.length, " items to process"));
                            if (!(data.metadata.type === 'grant')) return [3 /*break*/, 20];
                            this.logger.log('Creating transfers...');
                            _e.label = 6;
                        case 6:
                            _e.trys.push([6, 12, 13, 18]);
                            _a = true, checkoutsToProcess_1 = __asyncValues(checkoutsToProcess);
                            _e.label = 7;
                        case 7: return [4 /*yield*/, checkoutsToProcess_1.next()];
                        case 8:
                            if (!(checkoutsToProcess_1_1 = _e.sent(), _b = checkoutsToProcess_1_1.done, !_b)) return [3 /*break*/, 11];
                            _d = checkoutsToProcess_1_1.value;
                            _a = false;
                            checkout = _d;
                            return [4 /*yield*/, this.stripe.transfers.create({
                                    amount: checkout.amount, // 日本円の場合はそのまま渡す
                                    currency: checkout.denomination,
                                    destination: checkout.grant.paymentAccount.recipientAddress,
                                    transfer_group: transferGroup,
                                })];
                        case 9:
                            _e.sent();
                            _e.label = 10;
                        case 10:
                            _a = true;
                            return [3 /*break*/, 7];
                        case 11: return [3 /*break*/, 18];
                        case 12:
                            e_3_1 = _e.sent();
                            e_3 = { error: e_3_1 };
                            return [3 /*break*/, 18];
                        case 13:
                            _e.trys.push([13, , 16, 17]);
                            if (!(!_a && !_b && (_c = checkoutsToProcess_1.return))) return [3 /*break*/, 15];
                            return [4 /*yield*/, _c.call(checkoutsToProcess_1)];
                        case 14:
                            _e.sent();
                            _e.label = 15;
                        case 15: return [3 /*break*/, 17];
                        case 16:
                            if (e_3) throw e_3.error;
                            return [7 /*endfinally*/];
                        case 17: return [7 /*endfinally*/];
                        case 18:
                            this.logger.log('Transfers made!');
                            /**
                             * Store contributions
                             */
                            return [4 /*yield*/, this.prisma.contribution.createMany({
                                    data: checkoutsToProcess.map(function (checkout) {
                                        return {
                                            userId: data.metadata.userId,
                                            amount: checkout.amount,
                                            denomination: checkout.denomination,
                                            amountUsd: checkout.amount,
                                            paymentMethodId: userPaymentMethod.id,
                                            grantId: checkout.grantId,
                                            flagged: false,
                                        };
                                    }),
                                })];
                        case 19:
                            /**
                             * Store contributions
                             */
                            _e.sent();
                            return [3 /*break*/, 22];
                        case 20: 
                        /**
                         * Store contributions
                         */
                        return [4 /*yield*/, this.prisma.contribution.createMany({
                                data: checkoutsToProcess.map(function (checkout) {
                                    return {
                                        userId: data.metadata.userId,
                                        amount: checkout.amount,
                                        denomination: checkout.denomination,
                                        amountUsd: checkout.amount,
                                        paymentMethodId: userPaymentMethod.id,
                                        matchingRoundId: checkout.matchingRoundId,
                                        flagged: false,
                                    };
                                }),
                            })];
                        case 21:
                            /**
                             * Store contributions
                             */
                            _e.sent();
                            _e.label = 22;
                        case 22:
                            this.logger.log('Contributions saved to database!');
                            this.logger.log('Webhook run complete ✅');
                            return [2 /*return*/];
                    }
                });
            });
        };
        StripeProvider_1.prototype.retrieveCheckoutInfo = function (sessionId) {
            return __awaiter(this, void 0, void 0, function () {
                var data, checkoutInfo, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.stripe.checkout.sessions.listLineItems(sessionId)];
                        case 1:
                            data = _a.sent();
                            checkoutInfo = data.data.reduce(function (acc, item) {
                                if (item.description !== 'Stripe Fees') {
                                    acc.donated += item.amount_total;
                                    acc.numberOfItems += 1;
                                }
                                return acc;
                            }, { donated: 0, matched: 0, numberOfItems: 0 });
                            return [2 /*return*/, checkoutInfo];
                        case 2:
                            err_1 = _a.sent();
                            this.logger.error(err_1);
                            throw new common_1.HttpException('Unable to retrieve checkout session', common_1.HttpStatus.BAD_REQUEST);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return StripeProvider_1;
    }());
    __setFunctionName(_classThis, "StripeProvider");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        StripeProvider = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return StripeProvider = _classThis;
}();
exports.StripeProvider = StripeProvider;
