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
exports.InviteCodeResponse = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
/**
 * We only return a boolean `claimed` and the `code` that was claimed
 * Everything else is excluded to protect user's information
 *
 * This is using the `class-transformer` library to exclude properties
 */
var InviteCodeResponse = function () {
    var _a;
    var _claimed_decorators;
    var _claimed_initializers = [];
    var _claimed_extraInitializers = [];
    var _code_decorators;
    var _code_initializers = [];
    var _code_extraInitializers = [];
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _claimedById_decorators;
    var _claimedById_initializers = [];
    var _claimedById_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function InviteCodeResponse(partial) {
                this.claimed = __runInitializers(this, _claimed_initializers, void 0);
                this.code = (__runInitializers(this, _claimed_extraInitializers), __runInitializers(this, _code_initializers, void 0));
                this.id = (__runInitializers(this, _code_extraInitializers), __runInitializers(this, _id_initializers, void 0));
                this.claimedById = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _claimedById_initializers, void 0));
                this.createdAt = (__runInitializers(this, _claimedById_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
                __runInitializers(this, _updatedAt_extraInitializers);
                Object.assign(this, partial);
            }
            return InviteCodeResponse;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _claimed_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Boolean,
                })];
            _code_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _id_decorators = [(0, class_transformer_1.Exclude)()];
            _claimedById_decorators = [(0, class_transformer_1.Exclude)()];
            _createdAt_decorators = [(0, class_transformer_1.Exclude)()];
            _updatedAt_decorators = [(0, class_transformer_1.Exclude)()];
            __esDecorate(null, null, _claimed_decorators, { kind: "field", name: "claimed", static: false, private: false, access: { has: function (obj) { return "claimed" in obj; }, get: function (obj) { return obj.claimed; }, set: function (obj, value) { obj.claimed = value; } }, metadata: _metadata }, _claimed_initializers, _claimed_extraInitializers);
            __esDecorate(null, null, _code_decorators, { kind: "field", name: "code", static: false, private: false, access: { has: function (obj) { return "code" in obj; }, get: function (obj) { return obj.code; }, set: function (obj, value) { obj.code = value; } }, metadata: _metadata }, _code_initializers, _code_extraInitializers);
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _claimedById_decorators, { kind: "field", name: "claimedById", static: false, private: false, access: { has: function (obj) { return "claimedById" in obj; }, get: function (obj) { return obj.claimedById; }, set: function (obj, value) { obj.claimedById = value; } }, metadata: _metadata }, _claimedById_initializers, _claimedById_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.InviteCodeResponse = InviteCodeResponse;
