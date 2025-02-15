"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
var testing_1 = require("@nestjs/testing");
var provider_controller_1 = require("./provider.controller");
var cache_manager_1 = require("@nestjs/cache-manager");
var fixtures_1 = require("../../test/fixtures");
var prisma_service_1 = require("../prisma/prisma.service");
var provider_service_1 = require("./provider.service");
describe('ProviderController', function () {
    var controller;
    var service;
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        var module;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, testing_1.Test.createTestingModule({
                        imports: [
                            cache_manager_1.CacheModule.register({
                                isGlobal: true,
                            }),
                        ],
                        providers: [
                            {
                                provide: prisma_service_1.PrismaService,
                                useValue: fixtures_1.prismaService,
                            },
                            {
                                provide: provider_service_1.ProviderService,
                                useValue: fixtures_1.providerService,
                            },
                        ],
                        controllers: [provider_controller_1.ProviderController],
                    }).compile()];
                case 1:
                    module = _a.sent();
                    controller = module.get(provider_controller_1.ProviderController);
                    service = module.get(provider_service_1.ProviderService);
                    return [2 /*return*/];
            }
        });
    }); });
    it('should be defined', function () {
        expect(controller).toBeDefined();
    });
    describe('retrieveCheckoutInfo', function () {
        it('should call the service function appropriately', function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.retrieveCheckoutInfo('sessionId')];
                    case 1:
                        _a.sent();
                        expect(service.retrieveCheckoutInfo).toHaveBeenCalledWith('sessionId');
                        return [2 /*return*/];
                }
            });
        }); });
        it('should return the correct value', function () { return __awaiter(void 0, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, controller.retrieveCheckoutInfo('sessionId')];
                    case 1:
                        result = _a.sent();
                        expect(result).toEqual(fixtures_1.checkoutInfo);
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
