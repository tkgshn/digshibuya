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
exports.seedGrants = void 0;
var falso_1 = require("@ngneat/falso");
var chalk = require("chalk");
var seedGrants = function (seed) { return __awaiter(void 0, void 0, void 0, function () {
    var prisma, cuid, users, NUMBER_OF_GRANTS, emptyGrantId, emptyGrant, contributedGrantId, contributedGrant, fundedGrantId, fundedGrant, fundedGrant2Id, fundedGrant2, unverifiedGrantId, unverifiedGrant, i, grantId, grant;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                prisma = seed.prisma, cuid = seed.cuid, users = seed.users;
                NUMBER_OF_GRANTS = 10;
                console.log(chalk.blue('\nSeeding Grants...'));
                emptyGrantId = cuid.get();
                return [4 /*yield*/, prisma.grant.upsert({
                        where: { id: emptyGrantId },
                        update: {},
                        create: {
                            id: emptyGrantId,
                            name: (0, falso_1.randCatchPhrase)(),
                            description: (0, falso_1.randParagraph)({ length: 3 }).join(' '),
                            image: "https://picsum.photos/seed/".concat(emptyGrantId, "/1000/600.jpg"),
                            twitter: (0, falso_1.randUserName)(),
                            website: (0, falso_1.randUrl)(),
                            location: (0, falso_1.randCountry)(),
                            paymentAccount: {
                                connectOrCreate: {
                                    create: {
                                        recipientAddress: 'acct_1MYrcZPueme0IGVy',
                                        provider: {
                                            connect: {
                                                id: seed.paymentProvider.id,
                                            },
                                        },
                                    },
                                    where: {
                                        recipientAddress_providerId: {
                                            recipientAddress: 'acct_1MYrcZPueme0IGVy',
                                            providerId: seed.paymentProvider.id,
                                        },
                                    },
                                },
                            },
                            team: {
                                connect: {
                                    id: seed.admin.id,
                                },
                            },
                            fundingGoal: (0, falso_1.randNumber)({ min: 1000, max: 50000 }),
                            verified: true,
                        },
                    })];
            case 1:
                emptyGrant = _a.sent();
                contributedGrantId = cuid.get();
                return [4 /*yield*/, prisma.grant.upsert({
                        where: { id: contributedGrantId },
                        update: {},
                        create: {
                            id: contributedGrantId,
                            name: (0, falso_1.randCatchPhrase)(),
                            description: (0, falso_1.randParagraph)({ length: 3 }).join(' '),
                            image: "https://picsum.photos/seed/".concat(contributedGrantId, "/1000/600.jpg"),
                            twitter: (0, falso_1.randUserName)(),
                            website: (0, falso_1.randUrl)(),
                            location: (0, falso_1.randCountry)(),
                            paymentAccount: {
                                connectOrCreate: {
                                    create: {
                                        recipientAddress: 'acct_1MdDqePwtixIFqie',
                                        provider: {
                                            connect: {
                                                id: seed.paymentProvider.id,
                                            },
                                        },
                                    },
                                    where: {
                                        recipientAddress_providerId: {
                                            recipientAddress: 'acct_1MdDqePwtixIFqie',
                                            providerId: seed.paymentProvider.id,
                                        },
                                    },
                                },
                            },
                            team: {
                                connect: [
                                    {
                                        id: seed.users[0].id,
                                    },
                                    {
                                        id: seed.admin.id,
                                    },
                                ],
                            },
                            contributions: {
                                createMany: {
                                    data: [
                                        {
                                            userId: seed.users[0].id,
                                            amount: 3500,
                                            denomination: 'USD',
                                            amountUsd: 3500,
                                            paymentMethodId: seed.paymentMethod.id,
                                            flagged: false,
                                        },
                                    ],
                                },
                            },
                            fundingGoal: (0, falso_1.randNumber)({ min: 1000, max: 50000 }),
                            verified: true,
                        },
                    })];
            case 2:
                contributedGrant = _a.sent();
                fundedGrantId = cuid.get();
                return [4 /*yield*/, prisma.grant.upsert({
                        where: { id: fundedGrantId },
                        update: {},
                        create: {
                            id: fundedGrantId,
                            name: (0, falso_1.randCatchPhrase)(),
                            description: (0, falso_1.randParagraph)({ length: 2 }).join(' '),
                            image: "https://picsum.photos/seed/".concat(fundedGrantId, "/1000/600.jpg"),
                            twitter: (0, falso_1.randUserName)(),
                            website: (0, falso_1.randUrl)(),
                            location: (0, falso_1.randCountry)(),
                            paymentAccount: {
                                connectOrCreate: {
                                    create: {
                                        recipientAddress: 'acct_1Mycv9Q7g93UqeuK',
                                        provider: {
                                            connect: {
                                                id: seed.paymentProvider.id,
                                            },
                                        },
                                    },
                                    where: {
                                        recipientAddress_providerId: {
                                            recipientAddress: 'acct_1Mycv9Q7g93UqeuK',
                                            providerId: seed.paymentProvider.id,
                                        },
                                    },
                                },
                            },
                            team: {
                                connect: [
                                    {
                                        id: seed.users[0].id,
                                    },
                                    {
                                        id: seed.admin.id,
                                    },
                                ],
                            },
                            contributions: {
                                createMany: {
                                    data: Array.from(Array(10).keys()).map(function (_) {
                                        var amount = (0, falso_1.randNumber)({ min: 5000, max: 10000 });
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
                fundedGrant = _a.sent();
                fundedGrant2Id = cuid.get();
                return [4 /*yield*/, prisma.grant.upsert({
                        where: { id: fundedGrant2Id },
                        update: {},
                        create: {
                            id: fundedGrant2Id,
                            name: (0, falso_1.randCatchPhrase)(),
                            description: (0, falso_1.randParagraph)({ length: 2 }).join(' '),
                            image: "https://picsum.photos/seed/".concat(fundedGrant2Id, "/1000/600.jpg"),
                            twitter: (0, falso_1.randUserName)(),
                            website: (0, falso_1.randUrl)(),
                            location: (0, falso_1.randCountry)(),
                            paymentAccount: {
                                connectOrCreate: {
                                    create: {
                                        recipientAddress: 'acct_1MydI2PrHJrNYNi5',
                                        provider: {
                                            connect: {
                                                id: seed.paymentProvider.id,
                                            },
                                        },
                                    },
                                    where: {
                                        recipientAddress_providerId: {
                                            recipientAddress: 'acct_1MydI2PrHJrNYNi5',
                                            providerId: seed.paymentProvider.id,
                                        },
                                    },
                                },
                            },
                            team: {
                                connect: [
                                    {
                                        id: seed.users[0].id,
                                    },
                                    {
                                        id: seed.admin.id,
                                    },
                                ],
                            },
                            contributions: {
                                createMany: {
                                    data: Array.from(Array(20).keys()).map(function (_) {
                                        var amount = (0, falso_1.randNumber)({ min: 2000, max: 5000 });
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
                fundedGrant2 = _a.sent();
                unverifiedGrantId = cuid.get();
                return [4 /*yield*/, prisma.grant.upsert({
                        where: { id: unverifiedGrantId },
                        update: {},
                        create: {
                            id: unverifiedGrantId,
                            name: (0, falso_1.randCatchPhrase)(),
                            description: (0, falso_1.randParagraph)({ length: 3 }).join(' '),
                            image: "https://picsum.photos/seed/".concat(unverifiedGrantId, "/1000/600.jpg"),
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
                            fundingGoal: (0, falso_1.randNumber)({ min: 1000, max: 50000 }),
                            verified: false,
                        },
                    })];
            case 5:
                unverifiedGrant = _a.sent();
                i = 0;
                _a.label = 6;
            case 6:
                if (!(i < NUMBER_OF_GRANTS)) return [3 /*break*/, 9];
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
                                    data: Array.from(Array(20).keys()).map(function (_) {
                                        var amount = (0, falso_1.randNumber)({ min: 2000, max: 5000 });
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
            case 7:
                grant = _a.sent();
                seed.grants.push(grant);
                _a.label = 8;
            case 8:
                i++;
                return [3 /*break*/, 6];
            case 9:
                console.log(chalk.green('\n[ OK ] Grants seeded!'));
                return [2 /*return*/];
        }
    });
}); };
exports.seedGrants = seedGrants;
