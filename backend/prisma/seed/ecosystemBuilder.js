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
exports.seedEcosystemBuilder = void 0;
var chalk = require("chalk");
var falso_1 = require("@ngneat/falso");
var cuidgenerator = require("cuid");
var seedEcosystemBuilder = function (seed) { return __awaiter(void 0, void 0, void 0, function () {
    var prisma, cuid, users, grants, paymentMethod, ecosystemBuilderId, ecosystemBuilder, matchingRoundId, matchingRound, grantId, grantA, grantB, grantC, grantD, meticulousMatchingRoundId, meticulousMatchingRound;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                prisma = seed.prisma, cuid = seed.cuid, users = seed.users, grants = seed.grants, paymentMethod = seed.paymentMethod;
                console.log(chalk.blue('\nSeeding EcosystemBuilder...'));
                ecosystemBuilderId = cuid.get();
                return [4 /*yield*/, prisma.ecosystemBuilder.upsert({
                        where: {
                            id: ecosystemBuilderId,
                        },
                        update: {},
                        create: {
                            id: ecosystemBuilderId,
                            user: {
                                connect: {
                                    id: users[Math.floor(Math.random() * users.length)].id,
                                },
                            },
                            inviteCode: {
                                create: {
                                    code: cuidgenerator(),
                                    claimed: true,
                                },
                            },
                        },
                    })];
            case 1:
                ecosystemBuilder = _a.sent();
                console.log(chalk.green('\n[ OK ]  EcosystemBuilder seeded!'));
                console.log(chalk.blue('\nSeeding MatchingRound...'));
                matchingRoundId = cuid.get();
                return [4 /*yield*/, prisma.matchingRound.upsert({
                        where: { id: matchingRoundId },
                        update: {},
                        create: {
                            id: matchingRoundId,
                            name: 'First Matching Round',
                            contributions: {
                                createMany: {
                                    data: Array.from(Array(10).keys()).map(function (_) {
                                        var amount = (0, falso_1.randNumber)({ min: 5000, max: 10000 });
                                        return {
                                            userId: users[Math.floor(Math.random() * users.length)].id,
                                            amount: amount,
                                            denomination: 'USD',
                                            amountUsd: amount,
                                            paymentMethodId: paymentMethod.id,
                                            flagged: false,
                                        };
                                    }),
                                },
                            },
                            grants: {
                                connect: [
                                    {
                                        id: grants[0].id,
                                    },
                                    {
                                        id: grants[1].id,
                                    },
                                ],
                            },
                            verified: true,
                            startDate: new Date(),
                            endDate: new Date(new Date().getTime() + 2592000000),
                        },
                    })];
            case 2:
                matchingRound = _a.sent();
                grantId = cuid.get();
                return [4 /*yield*/, prisma.grant.upsert({
                        where: { id: grantId },
                        update: {},
                        create: {
                            id: grantId,
                            name: (0, falso_1.randCatchPhrase)(),
                            description: (0, falso_1.randParagraph)({ length: 3 }).join(' '),
                            image: "https://picsum.photos/seed/".concat(grantId, "/1000/600.jpg"),
                            twitter: (0, falso_1.randUserName)(),
                            website: (0, falso_1.randUrl)(),
                            location: (0, falso_1.randCountry)(),
                            paymentAccount: {
                                connectOrCreate: {
                                    create: {
                                        recipientAddress: 'acct_1MWsgbKMcPvbzDpI',
                                        provider: {
                                            connect: {
                                                id: seed.paymentProvider.id,
                                            },
                                        },
                                    },
                                    where: {
                                        recipientAddress_providerId: {
                                            recipientAddress: 'acct_1MWsgbKMcPvbzDpI',
                                            providerId: seed.paymentProvider.id,
                                        },
                                    },
                                },
                            },
                            team: {
                                connect: {
                                    id: seed.users[0].id,
                                },
                            },
                            contributions: {
                                createMany: {
                                    data: Array.from(Array(10).keys()).map(function (_) {
                                        var amount = 1;
                                        return {
                                            userId: users[Math.floor(Math.random() * users.length)].id,
                                            amount: amount,
                                            denomination: 'USD',
                                            amountUsd: amount,
                                            paymentMethodId: seed.paymentMethod.id,
                                            flagged: false,
                                        };
                                    }),
                                },
                            },
                            fundingGoal: (0, falso_1.randNumber)({ min: 1000, max: 50000 }),
                            verified: true,
                        },
                    })];
            case 3:
                grantA = _a.sent();
                grantId = cuid.get();
                return [4 /*yield*/, prisma.grant.upsert({
                        where: { id: grantId },
                        update: {},
                        create: {
                            id: grantId,
                            name: (0, falso_1.randCatchPhrase)(),
                            description: (0, falso_1.randParagraph)({ length: 3 }).join(' '),
                            image: "https://picsum.photos/seed/".concat(grantId, "/1000/600.jpg"),
                            twitter: (0, falso_1.randUserName)(),
                            website: (0, falso_1.randUrl)(),
                            location: (0, falso_1.randCountry)(),
                            paymentAccount: {
                                connectOrCreate: {
                                    create: {
                                        recipientAddress: 'acct_1MWsgbKMcPvbzDpI',
                                        provider: {
                                            connect: {
                                                id: seed.paymentProvider.id,
                                            },
                                        },
                                    },
                                    where: {
                                        recipientAddress_providerId: {
                                            recipientAddress: 'acct_1MWsgbKMcPvbzDpI',
                                            providerId: seed.paymentProvider.id,
                                        },
                                    },
                                },
                            },
                            team: {
                                connect: {
                                    id: seed.users[0].id,
                                },
                            },
                            contributions: {
                                createMany: {
                                    data: Array.from(Array(3).keys()).map(function (_, index) {
                                        var amount = 1 + index;
                                        return {
                                            userId: users[Math.floor(Math.random() * users.length)].id,
                                            amount: amount,
                                            denomination: 'USD',
                                            amountUsd: amount,
                                            paymentMethodId: seed.paymentMethod.id,
                                            flagged: false,
                                        };
                                    }),
                                },
                            },
                            fundingGoal: (0, falso_1.randNumber)({ min: 1000, max: 50000 }),
                            verified: true,
                        },
                    })];
            case 4:
                grantB = _a.sent();
                grantId = cuid.get();
                return [4 /*yield*/, prisma.grant.upsert({
                        where: { id: grantId },
                        update: {},
                        create: {
                            id: grantId,
                            name: (0, falso_1.randCatchPhrase)(),
                            description: (0, falso_1.randParagraph)({ length: 3 }).join(' '),
                            image: "https://picsum.photos/seed/".concat(grantId, "/1000/600.jpg"),
                            twitter: (0, falso_1.randUserName)(),
                            website: (0, falso_1.randUrl)(),
                            location: (0, falso_1.randCountry)(),
                            paymentAccount: {
                                connectOrCreate: {
                                    create: {
                                        recipientAddress: 'acct_1MWsgbKMcPvbzDpI',
                                        provider: {
                                            connect: {
                                                id: seed.paymentProvider.id,
                                            },
                                        },
                                    },
                                    where: {
                                        recipientAddress_providerId: {
                                            recipientAddress: 'acct_1MWsgbKMcPvbzDpI',
                                            providerId: seed.paymentProvider.id,
                                        },
                                    },
                                },
                            },
                            team: {
                                connect: {
                                    id: seed.users[0].id,
                                },
                            },
                            contributions: {
                                createMany: {
                                    data: Array.from(Array(1).keys()).map(function (_) {
                                        var amount = 10;
                                        return {
                                            userId: users[Math.floor(Math.random() * users.length)].id,
                                            amount: amount,
                                            denomination: 'USD',
                                            amountUsd: amount,
                                            paymentMethodId: seed.paymentMethod.id,
                                            flagged: false,
                                        };
                                    }),
                                },
                            },
                            fundingGoal: (0, falso_1.randNumber)({ min: 1000, max: 50000 }),
                            verified: true,
                        },
                    })];
            case 5:
                grantC = _a.sent();
                grantId = cuid.get();
                return [4 /*yield*/, prisma.grant.upsert({
                        where: { id: grantId },
                        update: {},
                        create: {
                            id: grantId,
                            name: (0, falso_1.randCatchPhrase)(),
                            description: (0, falso_1.randParagraph)({ length: 3 }).join(' '),
                            image: "https://picsum.photos/seed/".concat(grantId, "/1000/600.jpg"),
                            twitter: (0, falso_1.randUserName)(),
                            website: (0, falso_1.randUrl)(),
                            location: (0, falso_1.randCountry)(),
                            paymentAccount: {
                                connectOrCreate: {
                                    create: {
                                        recipientAddress: 'acct_1MWsgbKMcPvbzDpI',
                                        provider: {
                                            connect: {
                                                id: seed.paymentProvider.id,
                                            },
                                        },
                                    },
                                    where: {
                                        recipientAddress_providerId: {
                                            recipientAddress: 'acct_1MWsgbKMcPvbzDpI',
                                            providerId: seed.paymentProvider.id,
                                        },
                                    },
                                },
                            },
                            team: {
                                connect: {
                                    id: seed.users[0].id,
                                },
                            },
                            contributions: {
                                createMany: {
                                    data: Array.from(Array(2).keys()).map(function (_) {
                                        var amount = 5;
                                        return {
                                            userId: users[Math.floor(Math.random() * users.length)].id,
                                            amount: amount,
                                            denomination: 'USD',
                                            amountUsd: amount,
                                            paymentMethodId: seed.paymentMethod.id,
                                            flagged: false,
                                        };
                                    }),
                                },
                            },
                            fundingGoal: (0, falso_1.randNumber)({ min: 1000, max: 50000 }),
                            verified: true,
                        },
                    })];
            case 6:
                grantD = _a.sent();
                meticulousMatchingRoundId = cuid.get();
                return [4 /*yield*/, prisma.matchingRound.upsert({
                        where: { id: meticulousMatchingRoundId },
                        update: {},
                        create: {
                            id: meticulousMatchingRoundId,
                            name: 'Meticulous Matching Round',
                            contributions: {
                                createMany: {
                                    data: [
                                        {
                                            userId: users[Math.floor(Math.random() * users.length)].id,
                                            amount: 100,
                                            denomination: 'USD',
                                            amountUsd: 100,
                                            paymentMethodId: paymentMethod.id,
                                            flagged: false,
                                        },
                                        {
                                            userId: users[Math.floor(Math.random() * users.length)].id,
                                            amount: 200,
                                            denomination: 'USD',
                                            amountUsd: 200,
                                            paymentMethodId: paymentMethod.id,
                                            flagged: false,
                                        },
                                        {
                                            userId: users[Math.floor(Math.random() * users.length)].id,
                                            amount: 300,
                                            denomination: 'USD',
                                            amountUsd: 300,
                                            paymentMethodId: paymentMethod.id,
                                            flagged: false,
                                        },
                                        {
                                            userId: users[Math.floor(Math.random() * users.length)].id,
                                            amount: 50,
                                            denomination: 'USD',
                                            amountUsd: 50,
                                            paymentMethodId: paymentMethod.id,
                                            flagged: false,
                                        },
                                        {
                                            userId: users[Math.floor(Math.random() * users.length)].id,
                                            amount: 150,
                                            denomination: 'USD',
                                            amountUsd: 150,
                                            paymentMethodId: paymentMethod.id,
                                            flagged: false,
                                        },
                                        {
                                            userId: users[Math.floor(Math.random() * users.length)].id,
                                            amount: 200,
                                            denomination: 'USD',
                                            amountUsd: 200,
                                            paymentMethodId: paymentMethod.id,
                                            flagged: false,
                                        },
                                    ],
                                },
                            },
                            grants: {
                                connect: [
                                    {
                                        id: grantA.id,
                                    },
                                    {
                                        id: grantB.id,
                                    },
                                    {
                                        id: grantC.id,
                                    },
                                    {
                                        id: grantD.id,
                                    },
                                ],
                            },
                            verified: true,
                            startDate: new Date(),
                            endDate: new Date(new Date().getTime() + 2592000000),
                        },
                    })];
            case 7:
                meticulousMatchingRound = _a.sent();
                console.log({ meticulousMatchingRound: meticulousMatchingRound });
                console.log(chalk.green('\n[ OK ]  MatchingRound seeded!'));
                return [2 /*return*/];
        }
    });
}); };
exports.seedEcosystemBuilder = seedEcosystemBuilder;
