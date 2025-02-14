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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoolService = void 0;
var common_1 = require("@nestjs/common");
var client_1 = require("@prisma/client");
var pool_interface_1 = require("./pool.interface");
var provider_interface_1 = require("../provider/provider.interface");
var canvas_1 = require("canvas");
var cuid = require("cuid");
var PoolService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PoolService = _classThis = /** @class */ (function () {
        function PoolService_1(prisma, providerService, awsService) {
            this.prisma = prisma;
            this.providerService = providerService;
            this.awsService = awsService;
        }
        /**
         * Throws error if not a member, otherwise returns true
         * @param pool
         * @param user
         * @returns `true` if is a team member
         */
        PoolService_1.prototype.checkPoolOwnership = function (pool, user) {
            if (!pool.funders.some(function (member) { return member.user.id === user.id; }))
                throw new common_1.HttpException('No edit rights', common_1.HttpStatus.FORBIDDEN);
            return true;
        };
        /**
         * Converts a basic sorting string to something Prisma can understand
         * @param sort Sorting option
         * @returns Prisma orderBy query object
         */
        PoolService_1.prototype.parseSorting = function (sort) {
            switch (sort) {
                case pool_interface_1.PoolSortOptions.NEWEST:
                    return {
                        createdAt: 'desc',
                    };
                case pool_interface_1.PoolSortOptions.OLDEST:
                    return {
                        createdAt: 'asc',
                    };
                // case PoolSortOptions.MOST_FUNDED: // Currently quite difficult with prisma
                //   return {
                //     createdAt: 'desc',
                //   };
                case pool_interface_1.PoolSortOptions.MOST_BACKED:
                    return {
                        contributions: {
                            _count: 'desc',
                        },
                    };
            }
        };
        /**
         * Converts a basic filtering string to something Prisma can understand
         * @param filter Filtering option
         * @returns Prisma orderBy query object
         */
        PoolService_1.prototype.parseFiltering = function (filter) {
            switch (filter) {
                case pool_interface_1.PoolFilterOptions.ENDED:
                    return {
                        endDate: {
                            lte: new Date(),
                        },
                    };
                case pool_interface_1.PoolFilterOptions.NOT_ENDED:
                    return {
                        endDate: {
                            gt: new Date(),
                        },
                    };
            }
        };
        /**
         * To retrieve all pools from public route
         * @param data
         * @returns
         */
        PoolService_1.prototype.getAllPools = function (data) {
            return __awaiter(this, void 0, void 0, function () {
                var isVerified, sort, filter, search, pools;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            isVerified = data.isVerified, sort = data.sort, filter = data.filter, search = data.search;
                            return [4 /*yield*/, this.prisma.matchingRound.findMany({
                                    where: __assign({ verified: isVerified, name: {
                                            contains: search,
                                            mode: 'insensitive',
                                        } }, this.parseFiltering(filter)),
                                    include: {
                                        contributions: true,
                                    },
                                    orderBy: this.parseSorting(sort),
                                })];
                        case 1:
                            pools = _a.sent();
                            // Due to Prisma limitations, this is a workaround
                            if (sort === pool_interface_1.PoolSortOptions.MOST_FUNDED) {
                                pools = pools.sort(function (a, b) {
                                    var aTotal = a.contributions.reduce(function (acc, contribution) { return acc + contribution.amountUsd; }, 0);
                                    var bTotal = b.contributions.reduce(function (acc, contribution) { return acc + contribution.amountUsd; }, 0);
                                    // Sort in descending order
                                    return bTotal - aTotal;
                                });
                            }
                            return [2 /*return*/, pools.map(function (pool) {
                                    return __assign(__assign({}, pool), { amountRaised: pool.contributions.reduce(function (acc, contribution) { return acc + contribution.amountUsd; }, 0) });
                                })];
                    }
                });
            });
        };
        /**
         * For internal use.
         * @note Also retrieves unverified pools
         * @param id ID of the pool to retrieve
         * @returns
         */
        PoolService_1.prototype.getPoolById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.matchingRound.findUnique({
                                where: {
                                    id: id,
                                },
                                include: {
                                    contributions: true,
                                    funders: {
                                        include: {
                                            user: true,
                                        },
                                    },
                                    grants: {
                                        include: {
                                            contributions: true,
                                            team: true,
                                        },
                                    },
                                },
                            })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Retrieve a pool by ID
         * @param id
         * @param user Used to check if the caller is the owner in the event
         * that the pool is still unverified to prevent leaking private info
         * @returns
         */
        PoolService_1.prototype.getPool = function (id, user) {
            return __awaiter(this, void 0, void 0, function () {
                var pool, uniqueUserIds, _i, _a, contribution;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.getPoolById(id)];
                        case 1:
                            pool = _b.sent();
                            if (!pool)
                                throw new common_1.HttpException('Pool not found', common_1.HttpStatus.NOT_FOUND);
                            /**
                             * If a pool is not verified, we need to do a few checks:
                             * 1. Only admins can view unverified pools
                             * 2. Only the pool owner can view their own unverified pool
                             */
                            user; // Do nothing with user for now
                            uniqueUserIds = new Set();
                            for (_i = 0, _a = pool.contributions; _i < _a.length; _i++) {
                                contribution = _a[_i];
                                uniqueUserIds.add(contribution.userId);
                            }
                            return [2 /*return*/, __assign(__assign({}, pool), { grants: pool.grants.map(function (pool) {
                                        return __assign(__assign({}, pool), { amountRaised: pool.contributions.reduce(function (acc, contribution) { return acc + contribution.amountUsd; }, 0) });
                                    }), team: pool.funders.map(function (funder) { return funder.user; }), contributors: uniqueUserIds.size, amountRaised: pool.contributions.reduce(function (acc, contribution) { return acc + contribution.amountUsd; }, 0) })];
                    }
                });
            });
        };
        /**
         * Draws an image with the appropriate dimensions like `object-fit: cover` in CSS
         * @param ctx
         * @param img
         * @param x
         * @param y
         * @param width
         * @param height
         */
        PoolService_1.prototype.drawImg = function (ctx, img, x, y, width, height) {
            var aspectRatio = img.width / img.height;
            var targetAspectRatio = width / height;
            var targetWidth = width;
            var targetHeight = height;
            var offsetX = 0;
            var offsetY = 0;
            // calculate scaling factor based on larger dimension of image and target area
            var scale = aspectRatio > targetAspectRatio ? height / img.height : width / img.width;
            // calculate target width and height based on scaling factor
            targetWidth = width / scale;
            targetHeight = height / scale;
            // calculate offsets to center image in target area
            offsetX = Math.max(0, (img.width - targetWidth) / 2);
            offsetY = Math.max(0, (img.height - targetHeight) / 2);
            // draw image with modified dimensions and centered in target area
            ctx.drawImage(img, offsetX, offsetY, targetWidth, targetHeight, x, y, width, height);
        };
        /**
         * Generates a collage based on the grant images
         *
         * @param grantImages Array of image URLs
         * @returns
         */
        PoolService_1.prototype.generateCollage = function (grantImages) {
            return __awaiter(this, void 0, void 0, function () {
                var canvas, ctx, images, image, _a, _b, e_1_1;
                var _c, grantImages_1, grantImages_1_1;
                var _d, e_1, _e, _f;
                return __generator(this, function (_g) {
                    switch (_g.label) {
                        case 0:
                            canvas = (0, canvas_1.createCanvas)(350, 210);
                            ctx = canvas.getContext('2d');
                            images = [];
                            _g.label = 1;
                        case 1:
                            _g.trys.push([1, 7, 8, 13]);
                            _c = true, grantImages_1 = __asyncValues(grantImages);
                            _g.label = 2;
                        case 2: return [4 /*yield*/, grantImages_1.next()];
                        case 3:
                            if (!(grantImages_1_1 = _g.sent(), _d = grantImages_1_1.done, !_d)) return [3 /*break*/, 6];
                            _f = grantImages_1_1.value;
                            _c = false;
                            image = _f;
                            _b = (_a = images).push;
                            return [4 /*yield*/, (0, canvas_1.loadImage)(image)];
                        case 4:
                            _b.apply(_a, [_g.sent()]);
                            _g.label = 5;
                        case 5:
                            _c = true;
                            return [3 /*break*/, 2];
                        case 6: return [3 /*break*/, 13];
                        case 7:
                            e_1_1 = _g.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 13];
                        case 8:
                            _g.trys.push([8, , 11, 12]);
                            if (!(!_c && !_d && (_e = grantImages_1.return))) return [3 /*break*/, 10];
                            return [4 /*yield*/, _e.call(grantImages_1)];
                        case 9:
                            _g.sent();
                            _g.label = 10;
                        case 10: return [3 /*break*/, 12];
                        case 11:
                            if (e_1) throw e_1.error;
                            return [7 /*endfinally*/];
                        case 12: return [7 /*endfinally*/];
                        case 13:
                            switch (grantImages.length) {
                                case 1:
                                    this.drawImg(ctx, images[0], 0, 0, canvas.width, canvas.height);
                                    break;
                                case 2:
                                    this.drawImg(ctx, images[0], 0, 0, canvas.width / 2, canvas.height);
                                    this.drawImg(ctx, images[1], canvas.width / 2, 0, canvas.width / 2, canvas.height);
                                    break;
                                case 3:
                                    this.drawImg(ctx, images[0], 0, 0, canvas.width / 2, canvas.height);
                                    this.drawImg(ctx, images[1], canvas.width / 2, 0, canvas.width / 2, canvas.height / 2);
                                    this.drawImg(ctx, images[2], canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2);
                                    break;
                                case 4:
                                    this.drawImg(ctx, images[0], 0, 0, canvas.width / 2, canvas.height / 2);
                                    this.drawImg(ctx, images[1], canvas.width / 2, 0, canvas.width / 2, canvas.height / 2);
                                    this.drawImg(ctx, images[2], 0, canvas.height / 2, canvas.width / 2, canvas.height / 2);
                                    this.drawImg(ctx, images[3], canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2);
                                    break;
                                default:
                                    throw new Error('Unsupported number of grants.');
                            }
                            return [2 /*return*/, canvas.toBuffer()];
                    }
                });
            });
        };
        /**
         * Creates a pool with the provided data
         * @param data
         * @param user The owner to tie this pool to
         * @returns
         */
        PoolService_1.prototype.createPool = function (data, user) {
            return __awaiter(this, void 0, void 0, function () {
                var ecosystemBuilder, id, grants, grantImages, image, imageBuffer, pool;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.prisma.ecosystemBuilder.findUnique({
                                where: {
                                    userId: user.id,
                                },
                            })];
                        case 1:
                            ecosystemBuilder = _a.sent();
                            if (!ecosystemBuilder) {
                                throw new common_1.HttpException('User is not an ecosystem builder', common_1.HttpStatus.UNAUTHORIZED);
                            }
                            id = cuid();
                            return [4 /*yield*/, this.prisma.grant.findMany({
                                    where: {
                                        id: {
                                            in: data.grants,
                                        },
                                    },
                                })];
                        case 2:
                            grants = _a.sent();
                            grantImages = grants.map(function (grant) { return grant.image; }).slice(0, 4);
                            image = undefined;
                            if (!(grantImages.length > 0)) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.generateCollage(grantImages)];
                        case 3:
                            imageBuffer = _a.sent();
                            return [4 /*yield*/, this.awsService.uploadBuffer(imageBuffer, id)];
                        case 4:
                            image = _a.sent();
                            _a.label = 5;
                        case 5: return [4 /*yield*/, this.prisma.matchingRound.create({
                                data: __assign(__assign({}, data), { id: id, image: image, funders: {
                                        connect: [
                                            {
                                                id: ecosystemBuilder.id,
                                            },
                                        ],
                                    }, grants: {
                                        connect: data.grants.map(function (grantId) {
                                            return {
                                                id: grantId,
                                            };
                                        }),
                                    } }),
                            })];
                        case 6:
                            pool = _a.sent();
                            return [2 /*return*/, __assign(__assign({}, pool), { amountRaised: 0, contributions: [] })];
                    }
                });
            });
        };
        /**
         * Only an admin can execute this function
         * The Admin role check should already be done by the guard,
         * but adding another check here in case the guard was bypassed
         * @param id
         * @param user
         * @returns
         */
        PoolService_1.prototype.reviewPool = function (id, user) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // First we validate if the user is an admin
                            if (user.role !== client_1.Role.Admin)
                                throw new common_1.HttpException('Unauthorized Access', common_1.HttpStatus.UNAUTHORIZED);
                            return [4 /*yield*/, this.prisma.matchingRound.update({
                                    data: {
                                        verified: true,
                                    },
                                    where: {
                                        id: id,
                                    },
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Updates a pool
         * @param id
         * @param data
         * @param user Checks if caller is a team member that can edit this pool
         * @returns
         */
        PoolService_1.prototype.updatePool = function (id, data, user) {
            return __awaiter(this, void 0, void 0, function () {
                var pool, toRemove;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getPoolById(id)];
                        case 1:
                            pool = _a.sent();
                            if (!pool)
                                throw new common_1.HttpException('Pool not found', common_1.HttpStatus.NOT_FOUND);
                            // Check if pool owner is calling this function
                            this.checkPoolOwnership(pool, user);
                            toRemove = pool.grants.filter(function (grant) { return !data.grants.includes(grant.id); });
                            return [4 /*yield*/, this.prisma.matchingRound.update({
                                    data: __assign(__assign({}, data), { grants: {
                                            connect: data.grants.map(function (grantId) {
                                                return {
                                                    id: grantId,
                                                };
                                            }),
                                            disconnect: toRemove.map(function (grant) {
                                                return {
                                                    id: grant.id,
                                                };
                                            }),
                                        } }),
                                    where: {
                                        id: id,
                                    },
                                })];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Retrieve the pools that the user wants to checkout
         * @param pools The pools to checkout
         * @param user User making the purchase
         */
        PoolService_1.prototype.checkoutPools = function (body, user) {
            return __awaiter(this, void 0, void 0, function () {
                var pools, feeAllocation, ids, data, amountLookup, poolWithFunding;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            pools = body.pools, feeAllocation = body.feeAllocation;
                            ids = pools.map(function (pool) { return pool.id; });
                            return [4 /*yield*/, this.prisma.matchingRound.findMany({
                                    where: {
                                        id: {
                                            in: ids,
                                        },
                                        endDate: {
                                            gt: new Date(),
                                        },
                                    },
                                })];
                        case 1:
                            data = _a.sent();
                            /**
                             * We also need to check if the pools have not ended.
                             * What we can do is that we filter the ended pools & don't throw an error (for now)
                             * Then, check if there are even any pools to checkout.
                             * If no pools to checkout, throw error
                             */
                            if (data.length < 0)
                                throw new common_1.HttpException('Pools not found', common_1.HttpStatus.NOT_FOUND);
                            amountLookup = pools.reduce(function (acc, pool) {
                                acc[pool.id] = pool.amount;
                                return acc;
                            }, {});
                            poolWithFunding = data.map(function (pool) {
                                return __assign(__assign({}, pool), { amount: amountLookup[pool.id] || 0 });
                            });
                            return [4 /*yield*/, this.providerService.createPaymentSession(poolWithFunding, feeAllocation || provider_interface_1.FeeAllocationMethod.PASS_TO_ENTITY, // By default, we will pass the fees to pools
                                user, provider_interface_1.CheckoutType.POOL)];
                        case 2: 
                        // Pass to the payment provider to create a payment session
                        return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return PoolService_1;
    }());
    __setFunctionName(_classThis, "PoolService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PoolService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PoolService = _classThis;
}();
exports.PoolService = PoolService;
