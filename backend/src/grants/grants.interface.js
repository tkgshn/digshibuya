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
exports.GrantWithFunding = exports.CheckoutGrantsResponse = exports.CheckoutGrantsDto = exports.GrantCheckout = exports.GrantDetailResponse = exports.PoolGrantResponse = exports.GrantResponse = exports.GrantResponseWithTeam = exports.GrantResponseWithContributions = exports.GrantWithMatchingInfo = exports.BasicGrantResponse = exports.ResubmitGrantDto = exports.CreateGrantDto = exports.UpdateGrantDto = exports.GetGrantDto = exports.GetGrantQueryDto = exports.GrantFilterOptions = exports.GrantSortOptions = void 0;
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var nestjs_form_data_1 = require("nestjs-form-data");
var contributions_interface_1 = require("../contributions/contributions.interface");
var payment_accounts_interface_1 = require("../payment-accounts/payment-accounts.interface");
var provider_interface_1 = require("../provider/provider.interface");
var users_interface_1 = require("../users/users.interface");
var GrantSortOptions;
(function (GrantSortOptions) {
    GrantSortOptions["NEWEST"] = "newest";
    GrantSortOptions["OLDEST"] = "oldest";
    GrantSortOptions["MOST_FUNDED"] = "most_funded";
    GrantSortOptions["MOST_BACKED"] = "most_backed";
})(GrantSortOptions || (exports.GrantSortOptions = GrantSortOptions = {}));
var GrantFilterOptions;
(function (GrantFilterOptions) {
    GrantFilterOptions["FUNDED"] = "funded";
    GrantFilterOptions["UNDERFUNDED"] = "underfunded";
})(GrantFilterOptions || (exports.GrantFilterOptions = GrantFilterOptions = {}));
/**
 * Used when searching/retrieving all grants
 */
var GetGrantQueryDto = function () {
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
            function GetGrantQueryDto() {
                this.sort = __runInitializers(this, _sort_initializers, void 0);
                this.filter = (__runInitializers(this, _sort_extraInitializers), __runInitializers(this, _filter_initializers, void 0));
                this.search = (__runInitializers(this, _filter_extraInitializers), __runInitializers(this, _search_initializers, void 0));
                __runInitializers(this, _search_extraInitializers);
            }
            return GetGrantQueryDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sort_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    enum: GrantSortOptions,
                }), (0, class_validator_1.IsEnum)(GrantSortOptions), (0, class_validator_1.IsOptional)()];
            _filter_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    enum: GrantFilterOptions,
                }), (0, class_validator_1.IsEnum)(GrantFilterOptions), (0, class_validator_1.IsOptional)()];
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
exports.GetGrantQueryDto = GetGrantQueryDto;
/**
 * For the `getAllGrants` function in `grants.service.ts`
 *
 * Controls whether we get all grants or verified grants only
 */
var GetGrantDto = /** @class */ (function (_super) {
    __extends(GetGrantDto, _super);
    function GetGrantDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GetGrantDto;
}(GetGrantQueryDto));
exports.GetGrantDto = GetGrantDto;
/**
 * Information about `fileType`
 */
