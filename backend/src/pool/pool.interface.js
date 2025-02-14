"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
exports.PoolWithFunding = exports.CheckoutPoolsResponse = exports.CheckoutPoolsDto = exports.PoolCheckout = exports.UpdatePoolDto = exports.PoolDetailResponse = exports.UserProfilePoolResponse = exports.MinimalPoolResponse = exports.PoolResponse = exports.BasicPoolResponse = exports.CreatePoolDto = exports.GetPoolDto = exports.GetPoolQueryDto = exports.PoolFilterOptions = exports.PoolSortOptions = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var grants_interface_1 = require("../grants/grants.interface");
var provider_interface_1 = require("../provider/provider.interface");
var users_interface_1 = require("../users/users.interface");
var PoolSortOptions;
(function (PoolSortOptions) {
    PoolSortOptions["NEWEST"] = "newest";
    PoolSortOptions["OLDEST"] = "oldest";
    PoolSortOptions["MOST_FUNDED"] = "most_funded";
    PoolSortOptions["MOST_BACKED"] = "most_backed";
})(PoolSortOptions || (exports.PoolSortOptions = PoolSortOptions = {}));
var PoolFilterOptions;
(function (PoolFilterOptions) {
    PoolFilterOptions["ENDED"] = "ended";
    PoolFilterOptions["NOT_ENDED"] = "not_ended";
})(PoolFilterOptions || (exports.PoolFilterOptions = PoolFilterOptions = {}));
/**
 * Used when searching/retrieving all pools
 */
