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
exports.UpdateUserDto = exports.UserProfile = exports.User = void 0;
var swagger_1 = require("@nestjs/swagger");
var client_1 = require("@prisma/client");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var contributions_interface_1 = require("../contributions/contributions.interface");
var grants_interface_1 = require("../grants/grants.interface");
var pool_interface_1 = require("../pool/pool.interface");
/**
 * Basic information about a User
 *
 * There are a few information that we hide from the users
 * 1. The visitorId
 * 2. Whether their account is flagged or not
 */
var User = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _email_extraInitializers = [];
    var _emailVerified_decorators;
    var _emailVerified_initializers = [];
    var _emailVerified_extraInitializers = [];
    var _image_decorators;
    var _image_initializers = [];
    var _image_extraInitializers = [];
    var _bio_decorators;
    var _bio_initializers = [];
    var _bio_extraInitializers = [];
    var _twitter_decorators;
    var _twitter_initializers = [];
    var _twitter_extraInitializers = [];
    var _visitorId_decorators;
    var _visitorId_initializers = [];
    var _visitorId_extraInitializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var _role_extraInitializers = [];
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
            function User(partial) {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.email = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _email_initializers, void 0));
                this.emailVerified = (__runInitializers(this, _email_extraInitializers), __runInitializers(this, _emailVerified_initializers, void 0));
                this.image = (__runInitializers(this, _emailVerified_extraInitializers), __runInitializers(this, _image_initializers, void 0));
                this.bio = (__runInitializers(this, _image_extraInitializers), __runInitializers(this, _bio_initializers, void 0));
                this.twitter = (__runInitializers(this, _bio_extraInitializers), __runInitializers(this, _twitter_initializers, void 0));
                this.visitorId = (__runInitializers(this, _twitter_extraInitializers), __runInitializers(this, _visitorId_initializers, void 0));
                this.role = (__runInitializers(this, _visitorId_extraInitializers), __runInitializers(this, _role_initializers, void 0));
                this.flagged = (__runInitializers(this, _role_extraInitializers), __runInitializers(this, _flagged_initializers, void 0));
                this.createdAt = (__runInitializers(this, _flagged_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
                __runInitializers(this, _updatedAt_extraInitializers);
                Object.assign(this, partial);
            }
            return User;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _name_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _email_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _emailVerified_decorators = [(0, swagger_1.ApiProperty)({
                    type: Date,
                    nullable: true,
                })];
            _image_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _bio_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                    nullable: true,
                })];
            _twitter_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                    nullable: true,
                })];
            _visitorId_decorators = [(0, class_transformer_1.Exclude)()];
            _role_decorators = [(0, swagger_1.ApiResponseProperty)({
                    enum: client_1.Role,
                })];
            _flagged_decorators = [(0, class_transformer_1.Exclude)()];
            _createdAt_decorators = [(0, class_transformer_1.Exclude)()];
            _updatedAt_decorators = [(0, class_transformer_1.Exclude)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _email_extraInitializers);
            __esDecorate(null, null, _emailVerified_decorators, { kind: "field", name: "emailVerified", static: false, private: false, access: { has: function (obj) { return "emailVerified" in obj; }, get: function (obj) { return obj.emailVerified; }, set: function (obj, value) { obj.emailVerified = value; } }, metadata: _metadata }, _emailVerified_initializers, _emailVerified_extraInitializers);
            __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } }, metadata: _metadata }, _image_initializers, _image_extraInitializers);
            __esDecorate(null, null, _bio_decorators, { kind: "field", name: "bio", static: false, private: false, access: { has: function (obj) { return "bio" in obj; }, get: function (obj) { return obj.bio; }, set: function (obj, value) { obj.bio = value; } }, metadata: _metadata }, _bio_initializers, _bio_extraInitializers);
            __esDecorate(null, null, _twitter_decorators, { kind: "field", name: "twitter", static: false, private: false, access: { has: function (obj) { return "twitter" in obj; }, get: function (obj) { return obj.twitter; }, set: function (obj, value) { obj.twitter = value; } }, metadata: _metadata }, _twitter_initializers, _twitter_extraInitializers);
            __esDecorate(null, null, _visitorId_decorators, { kind: "field", name: "visitorId", static: false, private: false, access: { has: function (obj) { return "visitorId" in obj; }, get: function (obj) { return obj.visitorId; }, set: function (obj, value) { obj.visitorId = value; } }, metadata: _metadata }, _visitorId_initializers, _visitorId_extraInitializers);
            __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _role_extraInitializers);
            __esDecorate(null, null, _flagged_decorators, { kind: "field", name: "flagged", static: false, private: false, access: { has: function (obj) { return "flagged" in obj; }, get: function (obj) { return obj.flagged; }, set: function (obj, value) { obj.flagged = value; } }, metadata: _metadata }, _flagged_initializers, _flagged_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.User = User;
/**
 * Additional information that is returned when querying a UserProfile
 *
 * This includes information about their contributions, the grants they own,
 * the total amount donated & total amount raised
 */
var UserProfile = function () {
    var _a;
    var _classSuper = User;
    var _donations_decorators;
    var _donations_initializers = [];
    var _donations_extraInitializers = [];
    var _grants_decorators;
    var _grants_initializers = [];
    var _grants_extraInitializers = [];
    var _contributions_decorators;
    var _contributions_initializers = [];
    var _contributions_extraInitializers = [];
    var _pools_decorators;
    var _pools_initializers = [];
    var _pools_extraInitializers = [];
    var _totalDonated_decorators;
    var _totalDonated_initializers = [];
    var _totalDonated_extraInitializers = [];
    var _totalRaised_decorators;
    var _totalRaised_initializers = [];
    var _totalRaised_extraInitializers = [];
    var _totalContributed_decorators;
    var _totalContributed_initializers = [];
    var _totalContributed_extraInitializers = [];
    var _totalPooled_decorators;
    var _totalPooled_initializers = [];
    var _totalPooled_extraInitializers = [];
    var _ecosystemBuilder_decorators;
    var _ecosystemBuilder_initializers = [];
    var _ecosystemBuilder_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(UserProfile, _super);
            function UserProfile(partial) {
                var _this = _super.call(this, partial) || this;
                _this.donations = __runInitializers(_this, _donations_initializers, void 0);
                _this.grants = (__runInitializers(_this, _donations_extraInitializers), __runInitializers(_this, _grants_initializers, void 0));
                // These two fields only exist if you're an ecosystem builder
                _this.contributions = (__runInitializers(_this, _grants_extraInitializers), __runInitializers(_this, _contributions_initializers, void 0));
                _this.pools = (__runInitializers(_this, _contributions_extraInitializers), __runInitializers(_this, _pools_initializers, void 0));
                _this.totalDonated = (__runInitializers(_this, _pools_extraInitializers), __runInitializers(_this, _totalDonated_initializers, void 0));
                _this.totalRaised = (__runInitializers(_this, _totalDonated_extraInitializers), __runInitializers(_this, _totalRaised_initializers, void 0));
                _this.totalContributed = (__runInitializers(_this, _totalRaised_extraInitializers), __runInitializers(_this, _totalContributed_initializers, void 0));
                _this.totalPooled = (__runInitializers(_this, _totalContributed_extraInitializers), __runInitializers(_this, _totalPooled_initializers, void 0));
                _this.ecosystemBuilder = (__runInitializers(_this, _totalPooled_extraInitializers), __runInitializers(_this, _ecosystemBuilder_initializers, void 0));
                __runInitializers(_this, _ecosystemBuilder_extraInitializers);
                Object.assign(_this, partial);
                return _this;
            }
            return UserProfile;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _donations_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: [contributions_interface_1.UserProfileDonationInfo],
                }), (0, class_transformer_1.Type)(function () { return contributions_interface_1.UserProfileDonationInfo; })];
            _grants_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: [grants_interface_1.GrantResponseWithContributions],
                }), (0, class_transformer_1.Type)(function () { return grants_interface_1.GrantResponseWithContributions; })];
            _contributions_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: [contributions_interface_1.UserProfileContributionInfo],
                }), (0, class_transformer_1.Type)(function () { return contributions_interface_1.UserProfileContributionInfo; })];
            _pools_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: [pool_interface_1.UserProfilePoolResponse],
                }), (0, class_transformer_1.Type)(function () { return pool_interface_1.UserProfilePoolResponse; })];
            _totalDonated_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _totalRaised_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _totalContributed_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _totalPooled_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _ecosystemBuilder_decorators = [(0, class_transformer_1.Exclude)()];
            __esDecorate(null, null, _donations_decorators, { kind: "field", name: "donations", static: false, private: false, access: { has: function (obj) { return "donations" in obj; }, get: function (obj) { return obj.donations; }, set: function (obj, value) { obj.donations = value; } }, metadata: _metadata }, _donations_initializers, _donations_extraInitializers);
            __esDecorate(null, null, _grants_decorators, { kind: "field", name: "grants", static: false, private: false, access: { has: function (obj) { return "grants" in obj; }, get: function (obj) { return obj.grants; }, set: function (obj, value) { obj.grants = value; } }, metadata: _metadata }, _grants_initializers, _grants_extraInitializers);
            __esDecorate(null, null, _contributions_decorators, { kind: "field", name: "contributions", static: false, private: false, access: { has: function (obj) { return "contributions" in obj; }, get: function (obj) { return obj.contributions; }, set: function (obj, value) { obj.contributions = value; } }, metadata: _metadata }, _contributions_initializers, _contributions_extraInitializers);
            __esDecorate(null, null, _pools_decorators, { kind: "field", name: "pools", static: false, private: false, access: { has: function (obj) { return "pools" in obj; }, get: function (obj) { return obj.pools; }, set: function (obj, value) { obj.pools = value; } }, metadata: _metadata }, _pools_initializers, _pools_extraInitializers);
            __esDecorate(null, null, _totalDonated_decorators, { kind: "field", name: "totalDonated", static: false, private: false, access: { has: function (obj) { return "totalDonated" in obj; }, get: function (obj) { return obj.totalDonated; }, set: function (obj, value) { obj.totalDonated = value; } }, metadata: _metadata }, _totalDonated_initializers, _totalDonated_extraInitializers);
            __esDecorate(null, null, _totalRaised_decorators, { kind: "field", name: "totalRaised", static: false, private: false, access: { has: function (obj) { return "totalRaised" in obj; }, get: function (obj) { return obj.totalRaised; }, set: function (obj, value) { obj.totalRaised = value; } }, metadata: _metadata }, _totalRaised_initializers, _totalRaised_extraInitializers);
            __esDecorate(null, null, _totalContributed_decorators, { kind: "field", name: "totalContributed", static: false, private: false, access: { has: function (obj) { return "totalContributed" in obj; }, get: function (obj) { return obj.totalContributed; }, set: function (obj, value) { obj.totalContributed = value; } }, metadata: _metadata }, _totalContributed_initializers, _totalContributed_extraInitializers);
            __esDecorate(null, null, _totalPooled_decorators, { kind: "field", name: "totalPooled", static: false, private: false, access: { has: function (obj) { return "totalPooled" in obj; }, get: function (obj) { return obj.totalPooled; }, set: function (obj, value) { obj.totalPooled = value; } }, metadata: _metadata }, _totalPooled_initializers, _totalPooled_extraInitializers);
            __esDecorate(null, null, _ecosystemBuilder_decorators, { kind: "field", name: "ecosystemBuilder", static: false, private: false, access: { has: function (obj) { return "ecosystemBuilder" in obj; }, get: function (obj) { return obj.ecosystemBuilder; }, set: function (obj, value) { obj.ecosystemBuilder = value; } }, metadata: _metadata }, _ecosystemBuilder_initializers, _ecosystemBuilder_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UserProfile = UserProfile;
/**
 * When updating a user, we only allow you to update your name, bio, and twitter handle for now
 */
var UpdateUserDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _bio_decorators;
    var _bio_initializers = [];
    var _bio_extraInitializers = [];
    var _twitter_decorators;
    var _twitter_initializers = [];
    var _twitter_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UpdateUserDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.bio = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _bio_initializers, void 0));
                this.twitter = (__runInitializers(this, _bio_extraInitializers), __runInitializers(this, _twitter_initializers, void 0));
                __runInitializers(this, _twitter_extraInitializers);
            }
            return UpdateUserDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _bio_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _twitter_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _bio_decorators, { kind: "field", name: "bio", static: false, private: false, access: { has: function (obj) { return "bio" in obj; }, get: function (obj) { return obj.bio; }, set: function (obj, value) { obj.bio = value; } }, metadata: _metadata }, _bio_initializers, _bio_extraInitializers);
            __esDecorate(null, null, _twitter_decorators, { kind: "field", name: "twitter", static: false, private: false, access: { has: function (obj) { return "twitter" in obj; }, get: function (obj) { return obj.twitter; }, set: function (obj, value) { obj.twitter = value; } }, metadata: _metadata }, _twitter_initializers, _twitter_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdateUserDto = UpdateUserDto;
