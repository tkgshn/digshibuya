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
exports.CheckoutType = exports.ProviderResponse = exports.SuccessfulCheckoutInfo = exports.FeeAllocationMethod = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var FeeAllocationMethod;
(function (FeeAllocationMethod) {
    FeeAllocationMethod["PASS_TO_CUSTOMER"] = "customer";
    FeeAllocationMethod["PASS_TO_ENTITY"] = "entity";
})(FeeAllocationMethod || (exports.FeeAllocationMethod = FeeAllocationMethod = {}));
/**
 * Information about a specific checkout session
 *
 * @param donated The amount donated
 * @param matched The **estimated** amount matched. This may not be 100% accurate
 * @param numberOfItems The number of items this user donated to
 */
var SuccessfulCheckoutInfo = function () {
    var _a;
    var _donated_decorators;
    var _donated_initializers = [];
    var _donated_extraInitializers = [];
    var _matched_decorators;
    var _matched_initializers = [];
    var _matched_extraInitializers = [];
    var _numberOfItems_decorators;
    var _numberOfItems_initializers = [];
    var _numberOfItems_extraInitializers = [];
    return _a = /** @class */ (function () {
            function SuccessfulCheckoutInfo() {
                this.donated = __runInitializers(this, _donated_initializers, void 0);
                this.matched = (__runInitializers(this, _donated_extraInitializers), __runInitializers(this, _matched_initializers, void 0));
                this.numberOfItems = (__runInitializers(this, _matched_extraInitializers), __runInitializers(this, _numberOfItems_initializers, void 0));
                __runInitializers(this, _numberOfItems_extraInitializers);
            }
            return SuccessfulCheckoutInfo;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _donated_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _matched_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _numberOfItems_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            __esDecorate(null, null, _donated_decorators, { kind: "field", name: "donated", static: false, private: false, access: { has: function (obj) { return "donated" in obj; }, get: function (obj) { return obj.donated; }, set: function (obj, value) { obj.donated = value; } }, metadata: _metadata }, _donated_initializers, _donated_extraInitializers);
            __esDecorate(null, null, _matched_decorators, { kind: "field", name: "matched", static: false, private: false, access: { has: function (obj) { return "matched" in obj; }, get: function (obj) { return obj.matched; }, set: function (obj, value) { obj.matched = value; } }, metadata: _metadata }, _matched_initializers, _matched_extraInitializers);
            __esDecorate(null, null, _numberOfItems_decorators, { kind: "field", name: "numberOfItems", static: false, private: false, access: { has: function (obj) { return "numberOfItems" in obj; }, get: function (obj) { return obj.numberOfItems; }, set: function (obj, value) { obj.numberOfItems = value; } }, metadata: _metadata }, _numberOfItems_initializers, _numberOfItems_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.SuccessfulCheckoutInfo = SuccessfulCheckoutInfo;
/**
 * Information about a specific payment provider
 *
 * Majority of properties are excluded
 */
var ProviderResponse = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _type_decorators;
    var _type_initializers = [];
    var _type_extraInitializers = [];
    var _acceptedCountries_decorators;
    var _acceptedCountries_initializers = [];
    var _acceptedCountries_extraInitializers = [];
    var _denominations_decorators;
    var _denominations_initializers = [];
    var _denominations_extraInitializers = [];
    var _website_decorators;
    var _website_initializers = [];
    var _website_extraInitializers = [];
    var _schema_decorators;
    var _schema_initializers = [];
    var _schema_extraInitializers = [];
    var _version_decorators;
    var _version_initializers = [];
    var _version_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function ProviderResponse(partial) {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.type = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _type_initializers, void 0));
                this.acceptedCountries = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _acceptedCountries_initializers, void 0));
                this.denominations = (__runInitializers(this, _acceptedCountries_extraInitializers), __runInitializers(this, _denominations_initializers, void 0));
                this.website = (__runInitializers(this, _denominations_extraInitializers), __runInitializers(this, _website_initializers, void 0));
                this.schema = (__runInitializers(this, _website_extraInitializers), __runInitializers(this, _schema_initializers, void 0));
                this.version = (__runInitializers(this, _schema_extraInitializers), __runInitializers(this, _version_initializers, void 0));
                this.createdAt = (__runInitializers(this, _version_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
                __runInitializers(this, _updatedAt_extraInitializers);
                Object.assign(this, partial);
            }
            return ProviderResponse;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, class_transformer_1.Exclude)()];
            _name_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _type_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _acceptedCountries_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: [String],
                })];
            _denominations_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: [String],
                })];
            _website_decorators = [(0, class_transformer_1.Exclude)()];
            _schema_decorators = [(0, class_transformer_1.Exclude)()];
            _version_decorators = [(0, class_transformer_1.Exclude)()];
            _createdAt_decorators = [(0, class_transformer_1.Exclude)()];
            _updatedAt_decorators = [(0, class_transformer_1.Exclude)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: function (obj) { return "type" in obj; }, get: function (obj) { return obj.type; }, set: function (obj, value) { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(null, null, _acceptedCountries_decorators, { kind: "field", name: "acceptedCountries", static: false, private: false, access: { has: function (obj) { return "acceptedCountries" in obj; }, get: function (obj) { return obj.acceptedCountries; }, set: function (obj, value) { obj.acceptedCountries = value; } }, metadata: _metadata }, _acceptedCountries_initializers, _acceptedCountries_extraInitializers);
            __esDecorate(null, null, _denominations_decorators, { kind: "field", name: "denominations", static: false, private: false, access: { has: function (obj) { return "denominations" in obj; }, get: function (obj) { return obj.denominations; }, set: function (obj, value) { obj.denominations = value; } }, metadata: _metadata }, _denominations_initializers, _denominations_extraInitializers);
            __esDecorate(null, null, _website_decorators, { kind: "field", name: "website", static: false, private: false, access: { has: function (obj) { return "website" in obj; }, get: function (obj) { return obj.website; }, set: function (obj, value) { obj.website = value; } }, metadata: _metadata }, _website_initializers, _website_extraInitializers);
            __esDecorate(null, null, _schema_decorators, { kind: "field", name: "schema", static: false, private: false, access: { has: function (obj) { return "schema" in obj; }, get: function (obj) { return obj.schema; }, set: function (obj, value) { obj.schema = value; } }, metadata: _metadata }, _schema_initializers, _schema_extraInitializers);
            __esDecorate(null, null, _version_decorators, { kind: "field", name: "version", static: false, private: false, access: { has: function (obj) { return "version" in obj; }, get: function (obj) { return obj.version; }, set: function (obj, value) { obj.version = value; } }, metadata: _metadata }, _version_initializers, _version_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ProviderResponse = ProviderResponse;
var CheckoutType;
(function (CheckoutType) {
    CheckoutType[CheckoutType["GRANT"] = 0] = "GRANT";
    CheckoutType[CheckoutType["POOL"] = 1] = "POOL";
})(CheckoutType || (exports.CheckoutType = CheckoutType = {}));