var GetPoolQueryDto = function () {
    var _a;
    var _sort_decorators;
    var _sort_initializers = [];
    var _sort_extraInitializers = [];
    var _filter_decorators;
    var _filter_initializers = [];
    var _filter_extraInitializers = [];
    var _search_decorators;
    var _search_initializers = [];
    var _search_extraInitializers = [];
    return _a = /** @class */ (function () {
            function GetPoolQueryDto() {
                this.sort = __runInitializers(this, _sort_initializers, void 0);
                this.filter = (__runInitializers(this, _sort_extraInitializers), __runInitializers(this, _filter_initializers, void 0));
                this.search = (__runInitializers(this, _filter_extraInitializers), __runInitializers(this, _search_initializers, void 0));
                __runInitializers(this, _search_extraInitializers);
            }
            return GetPoolQueryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sort_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    enum: PoolSortOptions,
                }), (0, class_validator_1.IsEnum)(PoolSortOptions), (0, class_validator_1.IsOptional)()];
            _filter_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    enum: PoolFilterOptions,
                }), (0, class_validator_1.IsEnum)(PoolFilterOptions), (0, class_validator_1.IsOptional)()];
            _search_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    type: String,
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _sort_decorators, { kind: "field", name: "sort", static: false, private: false, access: { has: function (obj) { return "sort" in obj; }, get: function (obj) { return obj.sort; }, set: function (obj, value) { obj.sort = value; } }, metadata: _metadata }, _sort_initializers, _sort_extraInitializers);
            __esDecorate(null, null, _filter_decorators, { kind: "field", name: "filter", static: false, private: false, access: { has: function (obj) { return "filter" in obj; }, get: function (obj) { return obj.filter; }, set: function (obj, value) { obj.filter = value; } }, metadata: _metadata }, _filter_initializers, _filter_extraInitializers);
            __esDecorate(null, null, _search_decorators, { kind: "field", name: "search", static: false, private: false, access: { has: function (obj) { return "search" in obj; }, get: function (obj) { return obj.search; }, set: function (obj, value) { obj.search = value; } }, metadata: _metadata }, _search_initializers, _search_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.GetPoolQueryDto = GetPoolQueryDto;
/**
 * For the `getAllPools` function in `pool.service.ts`
 *
 * Controls whether we get all pools or verified pools only
 */
var GetPoolDto = /** @class */ (function (_super) {
    __extends(GetPoolDto, _super);
    function GetPoolDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GetPoolDto;
}(GetPoolQueryDto));
exports.GetPoolDto = GetPoolDto;
/**
 * Data transfer object when creating a pool
 */
var CreatePoolDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _startDate_decorators;
    var _startDate_initializers = [];
    var _startDate_extraInitializers = [];
    var _endDate_decorators;
    var _endDate_initializers = [];
    var _endDate_extraInitializers = [];
    var _grants_decorators;
    var _grants_initializers = [];
    var _grants_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreatePoolDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.description = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.startDate = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _startDate_initializers, void 0));
                this.endDate = (__runInitializers(this, _startDate_extraInitializers), __runInitializers(this, _endDate_initializers, void 0));
                this.grants = (__runInitializers(this, _endDate_extraInitializers), __runInitializers(this, _grants_initializers, void 0));
                __runInitializers(this, _grants_extraInitializers);
            }
            return CreatePoolDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _description_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _startDate_decorators = [(0, swagger_1.ApiProperty)({
                    type: Date,
                }), (0, class_validator_1.IsDateString)()];
            _endDate_decorators = [(0, swagger_1.ApiProperty)({
                    type: Date,
                }), (0, class_validator_1.IsDateString)()];
            _grants_decorators = [(0, swagger_1.ApiProperty)({
                    type: [String],
                }), (0, class_validator_1.IsString)({ each: true }), (0, class_validator_1.ArrayNotEmpty)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _startDate_decorators, { kind: "field", name: "startDate", static: false, private: false, access: { has: function (obj) { return "startDate" in obj; }, get: function (obj) { return obj.startDate; }, set: function (obj, value) { obj.startDate = value; } }, metadata: _metadata }, _startDate_initializers, _startDate_extraInitializers);
            __esDecorate(null, null, _endDate_decorators, { kind: "field", name: "endDate", static: false, private: false, access: { has: function (obj) { return "endDate" in obj; }, get: function (obj) { return obj.endDate; }, set: function (obj, value) { obj.endDate = value; } }, metadata: _metadata }, _endDate_initializers, _endDate_extraInitializers);
            __esDecorate(null, null, _grants_decorators, { kind: "field", name: "grants", static: false, private: false, access: { has: function (obj) { return "grants" in obj; }, get: function (obj) { return obj.grants; }, set: function (obj, value) { obj.grants = value; } }, metadata: _metadata }, _grants_initializers, _grants_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreatePoolDto = CreatePoolDto;
/**
 * Basic pool info which doesn't include nested objects
 *
 * Used in UserProfileContributionInfo and inherited classes
 */
var BasicPoolResponse = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _image_decorators;
    var _image_initializers = [];
    var _image_extraInitializers = [];
    var _paid_decorators;
    var _paid_initializers = [];
    var _paid_extraInitializers = [];
    var _verified_decorators;
    var _verified_initializers = [];
    var _verified_extraInitializers = [];
    var _contributions_decorators;
    var _contributions_initializers = [];
    var _contributions_extraInitializers = [];
    var _startDate_decorators;
    var _startDate_initializers = [];
    var _startDate_extraInitializers = [];
    var _endDate_decorators;
    var _endDate_initializers = [];
    var _endDate_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function BasicPoolResponse(partial) {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.description = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.image = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _image_initializers, void 0));
                this.paid = (__runInitializers(this, _image_extraInitializers), __runInitializers(this, _paid_initializers, void 0));
                this.verified = (__runInitializers(this, _paid_extraInitializers), __runInitializers(this, _verified_initializers, void 0));
                this.contributions = (__runInitializers(this, _verified_extraInitializers), __runInitializers(this, _contributions_initializers, void 0));
                this.startDate = (__runInitializers(this, _contributions_extraInitializers), __runInitializers(this, _startDate_initializers, void 0));
                this.endDate = (__runInitializers(this, _startDate_extraInitializers), __runInitializers(this, _endDate_initializers, void 0));
                this.createdAt = (__runInitializers(this, _endDate_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
                __runInitializers(this, _updatedAt_extraInitializers);
                Object.assign(this, partial);
            }
            return BasicPoolResponse;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _name_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _description_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _image_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _paid_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Boolean,
                })];
            _verified_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Boolean,
                })];
            _contributions_decorators = [(0, class_transformer_1.Exclude)()];
            _startDate_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Date,
                })];
            _endDate_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Date,
                })];
            _createdAt_decorators = [(0, class_transformer_1.Exclude)()];
            _updatedAt_decorators = [(0, class_transformer_1.Exclude)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } }, metadata: _metadata }, _image_initializers, _image_extraInitializers);
            __esDecorate(null, null, _paid_decorators, { kind: "field", name: "paid", static: false, private: false, access: { has: function (obj) { return "paid" in obj; }, get: function (obj) { return obj.paid; }, set: function (obj, value) { obj.paid = value; } }, metadata: _metadata }, _paid_initializers, _paid_extraInitializers);
            __esDecorate(null, null, _verified_decorators, { kind: "field", name: "verified", static: false, private: false, access: { has: function (obj) { return "verified" in obj; }, get: function (obj) { return obj.verified; }, set: function (obj, value) { obj.verified = value; } }, metadata: _metadata }, _verified_initializers, _verified_extraInitializers);
            __esDecorate(null, null, _contributions_decorators, { kind: "field", name: "contributions", static: false, private: false, access: { has: function (obj) { return "contributions" in obj; }, get: function (obj) { return obj.contributions; }, set: function (obj, value) { obj.contributions = value; } }, metadata: _metadata }, _contributions_initializers, _contributions_extraInitializers);
            __esDecorate(null, null, _startDate_decorators, { kind: "field", name: "startDate", static: false, private: false, access: { has: function (obj) { return "startDate" in obj; }, get: function (obj) { return obj.startDate; }, set: function (obj, value) { obj.startDate = value; } }, metadata: _metadata }, _startDate_initializers, _startDate_extraInitializers);
            __esDecorate(null, null, _endDate_decorators, { kind: "field", name: "endDate", static: false, private: false, access: { has: function (obj) { return "endDate" in obj; }, get: function (obj) { return obj.endDate; }, set: function (obj, value) { obj.endDate = value; } }, metadata: _metadata }, _endDate_initializers, _endDate_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.BasicPoolResponse = BasicPoolResponse;
/**
 * Pool details about a specific pool
 * This includes:
 * @param amountRaised Computed value of total amount raised in this pool
 */
var PoolResponse = function () {
    var _a;
    var _classSuper = BasicPoolResponse;
    var _amountRaised_decorators;
    var _amountRaised_initializers = [];
    var _amountRaised_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(PoolResponse, _super);
            function PoolResponse(partial) {
                var _this = _super.call(this, partial) || this;
                _this.amountRaised = __runInitializers(_this, _amountRaised_initializers, void 0);
                __runInitializers(_this, _amountRaised_extraInitializers);
                Object.assign(_this, partial);
                return _this;
            }
            return PoolResponse;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _amountRaised_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            __esDecorate(null, null, _amountRaised_decorators, { kind: "field", name: "amountRaised", static: false, private: false, access: { has: function (obj) { return "amountRaised" in obj; }, get: function (obj) { return obj.amountRaised; }, set: function (obj, value) { obj.amountRaised = value; } }, metadata: _metadata }, _amountRaised_initializers, _amountRaised_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PoolResponse = PoolResponse;
/**
 * Minimal pool details about a specific pool
 *
 * This includes:
 * @param amountRaised Computed value of total amount raised in this pool
 */
var MinimalPoolResponse = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _image_decorators;
    var _image_initializers = [];
    var _image_extraInitializers = [];
    var _paid_decorators;
    var _paid_initializers = [];
    var _paid_extraInitializers = [];
    var _verified_decorators;
    var _verified_initializers = [];
    var _verified_extraInitializers = [];
    var _startDate_decorators;
    var _startDate_initializers = [];
    var _startDate_extraInitializers = [];
    var _endDate_decorators;
    var _endDate_initializers = [];
    var _endDate_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function MinimalPoolResponse(partial) {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.description = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.image = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _image_initializers, void 0));
                this.paid = (__runInitializers(this, _image_extraInitializers), __runInitializers(this, _paid_initializers, void 0));
                this.verified = (__runInitializers(this, _paid_extraInitializers), __runInitializers(this, _verified_initializers, void 0));
                this.startDate = (__runInitializers(this, _verified_extraInitializers), __runInitializers(this, _startDate_initializers, void 0));
                this.endDate = (__runInitializers(this, _startDate_extraInitializers), __runInitializers(this, _endDate_initializers, void 0));
                this.createdAt = (__runInitializers(this, _endDate_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
                __runInitializers(this, _updatedAt_extraInitializers);
                Object.assign(this, partial);
            }
            return MinimalPoolResponse;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _name_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _description_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _image_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _paid_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Boolean,
                })];
            _verified_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Boolean,
                })];
            _startDate_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Date,
                })];
            _endDate_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Date,
                })];
            _createdAt_decorators = [(0, class_transformer_1.Exclude)()];
            _updatedAt_decorators = [(0, class_transformer_1.Exclude)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } }, metadata: _metadata }, _image_initializers, _image_extraInitializers);
            __esDecorate(null, null, _paid_decorators, { kind: "field", name: "paid", static: false, private: false, access: { has: function (obj) { return "paid" in obj; }, get: function (obj) { return obj.paid; }, set: function (obj, value) { obj.paid = value; } }, metadata: _metadata }, _paid_initializers, _paid_extraInitializers);
            __esDecorate(null, null, _verified_decorators, { kind: "field", name: "verified", static: false, private: false, access: { has: function (obj) { return "verified" in obj; }, get: function (obj) { return obj.verified; }, set: function (obj, value) { obj.verified = value; } }, metadata: _metadata }, _verified_initializers, _verified_extraInitializers);
            __esDecorate(null, null, _startDate_decorators, { kind: "field", name: "startDate", static: false, private: false, access: { has: function (obj) { return "startDate" in obj; }, get: function (obj) { return obj.startDate; }, set: function (obj, value) { obj.startDate = value; } }, metadata: _metadata }, _startDate_initializers, _startDate_extraInitializers);
            __esDecorate(null, null, _endDate_decorators, { kind: "field", name: "endDate", static: false, private: false, access: { has: function (obj) { return "endDate" in obj; }, get: function (obj) { return obj.endDate; }, set: function (obj, value) { obj.endDate = value; } }, metadata: _metadata }, _endDate_initializers, _endDate_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.MinimalPoolResponse = MinimalPoolResponse;
/**
 * Minimal pool details about a specific pool
 *
 * Used in User Profile
 *
 * This includes:
 * @param amountRaised Computed value of total amount raised in this pool
 */
var UserProfilePoolResponse = function () {
    var _a;
    var _classSuper = MinimalPoolResponse;
    var _amountRaised_decorators;
    var _amountRaised_initializers = [];
    var _amountRaised_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(UserProfilePoolResponse, _super);
            function UserProfilePoolResponse(partial) {
                var _this = _super.call(this, partial) || this;
                _this.amountRaised = __runInitializers(_this, _amountRaised_initializers, void 0);
                __runInitializers(_this, _amountRaised_extraInitializers);
                Object.assign(_this, partial);
                return _this;
            }
            return UserProfilePoolResponse;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _amountRaised_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            __esDecorate(null, null, _amountRaised_decorators, { kind: "field", name: "amountRaised", static: false, private: false, access: { has: function (obj) { return "amountRaised" in obj; }, get: function (obj) { return obj.amountRaised; }, set: function (obj, value) { obj.amountRaised = value; } }, metadata: _metadata }, _amountRaised_initializers, _amountRaised_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UserProfilePoolResponse = UserProfilePoolResponse;
/**
 * Full pool details about a specific pool
 * This includes:
 * @param amountRaised Computed value of total amount raised in this pool
 * @param team Team who created this pool
 * @param contributors Number of contributors in the pool
 * @param grants All grants in this pool
 */
var PoolDetailResponse = function () {
    var _a;
    var _classSuper = BasicPoolResponse;
    var _amountRaised_decorators;
    var _amountRaised_initializers = [];
    var _amountRaised_extraInitializers = [];
    var _funders_decorators;
    var _funders_initializers = [];
    var _funders_extraInitializers = [];
    var _team_decorators;
    var _team_initializers = [];
    var _team_extraInitializers = [];
    var _contributors_decorators;
    var _contributors_initializers = [];
    var _contributors_extraInitializers = [];
    var _grants_decorators;
    var _grants_initializers = [];
    var _grants_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(PoolDetailResponse, _super);
            function PoolDetailResponse(partial) {
                var _this = _super.call(this, partial) || this;
                _this.amountRaised = __runInitializers(_this, _amountRaised_initializers, void 0);
                _this.funders = (__runInitializers(_this, _amountRaised_extraInitializers), __runInitializers(_this, _funders_initializers, void 0));
                _this.team = (__runInitializers(_this, _funders_extraInitializers), __runInitializers(_this, _team_initializers, void 0));
                _this.contributors = (__runInitializers(_this, _team_extraInitializers), __runInitializers(_this, _contributors_initializers, void 0));
                _this.grants = (__runInitializers(_this, _contributors_extraInitializers), __runInitializers(_this, _grants_initializers, void 0));
                __runInitializers(_this, _grants_extraInitializers);
                Object.assign(_this, partial);
                return _this;
            }
            return PoolDetailResponse;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _amountRaised_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _funders_decorators = [(0, class_transformer_1.Exclude)()];
            _team_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: [users_interface_1.User],
                    example: [
                        {
                            id: 'clg5yxz390006rs0u6po4496g',
                            name: 'John Doe',
                            email: 'johndoe@gmail.com',
                            emailVerified: null,
                            image: 'https://lh3.googleusercontent.com/a/HYholaWYk79ztL_n1_AfWAXyPSr8isJUg=s96-c',
                            bio: 'Hello there',
                            twitter: 'johndoe',
                            role: 'User',
                        },
                    ],
                }), (0, class_transformer_1.Type)(function () { return users_interface_1.User; })];
            _contributors_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _grants_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: [grants_interface_1.PoolGrantResponse],
                }), (0, class_transformer_1.Type)(function () { return grants_interface_1.PoolGrantResponse; })];
            __esDecorate(null, null, _amountRaised_decorators, { kind: "field", name: "amountRaised", static: false, private: false, access: { has: function (obj) { return "amountRaised" in obj; }, get: function (obj) { return obj.amountRaised; }, set: function (obj, value) { obj.amountRaised = value; } }, metadata: _metadata }, _amountRaised_initializers, _amountRaised_extraInitializers);
            __esDecorate(null, null, _funders_decorators, { kind: "field", name: "funders", static: false, private: false, access: { has: function (obj) { return "funders" in obj; }, get: function (obj) { return obj.funders; }, set: function (obj, value) { obj.funders = value; } }, metadata: _metadata }, _funders_initializers, _funders_extraInitializers);
            __esDecorate(null, null, _team_decorators, { kind: "field", name: "team", static: false, private: false, access: { has: function (obj) { return "team" in obj; }, get: function (obj) { return obj.team; }, set: function (obj, value) { obj.team = value; } }, metadata: _metadata }, _team_initializers, _team_extraInitializers);
            __esDecorate(null, null, _contributors_decorators, { kind: "field", name: "contributors", static: false, private: false, access: { has: function (obj) { return "contributors" in obj; }, get: function (obj) { return obj.contributors; }, set: function (obj, value) { obj.contributors = value; } }, metadata: _metadata }, _contributors_initializers, _contributors_extraInitializers);
            __esDecorate(null, null, _grants_decorators, { kind: "field", name: "grants", static: false, private: false, access: { has: function (obj) { return "grants" in obj; }, get: function (obj) { return obj.grants; }, set: function (obj, value) { obj.grants = value; } }, metadata: _metadata }, _grants_initializers, _grants_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PoolDetailResponse = PoolDetailResponse;
/**
 * Data transfer object when updating a pool
 *
 * @note - fundingGoal & paymentAccount is not allowed to be changed
 */
var UpdatePoolDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _startDate_decorators;
    var _startDate_initializers = [];
    var _startDate_extraInitializers = [];
    var _endDate_decorators;
    var _endDate_initializers = [];
    var _endDate_extraInitializers = [];
    var _grants_decorators;
    var _grants_initializers = [];
    var _grants_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UpdatePoolDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.description = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.startDate = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _startDate_initializers, void 0));
                this.endDate = (__runInitializers(this, _startDate_extraInitializers), __runInitializers(this, _endDate_initializers, void 0));
                this.grants = (__runInitializers(this, _endDate_extraInitializers), __runInitializers(this, _grants_initializers, void 0));
                __runInitializers(this, _grants_extraInitializers);
            }
            return UpdatePoolDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _description_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _startDate_decorators = [(0, swagger_1.ApiProperty)({
                    type: Date,
                }), (0, class_validator_1.IsDateString)()];
            _endDate_decorators = [(0, swagger_1.ApiProperty)({
                    type: Date,
                }), (0, class_validator_1.IsDateString)()];
            _grants_decorators = [(0, swagger_1.ApiProperty)({
                    type: [String],
                }), (0, class_validator_1.IsString)({ each: true }), (0, class_validator_1.ArrayNotEmpty)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _startDate_decorators, { kind: "field", name: "startDate", static: false, private: false, access: { has: function (obj) { return "startDate" in obj; }, get: function (obj) { return obj.startDate; }, set: function (obj, value) { obj.startDate = value; } }, metadata: _metadata }, _startDate_initializers, _startDate_extraInitializers);
            __esDecorate(null, null, _endDate_decorators, { kind: "field", name: "endDate", static: false, private: false, access: { has: function (obj) { return "endDate" in obj; }, get: function (obj) { return obj.endDate; }, set: function (obj, value) { obj.endDate = value; } }, metadata: _metadata }, _endDate_initializers, _endDate_extraInitializers);
            __esDecorate(null, null, _grants_decorators, { kind: "field", name: "grants", static: false, private: false, access: { has: function (obj) { return "grants" in obj; }, get: function (obj) { return obj.grants; }, set: function (obj, value) { obj.grants = value; } }, metadata: _metadata }, _grants_initializers, _grants_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdatePoolDto = UpdatePoolDto;
/**
 * Helper class for pools checkout process
 */
var PoolCheckout = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    return _a = /** @class */ (function () {
            function PoolCheckout() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.amount = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                __runInitializers(this, _amount_extraInitializers);
            }
            return PoolCheckout;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _amount_decorators = [(0, swagger_1.ApiProperty)({
                    type: Number,
                }), (0, class_validator_1.IsNumber)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: function (obj) { return "amount" in obj; }, get: function (obj) { return obj.amount; }, set: function (obj, value) { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PoolCheckout = PoolCheckout;
/**
 * DTO for checking out one or more pools
 */
var CheckoutPoolsDto = function () {
    var _a;
    var _pools_decorators;
    var _pools_initializers = [];
    var _pools_extraInitializers = [];
    var _feeAllocation_decorators;
    var _feeAllocation_initializers = [];
    var _feeAllocation_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CheckoutPoolsDto() {
                this.pools = __runInitializers(this, _pools_initializers, void 0);
                this.feeAllocation = (__runInitializers(this, _pools_extraInitializers), __runInitializers(this, _feeAllocation_initializers, void 0));
                __runInitializers(this, _feeAllocation_extraInitializers);
            }
            return CheckoutPoolsDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _pools_decorators = [(0, swagger_1.ApiProperty)({
                    type: [PoolCheckout],
                }), (0, class_validator_1.IsArray)(), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_validator_1.ArrayMinSize)(1), (0, class_transformer_1.Type)(function () { return PoolCheckout; })];
            _feeAllocation_decorators = [(0, swagger_1.ApiProperty)({
                    enum: provider_interface_1.FeeAllocationMethod,
                }), (0, class_validator_1.IsEnum)(provider_interface_1.FeeAllocationMethod), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _pools_decorators, { kind: "field", name: "pools", static: false, private: false, access: { has: function (obj) { return "pools" in obj; }, get: function (obj) { return obj.pools; }, set: function (obj, value) { obj.pools = value; } }, metadata: _metadata }, _pools_initializers, _pools_extraInitializers);
            __esDecorate(null, null, _feeAllocation_decorators, { kind: "field", name: "feeAllocation", static: false, private: false, access: { has: function (obj) { return "feeAllocation" in obj; }, get: function (obj) { return obj.feeAllocation; }, set: function (obj, value) { obj.feeAllocation = value; } }, metadata: _metadata }, _feeAllocation_initializers, _feeAllocation_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CheckoutPoolsDto = CheckoutPoolsDto;
// TODO: Make it agnostic to whichever payment provider
var CheckoutPoolsResponse = function () {
    var _a;
    var _url_decorators;
    var _url_initializers = [];
    var _url_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CheckoutPoolsResponse() {
                this.url = __runInitializers(this, _url_initializers, void 0);
                __runInitializers(this, _url_extraInitializers);
            }
            return CheckoutPoolsResponse;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _url_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: function (obj) { return "url" in obj; }, get: function (obj) { return obj.url; }, set: function (obj, value) { obj.url = value; } }, metadata: _metadata }, _url_initializers, _url_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CheckoutPoolsResponse = CheckoutPoolsResponse;
/**
 * Additional computed amount field which is used when checking out
 */
var PoolWithFunding = /** @class */ (function () {
    function PoolWithFunding() {
    }
    return PoolWithFunding;
}());
exports.PoolWithFunding = PoolWithFunding;