var FileTypeResult = function () {
    var _a;
    var _ext_decorators;
    var _ext_initializers = [];
    var _ext_extraInitializers = [];
    var _mime_decorators;
    var _mime_initializers = [];
    var _mime_extraInitializers = [];
    return _a = /** @class */ (function () {
            function FileTypeResult() {
                this.ext = __runInitializers(this, _ext_initializers, void 0);
                this.mime = (__runInitializers(this, _ext_extraInitializers), __runInitializers(this, _mime_initializers, void 0));
                __runInitializers(this, _mime_extraInitializers);
            }
            return FileTypeResult;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _ext_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                })];
            _mime_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                })];
            __esDecorate(null, null, _ext_decorators, { kind: "field", name: "ext", static: false, private: false, access: { has: function (obj) { return "ext" in obj; }, get: function (obj) { return obj.ext; }, set: function (obj, value) { obj.ext = value; } }, metadata: _metadata }, _ext_initializers, _ext_extraInitializers);
            __esDecorate(null, null, _mime_decorators, { kind: "field", name: "mime", static: false, private: false, access: { has: function (obj) { return "mime" in obj; }, get: function (obj) { return obj.mime; }, set: function (obj, value) { obj.mime = value; } }, metadata: _metadata }, _mime_initializers, _mime_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
/**
 * This is the strucutre of a file sent over multipart/form-data
 */
var MemoryStoredFile = function () {
    var _a;
    var _originalName_decorators;
    var _originalName_initializers = [];
    var _originalName_extraInitializers = [];
    var _encoding_decorators;
    var _encoding_initializers = [];
    var _encoding_extraInitializers = [];
    var _busBoyMimeType_decorators;
    var _busBoyMimeType_initializers = [];
    var _busBoyMimeType_extraInitializers = [];
    var _buffer_decorators;
    var _buffer_initializers = [];
    var _buffer_extraInitializers = [];
    var _size_decorators;
    var _size_initializers = [];
    var _size_extraInitializers = [];
    var _fileType_decorators;
    var _fileType_initializers = [];
    var _fileType_extraInitializers = [];
    return _a = /** @class */ (function () {
            function MemoryStoredFile() {
                this.originalName = __runInitializers(this, _originalName_initializers, void 0);
                this.encoding = (__runInitializers(this, _originalName_extraInitializers), __runInitializers(this, _encoding_initializers, void 0));
                this.busBoyMimeType = (__runInitializers(this, _encoding_extraInitializers), __runInitializers(this, _busBoyMimeType_initializers, void 0));
                this.buffer = (__runInitializers(this, _busBoyMimeType_extraInitializers), __runInitializers(this, _buffer_initializers, void 0));
                this.size = (__runInitializers(this, _buffer_extraInitializers), __runInitializers(this, _size_initializers, void 0));
                this.fileType = (__runInitializers(this, _size_extraInitializers), __runInitializers(this, _fileType_initializers, void 0));
                __runInitializers(this, _fileType_extraInitializers);
            }
            return MemoryStoredFile;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _originalName_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                })];
            _encoding_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                })];
            _busBoyMimeType_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                })];
            _buffer_decorators = [(0, swagger_1.ApiProperty)({
                    type: Buffer,
                })];
            _size_decorators = [(0, swagger_1.ApiProperty)({
                    type: Number,
                })];
            _fileType_decorators = [(0, swagger_1.ApiProperty)({
                    type: FileTypeResult,
                })];
            __esDecorate(null, null, _originalName_decorators, { kind: "field", name: "originalName", static: false, private: false, access: { has: function (obj) { return "originalName" in obj; }, get: function (obj) { return obj.originalName; }, set: function (obj, value) { obj.originalName = value; } }, metadata: _metadata }, _originalName_initializers, _originalName_extraInitializers);
            __esDecorate(null, null, _encoding_decorators, { kind: "field", name: "encoding", static: false, private: false, access: { has: function (obj) { return "encoding" in obj; }, get: function (obj) { return obj.encoding; }, set: function (obj, value) { obj.encoding = value; } }, metadata: _metadata }, _encoding_initializers, _encoding_extraInitializers);
            __esDecorate(null, null, _busBoyMimeType_decorators, { kind: "field", name: "busBoyMimeType", static: false, private: false, access: { has: function (obj) { return "busBoyMimeType" in obj; }, get: function (obj) { return obj.busBoyMimeType; }, set: function (obj, value) { obj.busBoyMimeType = value; } }, metadata: _metadata }, _busBoyMimeType_initializers, _busBoyMimeType_extraInitializers);
            __esDecorate(null, null, _buffer_decorators, { kind: "field", name: "buffer", static: false, private: false, access: { has: function (obj) { return "buffer" in obj; }, get: function (obj) { return obj.buffer; }, set: function (obj, value) { obj.buffer = value; } }, metadata: _metadata }, _buffer_initializers, _buffer_extraInitializers);
            __esDecorate(null, null, _size_decorators, { kind: "field", name: "size", static: false, private: false, access: { has: function (obj) { return "size" in obj; }, get: function (obj) { return obj.size; }, set: function (obj, value) { obj.size = value; } }, metadata: _metadata }, _size_initializers, _size_extraInitializers);
            __esDecorate(null, null, _fileType_decorators, { kind: "field", name: "fileType", static: false, private: false, access: { has: function (obj) { return "fileType" in obj; }, get: function (obj) { return obj.fileType; }, set: function (obj, value) { obj.fileType = value; } }, metadata: _metadata }, _fileType_initializers, _fileType_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
/**
 * Data transfer object when updating a grant
 *
 * Every field is optional
 * @note - fundingGoal & paymentAccount is not allowed to be changed
 */
var UpdateGrantDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _location_decorators;
    var _location_initializers = [];
    var _location_extraInitializers = [];
    var _twitter_decorators;
    var _twitter_initializers = [];
    var _twitter_extraInitializers = [];
    var _website_decorators;
    var _website_initializers = [];
    var _website_extraInitializers = [];
    var _image_decorators;
    var _image_initializers = [];
    var _image_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    return _a = /** @class */ (function () {
            function UpdateGrantDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.location = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _location_initializers, void 0));
                this.twitter = (__runInitializers(this, _location_extraInitializers), __runInitializers(this, _twitter_initializers, void 0));
                this.website = (__runInitializers(this, _twitter_extraInitializers), __runInitializers(this, _website_initializers, void 0));
                this.image = (__runInitializers(this, _website_extraInitializers), __runInitializers(this, _image_initializers, void 0));
                this.description = (__runInitializers(this, _image_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                __runInitializers(this, _description_extraInitializers);
            }
            return UpdateGrantDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                    nullable: true,
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _location_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                    nullable: true,
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _twitter_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    type: String,
                    nullable: true,
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _website_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                    nullable: true,
                }), (0, class_validator_1.IsUrl)(), (0, class_validator_1.IsOptional)()];
            _image_decorators = [(0, swagger_1.ApiProperty)({
                    type: MemoryStoredFile,
                    nullable: true,
                }), (0, nestjs_form_data_1.IsFile)(), (0, nestjs_form_data_1.HasMimeType)(['image/jpeg', 'image/jpg', 'image/png']), (0, class_validator_1.IsOptional)()];
            _description_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                    nullable: true,
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _location_decorators, { kind: "field", name: "location", static: false, private: false, access: { has: function (obj) { return "location" in obj; }, get: function (obj) { return obj.location; }, set: function (obj, value) { obj.location = value; } }, metadata: _metadata }, _location_initializers, _location_extraInitializers);
            __esDecorate(null, null, _twitter_decorators, { kind: "field", name: "twitter", static: false, private: false, access: { has: function (obj) { return "twitter" in obj; }, get: function (obj) { return obj.twitter; }, set: function (obj, value) { obj.twitter = value; } }, metadata: _metadata }, _twitter_initializers, _twitter_extraInitializers);
            __esDecorate(null, null, _website_decorators, { kind: "field", name: "website", static: false, private: false, access: { has: function (obj) { return "website" in obj; }, get: function (obj) { return obj.website; }, set: function (obj, value) { obj.website = value; } }, metadata: _metadata }, _website_initializers, _website_extraInitializers);
            __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } }, metadata: _metadata }, _image_initializers, _image_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.UpdateGrantDto = UpdateGrantDto;
