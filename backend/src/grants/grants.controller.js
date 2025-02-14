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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
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
exports.GrantsController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var grants_interface_1 = require("./grants.interface");
var roles_decorator_1 = require("../auth/decorator/roles.decorator");
var client_1 = require("@prisma/client");
var nextauth_guard_1 = require("../auth/guards/nextauth.guard");
var public_decorator_1 = require("../auth/decorator/public.decorator");
var nestjs_form_data_1 = require("nestjs-form-data");
var GrantsController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('Grants'), (0, common_1.Controller)('grants'), (0, common_1.UseInterceptors)(common_1.ClassSerializerInterceptor)];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getAllGrants_decorators;
    var _createGrant_decorators;
    var _reviewGrant_decorators;
    var _getGrant_decorators;
    var _updateGrant_decorators;
    var _resubmitGrant_decorators;
    var _checkoutGrants_decorators;
    var GrantsController = _classThis = /** @class */ (function () {
        function GrantsController_1(grantsService) {
            this.grantsService = (__runInitializers(this, _instanceExtraInitializers), grantsService);
        }
        GrantsController_1.prototype.getAllGrants = function (queries) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.grantsService.getAllGrants(__assign({ isVerified: true }, queries))];
                        case 1: return [2 /*return*/, (_a.sent()).map(function (grant) { return new grants_interface_1.GrantResponse(grant); })];
                    }
                });
            });
        };
        GrantsController_1.prototype.createGrant = function (body, req) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = grants_interface_1.GrantResponseWithTeam.bind;
                            return [4 /*yield*/, this.grantsService.createGrant(body, req.user)];
                        case 1: return [2 /*return*/, new (_a.apply(grants_interface_1.GrantResponseWithTeam, [void 0, _b.sent()]))()];
                    }
                });
            });
        };
        GrantsController_1.prototype.reviewGrant = function (id, req) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = grants_interface_1.BasicGrantResponse.bind;
                            return [4 /*yield*/, this.grantsService.reviewGrant(id, req.user)];
                        case 1: return [2 /*return*/, new (_a.apply(grants_interface_1.BasicGrantResponse, [void 0, _b.sent()]))()];
                    }
                });
            });
        };
        GrantsController_1.prototype.getGrant = function (id, req) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = grants_interface_1.GrantDetailResponse.bind;
                            return [4 /*yield*/, this.grantsService.getGrant(id, req.user)];
                        case 1: return [2 /*return*/, new (_a.apply(grants_interface_1.GrantDetailResponse, [void 0, _b.sent()]))()];
                    }
                });
            });
        };
        /**
         * This route is only used when editing a verified grant
         * @param body
         * @returns
         */
        GrantsController_1.prototype.updateGrant = function (id, body, req) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = grants_interface_1.BasicGrantResponse.bind;
                            return [4 /*yield*/, this.grantsService.updateGrant(id, body, req.user)];
                        case 1: return [2 /*return*/, new (_a.apply(grants_interface_1.BasicGrantResponse, [void 0, _b.sent()]))()];
                    }
                });
            });
        };
        /**
         * This route is only used when resubmitting an unverified grant
         * @param body
         * @returns
         */
        GrantsController_1.prototype.resubmitGrant = function (id, body, req) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = grants_interface_1.BasicGrantResponse.bind;
                            return [4 /*yield*/, this.grantsService.resubmitGrant(id, body, req.user)];
                        case 1: return [2 /*return*/, new (_a.apply(grants_interface_1.BasicGrantResponse, [void 0, _b.sent()]))()];
                    }
                });
            });
        };
        GrantsController_1.prototype.checkoutGrants = function (body, req) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.grantsService.checkoutGrants(body, req.user)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return GrantsController_1;
    }());
    __setFunctionName(_classThis, "GrantsController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getAllGrants_decorators = [(0, swagger_1.ApiOperation)({
                description: 'Get all verified grants in the system',
            }), (0, swagger_1.ApiOkResponse)({
                description: 'Retrieved all verified grants',
                type: [grants_interface_1.GrantResponse],
            }), (0, common_1.Get)()];
        _createGrant_decorators = [(0, swagger_1.ApiOperation)({
                description: 'Create a grant',
            }), (0, swagger_1.ApiCreatedResponse)({
                description: 'Created a grant with the submitted data',
                type: grants_interface_1.GrantResponseWithTeam,
            }), (0, common_1.Post)(), (0, common_1.UseGuards)(nextauth_guard_1.NextAuthGuard), (0, nestjs_form_data_1.FormDataRequest)()];
        _reviewGrant_decorators = [(0, swagger_1.ApiOperation)({
                description: 'Verify a grant',
            }), (0, swagger_1.ApiCreatedResponse)({
                description: 'Grant verified state is set to `true`',
                type: grants_interface_1.BasicGrantResponse,
            }), (0, swagger_1.ApiUnauthorizedResponse)({
                description: 'User is not an admin',
            }), (0, common_1.Post)('verify/:id'), (0, roles_decorator_1.Roles)(client_1.Role.Admin), (0, common_1.UseGuards)(nextauth_guard_1.NextAuthGuard)];
        _getGrant_decorators = [(0, swagger_1.ApiOperation)({
                description: 'Get a specific grant by ID',
            }), (0, swagger_1.ApiOkResponse)({
                description: 'Full details about the grant including team & contributions',
                type: grants_interface_1.GrantDetailResponse,
            }), (0, swagger_1.ApiForbiddenResponse)({
                description: 'User is not an admin or team member',
            }), (0, swagger_1.ApiNotFoundResponse)({
                description: 'Grant with given ID cannot be found',
            }), (0, common_1.Get)(':id'), (0, public_decorator_1.Public)(), (0, common_1.UseGuards)(nextauth_guard_1.NextAuthGuard)];
        _updateGrant_decorators = [(0, swagger_1.ApiOperation)({
                description: "Update a grant by ID. Only works if you're a team member of the grant",
            }), (0, swagger_1.ApiCreatedResponse)({
                description: 'Updated grant information',
                type: grants_interface_1.BasicGrantResponse,
            }), (0, swagger_1.ApiForbiddenResponse)({
                description: 'User is a team member of this grant',
            }), (0, swagger_1.ApiNotFoundResponse)({
                description: 'Grant with given ID cannot be found',
            }), (0, common_1.Patch)(':id'), (0, nestjs_form_data_1.FormDataRequest)(), (0, common_1.UseGuards)(nextauth_guard_1.NextAuthGuard)];
        _resubmitGrant_decorators = [(0, swagger_1.ApiOperation)({
                description: "Resubmit a grant by ID. Only works if you're a team member of the grant & the grant is unverified",
            }), (0, swagger_1.ApiCreatedResponse)({
                description: 'Updated grant information',
                type: grants_interface_1.BasicGrantResponse,
            }), (0, swagger_1.ApiForbiddenResponse)({
                description: 'User is a team member of this grant',
            }), (0, swagger_1.ApiUnprocessableEntityResponse)({
                description: 'Grant with given ID cannot be found or grant is already verified',
            }), (0, common_1.Put)(':id'), (0, nestjs_form_data_1.FormDataRequest)(), (0, common_1.UseGuards)(nextauth_guard_1.NextAuthGuard)];
        _checkoutGrants_decorators = [(0, swagger_1.ApiOperation)({
                description: 'Checkout selected grants',
            }), (0, swagger_1.ApiCreatedResponse)({
                description: 'Checkout link/information from the payment provider',
                type: grants_interface_1.CheckoutGrantsResponse,
            }), (0, swagger_1.ApiNotFoundResponse)({
                description: 'All grants to checkout cannot be found',
            }), (0, swagger_1.ApiUnprocessableEntityResponse)({
                description: 'This error is thrown if you attempt to checkout a grant that you own',
            }), (0, common_1.Post)('checkout'), (0, common_1.UseGuards)(nextauth_guard_1.NextAuthGuard)];
        __esDecorate(_classThis, null, _getAllGrants_decorators, { kind: "method", name: "getAllGrants", static: false, private: false, access: { has: function (obj) { return "getAllGrants" in obj; }, get: function (obj) { return obj.getAllGrants; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _createGrant_decorators, { kind: "method", name: "createGrant", static: false, private: false, access: { has: function (obj) { return "createGrant" in obj; }, get: function (obj) { return obj.createGrant; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _reviewGrant_decorators, { kind: "method", name: "reviewGrant", static: false, private: false, access: { has: function (obj) { return "reviewGrant" in obj; }, get: function (obj) { return obj.reviewGrant; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getGrant_decorators, { kind: "method", name: "getGrant", static: false, private: false, access: { has: function (obj) { return "getGrant" in obj; }, get: function (obj) { return obj.getGrant; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateGrant_decorators, { kind: "method", name: "updateGrant", static: false, private: false, access: { has: function (obj) { return "updateGrant" in obj; }, get: function (obj) { return obj.updateGrant; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _resubmitGrant_decorators, { kind: "method", name: "resubmitGrant", static: false, private: false, access: { has: function (obj) { return "resubmitGrant" in obj; }, get: function (obj) { return obj.resubmitGrant; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _checkoutGrants_decorators, { kind: "method", name: "checkoutGrants", static: false, private: false, access: { has: function (obj) { return "checkoutGrants" in obj; }, get: function (obj) { return obj.checkoutGrants; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        GrantsController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return GrantsController = _classThis;
}();
exports.GrantsController = GrantsController;
