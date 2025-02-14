"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProfileContributionInfo = exports.UserProfileDonationInfo = exports.Contribution = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var grants_interface_1 = require("../grants/grants.interface");
var pool_interface_1 = require("../pool/pool.interface");
/**
 * Information about a specific contribution
 * This is used for API documentation and is exactly the same as the schema's contributions
 *
 * @note Grant information is not included in this! It is only the contribution
 */
var Contribution = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _denomination_decorators;
    var _denomination_initializers = [];
    var _denomination_extraInitializers = [];
    var _amountUsd_decorators;
    var _amountUsd_initializers = [];
    var _amountUsd_extraInitializers = [];
    var _paymentMethodId_decorators;
    var _paymentMethodId_initializers = [];
    var _paymentMethodId_extraInitializers = [];
    var _grantId_decorators;
    var _grantId_initializers = [];
    var _grantId_extraInitializers = [];
    var _matchingRoundId_decorators;
    var _matchingRoundId_initializers = [];
    var _matchingRoundId_extraInitializers = [];
    var _flagged_decorators;
    var _flagged_initializers = [];
    var _flagged_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function Contribution(partial) {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.userId = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _userId_initializers, void 0));
                this.amount = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                this.denomination = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _denomination_initializers, void 0));
                this.amountUsd = (__runInitializers(this, _denomination_extraInitializers), __runInitializers(this, _amountUsd_initializers, void 0));
                this.paymentMethodId = (__runInitializers(this, _amountUsd_extraInitializers), __runInitializers(this, _paymentMethodId_initializers, void 0));
                this.grantId = (__runInitializers(this, _paymentMethodId_extraInitializers), __runInitializers(this, _grantId_initializers, void 0));
                this.matchingRoundId = (__runInitializers(this, _grantId_extraInitializers), __runInitializers(this, _matchingRoundId_initializers, void 0));
                this.flagged = (__runInitializers(this, _matchingRoundId_extraInitializers), __runInitializers(this, _flagged_initializers, void 0));
                this.createdAt = (__runInitializers(this, _flagged_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
                __runInitializers(this, _updatedAt_extraInitializers);
                Object.assign(this, partial);
            }
            return Contribution;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _userId_decorators = [(0, class_transformer_1.Exclude)()];
            _amount_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _denomination_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _amountUsd_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _paymentMethodId_decorators = [(0, class_transformer_1.Exclude)()];
            _grantId_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _matchingRoundId_decorators = [(0, class_transformer_1.Exclude)()];
            _flagged_decorators = [(0, class_transformer_1.Exclude)()];
            _createdAt_decorators = [(0, class_transformer_1.Exclude)()];
            _updatedAt_decorators = [(0, class_transformer_1.Exclude)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _denomination_decorators, { kind: "field", name: "denomination", static: false, private: false, access: { has: function (obj) { return "denomination" in obj; }, get: function (obj) { return obj.denomination; }, set: function (obj, value) { obj.denomination = value; } }, metadata: _metadata }, _denomination_initializers, _denomination_extraInitializers);
            __esDecorate(null, null, _amountUsd_decorators, { kind: "field", name: "amountUsd", static: false, private: false, access: { has: function (obj) { return "amountUsd" in obj; }, get: function (obj) { return obj.amountUsd; }, set: function (obj, value) { obj.amountUsd = value; } }, metadata: _metadata }, _amountUsd_initializers, _amountUsd_extraInitializers);
            __esDecorate(null, null, _paymentMethodId_decorators, { kind: "field", name: "paymentMethodId", static: false, private: false, access: { has: function (obj) { return "paymentMethodId" in obj; }, get: function (obj) { return obj.paymentMethodId; }, set: function (obj, value) { obj.paymentMethodId = value; } }, metadata: _metadata }, _paymentMethodId_initializers, _paymentMethodId_extraInitializers);
            __esDecorate(null, null, _grantId_decorators, { kind: "field", name: "grantId", static: false, private: false, access: { has: function (obj) { return "grantId" in obj; }, get: function (obj) { return obj.grantId; }, set: function (obj, value) { obj.grantId = value; } }, metadata: _metadata }, _grantId_initializers, _grantId_extraInitializers);
            __esDecorate(null, null, _matchingRoundId_decorators, { kind: "field", name: "matchingRoundId", static: false, private: false, access: { has: function (obj) { return "matchingRoundId" in obj; }, get: function (obj) { return obj.matchingRoundId; }, set: function (obj, value) { obj.matchingRoundId = value; } }, metadata: _metadata }, _matchingRoundId_initializers, _matchingRoundId_extraInitializers);
            __esDecorate(null, null, _flagged_decorators, { kind: "field", name: "flagged", static: false, private: false, access: { has: function (obj) { return "flagged" in obj; }, get: function (obj) { return obj.flagged; }, set: function (obj, value) { obj.flagged = value; } }, metadata: _metadata }, _flagged_initializers, _flagged_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.Contribution = Contribution;
/**
 * Donation info for user profile
 *
 * Includes `Grant` but shows minimal information, just enough for frontend rendering
 */
var UserProfileDonationInfo = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _denomination_decorators;
    var _denomination_initializers = [];
    var _denomination_extraInitializers = [];
    var _amountUsd_decorators;
    var _amountUsd_initializers = [];
    var _amountUsd_extraInitializers = [];
    var _grantId_decorators;
    var _grantId_initializers = [];
    var _grantId_extraInitializers = [];
    var _grant_decorators;
    var _grant_initializers = [];
    var _grant_extraInitializers = [];
    var _totalMatched_decorators;
    var _totalMatched_initializers = [];
    var _totalMatched_extraInitializers = [];
    var _totalDonated_decorators;
    var _totalDonated_initializers = [];
    var _totalDonated_extraInitializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _paymentMethodId_decorators;
    var _paymentMethodId_initializers = [];
    var _paymentMethodId_extraInitializers = [];
    var _matchingRoundId_decorators;
    var _matchingRoundId_initializers = [];
    var _matchingRoundId_extraInitializers = [];
    var _flagged_decorators;
    var _flagged_initializers = [];
    var _flagged_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UserProfileDonationInfo(partial) {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.amount = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                this.denomination = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _denomination_initializers, void 0));
                this.amountUsd = (__runInitializers(this, _denomination_extraInitializers), __runInitializers(this, _amountUsd_initializers, void 0));
                this.grantId = (__runInitializers(this, _amountUsd_extraInitializers), __runInitializers(this, _grantId_initializers, void 0));
                this.grant = (__runInitializers(this, _grantId_extraInitializers), __runInitializers(this, _grant_initializers, void 0));
                this.totalMatched = (__runInitializers(this, _grant_extraInitializers), __runInitializers(this, _totalMatched_initializers, void 0));
                this.totalDonated = (__runInitializers(this, _totalMatched_extraInitializers), __runInitializers(this, _totalDonated_initializers, void 0));
                this.userId = (__runInitializers(this, _totalDonated_extraInitializers), __runInitializers(this, _userId_initializers, void 0));
                this.paymentMethodId = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _paymentMethodId_initializers, void 0));
                this.matchingRoundId = (__runInitializers(this, _paymentMethodId_extraInitializers), __runInitializers(this, _matchingRoundId_initializers, void 0));
                this.flagged = (__runInitializers(this, _matchingRoundId_extraInitializers), __runInitializers(this, _flagged_initializers, void 0));
                this.createdAt = (__runInitializers(this, _flagged_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
                __runInitializers(this, _updatedAt_extraInitializers);
                Object.assign(this, partial);
            }
            return UserProfileDonationInfo;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _amount_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _denomination_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _amountUsd_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _grantId_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _grant_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: grants_interface_1.BasicGrantResponse,
                }), (0, class_transformer_1.Type)(function () { return grants_interface_1.BasicGrantResponse; })];
            _totalMatched_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _totalDonated_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _userId_decorators = [(0, class_transformer_1.Exclude)()];
            _paymentMethodId_decorators = [(0, class_transformer_1.Exclude)()];
            _matchingRoundId_decorators = [(0, class_transformer_1.Exclude)()];
            _flagged_decorators = [(0, class_transformer_1.Exclude)()];
            _createdAt_decorators = [(0, class_transformer_1.Exclude)()];
            _updatedAt_decorators = [(0, class_transformer_1.Exclude)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _denomination_decorators, { kind: "field", name: "denomination", static: false, private: false, access: { has: function (obj) { return "denomination" in obj; }, get: function (obj) { return obj.denomination; }, set: function (obj, value) { obj.denomination = value; } }, metadata: _metadata }, _denomination_initializers, _denomination_extraInitializers);
            __esDecorate(null, null, _amountUsd_decorators, { kind: "field", name: "amountUsd", static: false, private: false, access: { has: function (obj) { return "amountUsd" in obj; }, get: function (obj) { return obj.amountUsd; }, set: function (obj, value) { obj.amountUsd = value; } }, metadata: _metadata }, _amountUsd_initializers, _amountUsd_extraInitializers);
            __esDecorate(null, null, _grantId_decorators, { kind: "field", name: "grantId", static: false, private: false, access: { has: function (obj) { return "grantId" in obj; }, get: function (obj) { return obj.grantId; }, set: function (obj, value) { obj.grantId = value; } }, metadata: _metadata }, _grantId_initializers, _grantId_extraInitializers);
            __esDecorate(null, null, _grant_decorators, { kind: "field", name: "grant", static: false, private: false, access: { has: function (obj) { return "grant" in obj; }, get: function (obj) { return obj.grant; }, set: function (obj, value) { obj.grant = value; } }, metadata: _metadata }, _grant_initializers, _grant_extraInitializers);
            __esDecorate(null, null, _totalMatched_decorators, { kind: "field", name: "totalMatched", static: false, private: false, access: { has: function (obj) { return "totalMatched" in obj; }, get: function (obj) { return obj.totalMatched; }, set: function (obj, value) { obj.totalMatched = value; } }, metadata: _metadata }, _totalMatched_initializers, _totalMatched_extraInitializers);
            __esDecorate(null, null, _totalDonated_decorators, { kind: "field", name: "totalDonated", static: false, private: false, access: { has: function (obj) { return "totalDonated" in obj; }, get: function (obj) { return obj.totalDonated; }, set: function (obj, value) { obj.totalDonated = value; } }, metadata: _metadata }, _totalDonated_initializers, _totalDonated_extraInitializers);
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _paymentMethodId_decorators, { kind: "field", name: "paymentMethodId", static: false, private: false, access: { has: function (obj) { return "paymentMethodId" in obj; }, get: function (obj) { return obj.paymentMethodId; }, set: function (obj, value) { obj.paymentMethodId = value; } }, metadata: _metadata }, _paymentMethodId_initializers, _paymentMethodId_extraInitializers);
            __esDecorate(null, null, _matchingRoundId_decorators, { kind: "field", name: "matchingRoundId", static: false, private: false, access: { has: function (obj) { return "matchingRoundId" in obj; }, get: function (obj) { return obj.matchingRoundId; }, set: function (obj, value) { obj.matchingRoundId = value; } }, metadata: _metadata }, _matchingRoundId_initializers, _matchingRoundId_extraInitializers);
            __esDecorate(null, null, _flagged_decorators, { kind: "field", name: "flagged", static: false, private: false, access: { has: function (obj) { return "flagged" in obj; }, get: function (obj) { return obj.flagged; }, set: function (obj, value) { obj.flagged = value; } }, metadata: _metadata }, _flagged_initializers, _flagged_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UserProfileDonationInfo = UserProfileDonationInfo;
/**
 * Pool contribution info for user profile
 *
 * Includes `MatchingRound` but shows minimal information, just enough for frontend rendering
 */
var UserProfileContributionInfo = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    var _denomination_decorators;
    var _denomination_initializers = [];
    var _denomination_extraInitializers = [];
    var _amountUsd_decorators;
    var _amountUsd_initializers = [];
    var _amountUsd_extraInitializers = [];
    var _grantId_decorators;
    var _grantId_initializers = [];
    var _grantId_extraInitializers = [];
    var _grant_decorators;
    var _grant_initializers = [];
    var _grant_extraInitializers = [];
    var _userId_decorators;
    var _userId_initializers = [];
    var _userId_extraInitializers = [];
    var _paymentMethodId_decorators;
    var _paymentMethodId_initializers = [];
    var _paymentMethodId_extraInitializers = [];
    var _matchingRoundId_decorators;
    var _matchingRoundId_initializers = [];
    var _matchingRoundId_extraInitializers = [];
    var _matchingRound_decorators;
    var _matchingRound_initializers = [];
    var _matchingRound_extraInitializers = [];
    var _flagged_decorators;
    var _flagged_initializers = [];
    var _flagged_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UserProfileContributionInfo(partial) {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.amount = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                this.denomination = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _denomination_initializers, void 0));
                this.amountUsd = (__runInitializers(this, _denomination_extraInitializers), __runInitializers(this, _amountUsd_initializers, void 0));
                this.grantId = (__runInitializers(this, _amountUsd_extraInitializers), __runInitializers(this, _grantId_initializers, void 0));
                this.grant = (__runInitializers(this, _grantId_extraInitializers), __runInitializers(this, _grant_initializers, void 0));
                this.userId = (__runInitializers(this, _grant_extraInitializers), __runInitializers(this, _userId_initializers, void 0));
                this.paymentMethodId = (__runInitializers(this, _userId_extraInitializers), __runInitializers(this, _paymentMethodId_initializers, void 0));
                this.matchingRoundId = (__runInitializers(this, _paymentMethodId_extraInitializers), __runInitializers(this, _matchingRoundId_initializers, void 0));
                this.matchingRound = (__runInitializers(this, _matchingRoundId_extraInitializers), __runInitializers(this, _matchingRound_initializers, void 0));
                this.flagged = (__runInitializers(this, _matchingRound_extraInitializers), __runInitializers(this, _flagged_initializers, void 0));
                this.createdAt = (__runInitializers(this, _flagged_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
                __runInitializers(this, _updatedAt_extraInitializers);
                Object.assign(this, partial);
            }
            return UserProfileContributionInfo;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _amount_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _denomination_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _amountUsd_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _grantId_decorators = [(0, class_transformer_1.Exclude)()];
            _grant_decorators = [(0, class_transformer_1.Exclude)()];
            _userId_decorators = [(0, class_transformer_1.Exclude)()];
            _paymentMethodId_decorators = [(0, class_transformer_1.Exclude)()];
            _matchingRoundId_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _matchingRound_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: pool_interface_1.MinimalPoolResponse,
                }), (0, class_transformer_1.Type)(function () { return pool_interface_1.MinimalPoolResponse; })];
            _flagged_decorators = [(0, class_transformer_1.Exclude)()];
            _createdAt_decorators = [(0, class_transformer_1.Exclude)()];
            _updatedAt_decorators = [(0, class_transformer_1.Exclude)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            __esDecorate(null, null, _denomination_decorators, { kind: "field", name: "denomination", static: false, private: false, access: { has: function (obj) { return "denomination" in obj; }, get: function (obj) { return obj.denomination; }, set: function (obj, value) { obj.denomination = value; } }, metadata: _metadata }, _denomination_initializers, _denomination_extraInitializers);
            __esDecorate(null, null, _amountUsd_decorators, { kind: "field", name: "amountUsd", static: false, private: false, access: { has: function (obj) { return "amountUsd" in obj; }, get: function (obj) { return obj.amountUsd; }, set: function (obj, value) { obj.amountUsd = value; } }, metadata: _metadata }, _amountUsd_initializers, _amountUsd_extraInitializers);
            __esDecorate(null, null, _grantId_decorators, { kind: "field", name: "grantId", static: false, private: false, access: { has: function (obj) { return "grantId" in obj; }, get: function (obj) { return obj.grantId; }, set: function (obj, value) { obj.grantId = value; } }, metadata: _metadata }, _grantId_initializers, _grantId_extraInitializers);
            __esDecorate(null, null, _grant_decorators, { kind: "field", name: "grant", static: false, private: false, access: { has: function (obj) { return "grant" in obj; }, get: function (obj) { return obj.grant; }, set: function (obj, value) { obj.grant = value; } }, metadata: _metadata }, _grant_initializers, _grant_extraInitializers);
            __esDecorate(null, null, _userId_decorators, { kind: "field", name: "userId", static: false, private: false, access: { has: function (obj) { return "userId" in obj; }, get: function (obj) { return obj.userId; }, set: function (obj, value) { obj.userId = value; } }, metadata: _metadata }, _userId_initializers, _userId_extraInitializers);
            __esDecorate(null, null, _paymentMethodId_decorators, { kind: "field", name: "paymentMethodId", static: false, private: false, access: { has: function (obj) { return "paymentMethodId" in obj; }, get: function (obj) { return obj.paymentMethodId; }, set: function (obj, value) { obj.paymentMethodId = value; } }, metadata: _metadata }, _paymentMethodId_initializers, _paymentMethodId_extraInitializers);
            __esDecorate(null, null, _matchingRoundId_decorators, { kind: "field", name: "matchingRoundId", static: false, private: false, access: { has: function (obj) { return "matchingRoundId" in obj; }, get: function (obj) { return obj.matchingRoundId; }, set: function (obj, value) { obj.matchingRoundId = value; } }, metadata: _metadata }, _matchingRoundId_initializers, _matchingRoundId_extraInitializers);
            __esDecorate(null, null, _matchingRound_decorators, { kind: "field", name: "matchingRound", static: false, private: false, access: { has: function (obj) { return "matchingRound" in obj; }, get: function (obj) { return obj.matchingRound; }, set: function (obj, value) { obj.matchingRound = value; } }, metadata: _metadata }, _matchingRound_initializers, _matchingRound_extraInitializers);
            __esDecorate(null, null, _flagged_decorators, { kind: "field", name: "flagged", static: false, private: false, access: { has: function (obj) { return "flagged" in obj; }, get: function (obj) { return obj.flagged; }, set: function (obj, value) { obj.flagged = value; } }, metadata: _metadata }, _flagged_initializers, _flagged_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UserProfileContributionInfo = UserProfileContributionInfo;