/**
 * Data transfer object when creating a grant
 */
var CreateGrantDto = function () {
    var _a;
    var _name_decorators;
    var _name_initializers = [];
    var _name_extraInitializers = [];
    var _location_decorators;
    var _location_initializers = [];
    var _location_extraInitializers = [];
    var _twitter_decorators;
    var _twitter_initializers = [];
    var _twitter_extraInitializers = [];
    var _website_decorators;
    var _website_initializers = [];
    var _website_extraInitializers = [];
    var _image_decorators;
    var _image_initializers = [];
    var _image_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _fundingGoal_decorators;
    var _fundingGoal_initializers = [];
    var _fundingGoal_extraInitializers = [];
    var _paymentAccount_decorators;
    var _paymentAccount_initializers = [];
    var _paymentAccount_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CreateGrantDto() {
                this.name = __runInitializers(this, _name_initializers, void 0);
                this.location = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _location_initializers, void 0));
                this.twitter = (__runInitializers(this, _location_extraInitializers), __runInitializers(this, _twitter_initializers, void 0));
                this.website = (__runInitializers(this, _twitter_extraInitializers), __runInitializers(this, _website_initializers, void 0));
                // @ApiProperty({
                //   type: MemoryStoredFile,
                // })
                // @IsFile()
                // @HasMimeType(['image/jpeg', 'image/jpg', 'image/png'])
                // image: any;
                // @ApiProperty()
                // image: string;  // 画像のバイナリデータの代わりにURLを受け取る
                this.image = (__runInitializers(this, _website_extraInitializers), __runInitializers(this, _image_initializers, void 0));
                this.description = (__runInitializers(this, _image_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.fundingGoal = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _fundingGoal_initializers, void 0));
                this.paymentAccount = (__runInitializers(this, _fundingGoal_extraInitializers), __runInitializers(this, _paymentAccount_initializers, void 0));
                __runInitializers(this, _paymentAccount_extraInitializers);
            }
            return CreateGrantDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _name_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _location_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _twitter_decorators = [(0, swagger_1.ApiPropertyOptional)({
                    type: String,
                }), (0, class_validator_1.IsString)(), (0, class_validator_1.IsOptional)()];
            _website_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsUrl)()];
            _image_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _description_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            _fundingGoal_decorators = [(0, swagger_1.ApiProperty)({
                    type: Number,
                }), (0, class_transformer_1.Type)(function () { return Number; }), (0, class_validator_1.IsPositive)()];
            _paymentAccount_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _location_decorators, { kind: "field", name: "location", static: false, private: false, access: { has: function (obj) { return "location" in obj; }, get: function (obj) { return obj.location; }, set: function (obj, value) { obj.location = value; } }, metadata: _metadata }, _location_initializers, _location_extraInitializers);
            __esDecorate(null, null, _twitter_decorators, { kind: "field", name: "twitter", static: false, private: false, access: { has: function (obj) { return "twitter" in obj; }, get: function (obj) { return obj.twitter; }, set: function (obj, value) { obj.twitter = value; } }, metadata: _metadata }, _twitter_initializers, _twitter_extraInitializers);
            __esDecorate(null, null, _website_decorators, { kind: "field", name: "website", static: false, private: false, access: { has: function (obj) { return "website" in obj; }, get: function (obj) { return obj.website; }, set: function (obj, value) { obj.website = value; } }, metadata: _metadata }, _website_initializers, _website_extraInitializers);
            __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } }, metadata: _metadata }, _image_initializers, _image_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _fundingGoal_decorators, { kind: "field", name: "fundingGoal", static: false, private: false, access: { has: function (obj) { return "fundingGoal" in obj; }, get: function (obj) { return obj.fundingGoal; }, set: function (obj, value) { obj.fundingGoal = value; } }, metadata: _metadata }, _fundingGoal_initializers, _fundingGoal_extraInitializers);
            __esDecorate(null, null, _paymentAccount_decorators, { kind: "field", name: "paymentAccount", static: false, private: false, access: { has: function (obj) { return "paymentAccount" in obj; }, get: function (obj) { return obj.paymentAccount; }, set: function (obj, value) { obj.paymentAccount = value; } }, metadata: _metadata }, _paymentAccount_initializers, _paymentAccount_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CreateGrantDto = CreateGrantDto;
/**
 * We extend UpdateGrantDto because there are fields that you may not need to update (such as images)
 */
var ResubmitGrantDto = function () {
    var _a;
    var _classSuper = UpdateGrantDto;
    var _fundingGoal_decorators;
    var _fundingGoal_initializers = [];
    var _fundingGoal_extraInitializers = [];
    var _paymentAccount_decorators;
    var _paymentAccount_initializers = [];
    var _paymentAccount_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(ResubmitGrantDto, _super);
            function ResubmitGrantDto() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.fundingGoal = __runInitializers(_this, _fundingGoal_initializers, void 0);
                _this.paymentAccount = (__runInitializers(_this, _fundingGoal_extraInitializers), __runInitializers(_this, _paymentAccount_initializers, void 0));
                __runInitializers(_this, _paymentAccount_extraInitializers);
                return _this;
            }
            return ResubmitGrantDto;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _fundingGoal_decorators = [(0, swagger_1.ApiProperty)({
                    type: Number,
                }), (0, class_transformer_1.Type)(function () { return Number; }), (0, class_validator_1.IsPositive)()];
            _paymentAccount_decorators = [(0, swagger_1.ApiProperty)({
                    type: String,
                }), (0, class_validator_1.IsString)()];
            __esDecorate(null, null, _fundingGoal_decorators, { kind: "field", name: "fundingGoal", static: false, private: false, access: { has: function (obj) { return "fundingGoal" in obj; }, get: function (obj) { return obj.fundingGoal; }, set: function (obj, value) { obj.fundingGoal = value; } }, metadata: _metadata }, _fundingGoal_initializers, _fundingGoal_extraInitializers);
            __esDecorate(null, null, _paymentAccount_decorators, { kind: "field", name: "paymentAccount", static: false, private: false, access: { has: function (obj) { return "paymentAccount" in obj; }, get: function (obj) { return obj.paymentAccount; }, set: function (obj, value) { obj.paymentAccount = value; } }, metadata: _metadata }, _paymentAccount_initializers, _paymentAccount_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.ResubmitGrantDto = ResubmitGrantDto;
/**
 * Basic grant info which doesn't include nested objects
 *
 * Used in UserProfileContributionInfo and inherited classes
 */
var BasicGrantResponse = function () {
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
    var _twitter_decorators;
    var _twitter_initializers = [];
    var _twitter_extraInitializers = [];
    var _website_decorators;
    var _website_initializers = [];
    var _website_extraInitializers = [];
    var _location_decorators;
    var _location_initializers = [];
    var _location_extraInitializers = [];
    var _paymentAccountId_decorators;
    var _paymentAccountId_initializers = [];
    var _paymentAccountId_extraInitializers = [];
    var _fundingGoal_decorators;
    var _fundingGoal_initializers = [];
    var _fundingGoal_extraInitializers = [];
    var _verified_decorators;
    var _verified_initializers = [];
    var _verified_extraInitializers = [];
    var _createdAt_decorators;
    var _createdAt_initializers = [];
    var _createdAt_extraInitializers = [];
    var _updatedAt_decorators;
    var _updatedAt_initializers = [];
    var _updatedAt_extraInitializers = [];
    return _a = /** @class */ (function () {
            function BasicGrantResponse(partial) {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.name = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _name_initializers, void 0));
                this.description = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _description_initializers, void 0));
                this.image = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _image_initializers, void 0));
                this.twitter = (__runInitializers(this, _image_extraInitializers), __runInitializers(this, _twitter_initializers, void 0));
                this.website = (__runInitializers(this, _twitter_extraInitializers), __runInitializers(this, _website_initializers, void 0));
                this.location = (__runInitializers(this, _website_extraInitializers), __runInitializers(this, _location_initializers, void 0));
                this.paymentAccountId = (__runInitializers(this, _location_extraInitializers), __runInitializers(this, _paymentAccountId_initializers, void 0));
                this.fundingGoal = (__runInitializers(this, _paymentAccountId_extraInitializers), __runInitializers(this, _fundingGoal_initializers, void 0));
                this.verified = (__runInitializers(this, _fundingGoal_extraInitializers), __runInitializers(this, _verified_initializers, void 0));
                this.createdAt = (__runInitializers(this, _verified_extraInitializers), __runInitializers(this, _createdAt_initializers, void 0));
                this.updatedAt = (__runInitializers(this, _createdAt_extraInitializers), __runInitializers(this, _updatedAt_initializers, void 0));
                __runInitializers(this, _updatedAt_extraInitializers);
                Object.assign(this, partial);
            }
            return BasicGrantResponse;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _id_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _name_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _description_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _image_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _twitter_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _website_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _location_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: String,
                })];
            _paymentAccountId_decorators = [(0, class_transformer_1.Exclude)()];
            _fundingGoal_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _verified_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Boolean,
                })];
            _createdAt_decorators = [(0, class_transformer_1.Exclude)()];
            _updatedAt_decorators = [(0, class_transformer_1.Exclude)()];
            __esDecorate(null, null, _id_decorators, { kind: "field", name: "id", static: false, private: false, access: { has: function (obj) { return "id" in obj; }, get: function (obj) { return obj.id; }, set: function (obj, value) { obj.id = value; } }, metadata: _metadata }, _id_initializers, _id_extraInitializers);
            __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: function (obj) { return "name" in obj; }, get: function (obj) { return obj.name; }, set: function (obj, value) { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
            __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } }, metadata: _metadata }, _image_initializers, _image_extraInitializers);
            __esDecorate(null, null, _twitter_decorators, { kind: "field", name: "twitter", static: false, private: false, access: { has: function (obj) { return "twitter" in obj; }, get: function (obj) { return obj.twitter; }, set: function (obj, value) { obj.twitter = value; } }, metadata: _metadata }, _twitter_initializers, _twitter_extraInitializers);
            __esDecorate(null, null, _website_decorators, { kind: "field", name: "website", static: false, private: false, access: { has: function (obj) { return "website" in obj; }, get: function (obj) { return obj.website; }, set: function (obj, value) { obj.website = value; } }, metadata: _metadata }, _website_initializers, _website_extraInitializers);
            __esDecorate(null, null, _location_decorators, { kind: "field", name: "location", static: false, private: false, access: { has: function (obj) { return "location" in obj; }, get: function (obj) { return obj.location; }, set: function (obj, value) { obj.location = value; } }, metadata: _metadata }, _location_initializers, _location_extraInitializers);
            __esDecorate(null, null, _paymentAccountId_decorators, { kind: "field", name: "paymentAccountId", static: false, private: false, access: { has: function (obj) { return "paymentAccountId" in obj; }, get: function (obj) { return obj.paymentAccountId; }, set: function (obj, value) { obj.paymentAccountId = value; } }, metadata: _metadata }, _paymentAccountId_initializers, _paymentAccountId_extraInitializers);
            __esDecorate(null, null, _fundingGoal_decorators, { kind: "field", name: "fundingGoal", static: false, private: false, access: { has: function (obj) { return "fundingGoal" in obj; }, get: function (obj) { return obj.fundingGoal; }, set: function (obj, value) { obj.fundingGoal = value; } }, metadata: _metadata }, _fundingGoal_initializers, _fundingGoal_extraInitializers);
            __esDecorate(null, null, _verified_decorators, { kind: "field", name: "verified", static: false, private: false, access: { has: function (obj) { return "verified" in obj; }, get: function (obj) { return obj.verified; }, set: function (obj, value) { obj.verified = value; } }, metadata: _metadata }, _verified_initializers, _verified_extraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } }, metadata: _metadata }, _createdAt_initializers, _createdAt_extraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } }, metadata: _metadata }, _updatedAt_initializers, _updatedAt_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.BasicGrantResponse = BasicGrantResponse;
/**
 * Grant with matching info such as `matchedFund` & `contributions`
 *
 * Used for calculating QF amount
 */
var GrantWithMatchingInfo = function () {
    var _a;
    var _classSuper = BasicGrantResponse;
    var _matchedFund_decorators;
    var _matchedFund_initializers = [];
    var _matchedFund_extraInitializers = [];
    var _contributions_decorators;
    var _contributions_initializers = [];
    var _contributions_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(GrantWithMatchingInfo, _super);
            function GrantWithMatchingInfo(partial) {
                var _this = _super.call(this, partial) || this;
                _this.matchedFund = __runInitializers(_this, _matchedFund_initializers, void 0);
                _this.contributions = (__runInitializers(_this, _matchedFund_extraInitializers), __runInitializers(_this, _contributions_initializers, void 0));
                __runInitializers(_this, _contributions_extraInitializers);
                Object.assign(_this, partial);
                return _this;
            }
            return GrantWithMatchingInfo;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _matchedFund_decorators = [(0, class_transformer_1.Exclude)()];
            _contributions_decorators = [(0, class_transformer_1.Exclude)()];
            __esDecorate(null, null, _matchedFund_decorators, { kind: "field", name: "matchedFund", static: false, private: false, access: { has: function (obj) { return "matchedFund" in obj; }, get: function (obj) { return obj.matchedFund; }, set: function (obj, value) { obj.matchedFund = value; } }, metadata: _metadata }, _matchedFund_initializers, _matchedFund_extraInitializers);
            __esDecorate(null, null, _contributions_decorators, { kind: "field", name: "contributions", static: false, private: false, access: { has: function (obj) { return "contributions" in obj; }, get: function (obj) { return obj.contributions; }, set: function (obj, value) { obj.contributions = value; } }, metadata: _metadata }, _contributions_initializers, _contributions_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.GrantWithMatchingInfo = GrantWithMatchingInfo;
/**
 * Response body of a Grant, with additional information such as:
 *
 * @param amountRaised Computed value of all contributions under this grant
 * @param contributions Donations made to the grant
 */
var GrantResponseWithContributions = function () {
    var _a;
    var _classSuper = BasicGrantResponse;
    var _amountRaised_decorators;
    var _amountRaised_initializers = [];
    var _amountRaised_extraInitializers = [];
    var _contributions_decorators;
    var _contributions_initializers = [];
    var _contributions_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(GrantResponseWithContributions, _super);
            function GrantResponseWithContributions(partial) {
                var _this = _super.call(this, partial) || this;
                _this.amountRaised = __runInitializers(_this, _amountRaised_initializers, void 0);
                _this.contributions = (__runInitializers(_this, _amountRaised_extraInitializers), __runInitializers(_this, _contributions_initializers, void 0));
                __runInitializers(_this, _contributions_extraInitializers);
                Object.assign(_this, partial);
                return _this;
            }
            return GrantResponseWithContributions;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _amountRaised_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _contributions_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: [contributions_interface_1.Contribution],
                    example: [
                        {
                            id: 'clg4zguz00089s5nndx5507js',
                            amount: 1,
                            denomination: 'USD',
                            amountUsd: 1,
                            grantId: 'clg3bs7400014x6s53234dnw2',
                        },
                        {
                            id: 'clg4zguz0008as5nn9b536n6r',
                            amount: 2,
                            denomination: 'USD',
                            amountUsd: 2,
                            grantId: 'clg3bs7400014x6s53234dnw2',
                        },
                    ],
                }), (0, class_transformer_1.Type)(function () { return contributions_interface_1.Contribution; })];
            __esDecorate(null, null, _amountRaised_decorators, { kind: "field", name: "amountRaised", static: false, private: false, access: { has: function (obj) { return "amountRaised" in obj; }, get: function (obj) { return obj.amountRaised; }, set: function (obj, value) { obj.amountRaised = value; } }, metadata: _metadata }, _amountRaised_initializers, _amountRaised_extraInitializers);
            __esDecorate(null, null, _contributions_decorators, { kind: "field", name: "contributions", static: false, private: false, access: { has: function (obj) { return "contributions" in obj; }, get: function (obj) { return obj.contributions; }, set: function (obj, value) { obj.contributions = value; } }, metadata: _metadata }, _contributions_initializers, _contributions_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.GrantResponseWithContributions = GrantResponseWithContributions;
/**
 * Response body of a Grant, with team info:
 *
 * @param team Users part of this grant's team
 */
var GrantResponseWithTeam = function () {
    var _a;
    var _classSuper = BasicGrantResponse;
    var _team_decorators;
    var _team_initializers = [];
    var _team_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(GrantResponseWithTeam, _super);
            function GrantResponseWithTeam(partial) {
                var _this = _super.call(this, partial) || this;
                _this.team = __runInitializers(_this, _team_initializers, void 0);
                __runInitializers(_this, _team_extraInitializers);
                Object.assign(_this, partial);
                return _this;
            }
            return GrantResponseWithTeam;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
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
            __esDecorate(null, null, _team_decorators, { kind: "field", name: "team", static: false, private: false, access: { has: function (obj) { return "team" in obj; }, get: function (obj) { return obj.team; }, set: function (obj, value) { obj.team = value; } }, metadata: _metadata }, _team_initializers, _team_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.GrantResponseWithTeam = GrantResponseWithTeam;
/**
 * Grant details about a specific grant
 * This includes:
 * @param team All users under this grant
 * @param contributions All donations to this grant
 */
var GrantResponse = function () {
    var _a;
    var _classSuper = BasicGrantResponse;
    var _amountRaised_decorators;
    var _amountRaised_initializers = [];
    var _amountRaised_extraInitializers = [];
    var _contributions_decorators;
    var _contributions_initializers = [];
    var _contributions_extraInitializers = [];
    var _team_decorators;
    var _team_initializers = [];
    var _team_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(GrantResponse, _super);
            function GrantResponse(partial) {
                var _this = _super.call(this, partial) || this;
                _this.amountRaised = __runInitializers(_this, _amountRaised_initializers, void 0);
                _this.contributions = (__runInitializers(_this, _amountRaised_extraInitializers), __runInitializers(_this, _contributions_initializers, void 0));
                _this.team = (__runInitializers(_this, _contributions_extraInitializers), __runInitializers(_this, _team_initializers, void 0));
                __runInitializers(_this, _team_extraInitializers);
                Object.assign(_this, partial);
                return _this;
            }
            return GrantResponse;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _amountRaised_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _contributions_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: [contributions_interface_1.Contribution],
                    example: [
                        {
                            id: 'clg4zguz00089s5nndx5507js',
                            amount: 1,
                            denomination: 'USD',
                            amountUsd: 1,
                            grantId: 'clg3bs7400014x6s53234dnw2',
                        },
                        {
                            id: 'clg4zguz0008as5nn9b536n6r',
                            amount: 2,
                            denomination: 'USD',
                            amountUsd: 2,
                            grantId: 'clg3bs7400014x6s53234dnw2',
                        },
                    ],
                }), (0, class_transformer_1.Type)(function () { return contributions_interface_1.Contribution; })];
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
            __esDecorate(null, null, _amountRaised_decorators, { kind: "field", name: "amountRaised", static: false, private: false, access: { has: function (obj) { return "amountRaised" in obj; }, get: function (obj) { return obj.amountRaised; }, set: function (obj, value) { obj.amountRaised = value; } }, metadata: _metadata }, _amountRaised_initializers, _amountRaised_extraInitializers);
            __esDecorate(null, null, _contributions_decorators, { kind: "field", name: "contributions", static: false, private: false, access: { has: function (obj) { return "contributions" in obj; }, get: function (obj) { return obj.contributions; }, set: function (obj, value) { obj.contributions = value; } }, metadata: _metadata }, _contributions_initializers, _contributions_extraInitializers);
            __esDecorate(null, null, _team_decorators, { kind: "field", name: "team", static: false, private: false, access: { has: function (obj) { return "team" in obj; }, get: function (obj) { return obj.team; }, set: function (obj, value) { obj.team = value; } }, metadata: _metadata }, _team_initializers, _team_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.GrantResponse = GrantResponse;
/**
 * Minimal grant details about a specific grant.
 * To be used in the pool interface
 * This includes:
 * @param team All users under this grant
 * @param contributions All donations to this grant
 */
var PoolGrantResponse = function () {
    var _a;
    var _classSuper = BasicGrantResponse;
    var _amountRaised_decorators;
    var _amountRaised_initializers = [];
    var _amountRaised_extraInitializers = [];
    var _contributions_decorators;
    var _contributions_initializers = [];
    var _contributions_extraInitializers = [];
    var _team_decorators;
    var _team_initializers = [];
    var _team_extraInitializers = [];
    var _twitter_decorators;
    var _twitter_initializers = [];
    var _twitter_extraInitializers = [];
    var _website_decorators;
    var _website_initializers = [];
    var _website_extraInitializers = [];
    var _location_decorators;
    var _location_initializers = [];
    var _location_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(PoolGrantResponse, _super);
            function PoolGrantResponse(partial) {
                var _this = _super.call(this, partial) || this;
                _this.amountRaised = __runInitializers(_this, _amountRaised_initializers, void 0);
                _this.contributions = (__runInitializers(_this, _amountRaised_extraInitializers), __runInitializers(_this, _contributions_initializers, void 0));
                _this.team = (__runInitializers(_this, _contributions_extraInitializers), __runInitializers(_this, _team_initializers, void 0));
                _this.twitter = (__runInitializers(_this, _team_extraInitializers), __runInitializers(_this, _twitter_initializers, void 0));
                _this.website = (__runInitializers(_this, _twitter_extraInitializers), __runInitializers(_this, _website_initializers, void 0));
                _this.location = (__runInitializers(_this, _website_extraInitializers), __runInitializers(_this, _location_initializers, void 0));
                __runInitializers(_this, _location_extraInitializers);
                Object.assign(_this, partial);
                return _this;
            }
            return PoolGrantResponse;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _amountRaised_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _contributions_decorators = [(0, class_transformer_1.Exclude)()];
            _team_decorators = [(0, class_transformer_1.Exclude)()];
            _twitter_decorators = [(0, class_transformer_1.Exclude)()];
            _website_decorators = [(0, class_transformer_1.Exclude)()];
            _location_decorators = [(0, class_transformer_1.Exclude)()];
            __esDecorate(null, null, _amountRaised_decorators, { kind: "field", name: "amountRaised", static: false, private: false, access: { has: function (obj) { return "amountRaised" in obj; }, get: function (obj) { return obj.amountRaised; }, set: function (obj, value) { obj.amountRaised = value; } }, metadata: _metadata }, _amountRaised_initializers, _amountRaised_extraInitializers);
            __esDecorate(null, null, _contributions_decorators, { kind: "field", name: "contributions", static: false, private: false, access: { has: function (obj) { return "contributions" in obj; }, get: function (obj) { return obj.contributions; }, set: function (obj, value) { obj.contributions = value; } }, metadata: _metadata }, _contributions_initializers, _contributions_extraInitializers);
            __esDecorate(null, null, _team_decorators, { kind: "field", name: "team", static: false, private: false, access: { has: function (obj) { return "team" in obj; }, get: function (obj) { return obj.team; }, set: function (obj, value) { obj.team = value; } }, metadata: _metadata }, _team_initializers, _team_extraInitializers);
            __esDecorate(null, null, _twitter_decorators, { kind: "field", name: "twitter", static: false, private: false, access: { has: function (obj) { return "twitter" in obj; }, get: function (obj) { return obj.twitter; }, set: function (obj, value) { obj.twitter = value; } }, metadata: _metadata }, _twitter_initializers, _twitter_extraInitializers);
            __esDecorate(null, null, _website_decorators, { kind: "field", name: "website", static: false, private: false, access: { has: function (obj) { return "website" in obj; }, get: function (obj) { return obj.website; }, set: function (obj, value) { obj.website = value; } }, metadata: _metadata }, _website_initializers, _website_extraInitializers);
            __esDecorate(null, null, _location_decorators, { kind: "field", name: "location", static: false, private: false, access: { has: function (obj) { return "location" in obj; }, get: function (obj) { return obj.location; }, set: function (obj, value) { obj.location = value; } }, metadata: _metadata }, _location_initializers, _location_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.PoolGrantResponse = PoolGrantResponse;
/**
 * Full grant details about a specific grant
 * This includes:
 * @param team All users under this grant
 * @param contributions All donations to this grant
 * @param paymentAccount The payment account info for this grant
 */
var GrantDetailResponse = function () {
    var _a;
    var _classSuper = BasicGrantResponse;
    var _amountRaised_decorators;
    var _amountRaised_initializers = [];
    var _amountRaised_extraInitializers = [];
    var _contributions_decorators;
    var _contributions_initializers = [];
    var _contributions_extraInitializers = [];
    var _team_decorators;
    var _team_initializers = [];
    var _team_extraInitializers = [];
    var _paymentAccount_decorators;
    var _paymentAccount_initializers = [];
    var _paymentAccount_extraInitializers = [];
    return _a = /** @class */ (function (_super) {
            __extends(GrantDetailResponse, _super);
            function GrantDetailResponse(partial) {
                var _this = _super.call(this, partial) || this;
                _this.amountRaised = __runInitializers(_this, _amountRaised_initializers, void 0);
                _this.contributions = (__runInitializers(_this, _amountRaised_extraInitializers), __runInitializers(_this, _contributions_initializers, void 0));
                _this.team = (__runInitializers(_this, _contributions_extraInitializers), __runInitializers(_this, _team_initializers, void 0));
                _this.paymentAccount = (__runInitializers(_this, _team_extraInitializers), __runInitializers(_this, _paymentAccount_initializers, void 0));
                __runInitializers(_this, _paymentAccount_extraInitializers);
                Object.assign(_this, partial);
                return _this;
            }
            return GrantDetailResponse;
        }(_classSuper)),
        (function () {
            var _b;
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_b = _classSuper[Symbol.metadata]) !== null && _b !== void 0 ? _b : null) : void 0;
            _amountRaised_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: Number,
                })];
            _contributions_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: [contributions_interface_1.Contribution],
                    example: [
                        {
                            id: 'clg4zguz00089s5nndx5507js',
                            amount: 1,
                            denomination: 'USD',
                            amountUsd: 1,
                            grantId: 'clg3bs7400014x6s53234dnw2',
                        },
                        {
                            id: 'clg4zguz0008as5nn9b536n6r',
                            amount: 2,
                            denomination: 'USD',
                            amountUsd: 2,
                            grantId: 'clg3bs7400014x6s53234dnw2',
                        },
                    ],
                }), (0, class_transformer_1.Type)(function () { return contributions_interface_1.Contribution; })];
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
            _paymentAccount_decorators = [(0, swagger_1.ApiResponseProperty)({
                    type: payment_accounts_interface_1.PaymentAccount,
                }), (0, class_transformer_1.Type)(function () { return payment_accounts_interface_1.PaymentAccount; })];
            __esDecorate(null, null, _amountRaised_decorators, { kind: "field", name: "amountRaised", static: false, private: false, access: { has: function (obj) { return "amountRaised" in obj; }, get: function (obj) { return obj.amountRaised; }, set: function (obj, value) { obj.amountRaised = value; } }, metadata: _metadata }, _amountRaised_initializers, _amountRaised_extraInitializers);
            __esDecorate(null, null, _contributions_decorators, { kind: "field", name: "contributions", static: false, private: false, access: { has: function (obj) { return "contributions" in obj; }, get: function (obj) { return obj.contributions; }, set: function (obj, value) { obj.contributions = value; } }, metadata: _metadata }, _contributions_initializers, _contributions_extraInitializers);
            __esDecorate(null, null, _team_decorators, { kind: "field", name: "team", static: false, private: false, access: { has: function (obj) { return "team" in obj; }, get: function (obj) { return obj.team; }, set: function (obj, value) { obj.team = value; } }, metadata: _metadata }, _team_initializers, _team_extraInitializers);
            __esDecorate(null, null, _paymentAccount_decorators, { kind: "field", name: "paymentAccount", static: false, private: false, access: { has: function (obj) { return "paymentAccount" in obj; }, get: function (obj) { return obj.paymentAccount; }, set: function (obj, value) { obj.paymentAccount = value; } }, metadata: _metadata }, _paymentAccount_initializers, _paymentAccount_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.GrantDetailResponse = GrantDetailResponse;
/**
 * Helper class for grant checkout process
 */
var GrantCheckout = function () {
    var _a;
    var _id_decorators;
    var _id_initializers = [];
    var _id_extraInitializers = [];
    var _amount_decorators;
    var _amount_initializers = [];
    var _amount_extraInitializers = [];
    return _a = /** @class */ (function () {
            function GrantCheckout() {
                this.id = __runInitializers(this, _id_initializers, void 0);
                this.amount = (__runInitializers(this, _id_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
                __runInitializers(this, _amount_extraInitializers);
            }
            return GrantCheckout;
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
exports.GrantCheckout = GrantCheckout;
/**
 * DTO for checking out one or more grants
 */
var CheckoutGrantsDto = function () {
    var _a;
    var _grants_decorators;
    var _grants_initializers = [];
    var _grants_extraInitializers = [];
    var _feeAllocation_decorators;
    var _feeAllocation_initializers = [];
    var _feeAllocation_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CheckoutGrantsDto() {
                this.grants = __runInitializers(this, _grants_initializers, void 0);
                this.feeAllocation = (__runInitializers(this, _grants_extraInitializers), __runInitializers(this, _feeAllocation_initializers, void 0));
                __runInitializers(this, _feeAllocation_extraInitializers);
            }
            return CheckoutGrantsDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _grants_decorators = [(0, swagger_1.ApiProperty)({
                    type: [GrantCheckout],
                }), (0, class_validator_1.IsArray)(), (0, class_validator_1.ValidateNested)({ each: true }), (0, class_validator_1.ArrayMinSize)(1), (0, class_transformer_1.Type)(function () { return GrantCheckout; })];
            _feeAllocation_decorators = [(0, swagger_1.ApiProperty)({
                    enum: provider_interface_1.FeeAllocationMethod,
                }), (0, class_validator_1.IsEnum)(provider_interface_1.FeeAllocationMethod), (0, class_validator_1.IsOptional)()];
            __esDecorate(null, null, _grants_decorators, { kind: "field", name: "grants", static: false, private: false, access: { has: function (obj) { return "grants" in obj; }, get: function (obj) { return obj.grants; }, set: function (obj, value) { obj.grants = value; } }, metadata: _metadata }, _grants_initializers, _grants_extraInitializers);
            __esDecorate(null, null, _feeAllocation_decorators, { kind: "field", name: "feeAllocation", static: false, private: false, access: { has: function (obj) { return "feeAllocation" in obj; }, get: function (obj) { return obj.feeAllocation; }, set: function (obj, value) { obj.feeAllocation = value; } }, metadata: _metadata }, _feeAllocation_initializers, _feeAllocation_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.CheckoutGrantsDto = CheckoutGrantsDto;
// TODO: Make it agnostic to whichever payment provider
var CheckoutGrantsResponse = function () {
    var _a;
    var _url_decorators;
    var _url_initializers = [];
    var _url_extraInitializers = [];
    return _a = /** @class */ (function () {
            function CheckoutGrantsResponse() {
                this.url = __runInitializers(this, _url_initializers, void 0);
                __runInitializers(this, _url_extraInitializers);
            }
            return CheckoutGrantsResponse;
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
exports.CheckoutGrantsResponse = CheckoutGrantsResponse;
/**
 * Additional computed amount field which is used when checking out
 */
var GrantWithFunding = /** @class */ (function () {
    function GrantWithFunding() {
    }
    return GrantWithFunding;
}());
exports.GrantWithFunding = GrantWithFunding;
