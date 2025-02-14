"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.awsService = exports.qfService = exports.invitesService = exports.grantsService = exports.authService = exports.usersService = exports.providerService = exports.prismaService = exports.uploadedFileUrl = exports.matchingRound = exports.claimedInviteCode = exports.inviteCode = exports.ecosystemBuilder = exports.claimedCode = exports.checkoutPaymentSession = exports.checkoutInfo = exports.checkoutItems = exports.grants = exports.users = void 0;
var falso_1 = require("@ngneat/falso");
var client_1 = require("@prisma/client");
var cuid = require("cuid");
// Creating a mock result
// TODO: Change & fix types
var users = __spreadArray([], Array(3), true).map(function (_, index) {
    var userData = (0, falso_1.randUser)();
    return {
        id: cuid(),
        name: "".concat(userData.firstName, " ").concat(userData.lastName),
        email: userData.email,
        emailVerified: null,
        visitorId: (0, falso_1.randUuid)(),
        role: index % 2 === 0 ? client_1.Role.User : client_1.Role.Admin, // Every odd user is an admin
        flagged: false,
        image: userData.img,
        bio: (0, falso_1.randQuote)(),
        twitter: userData.username,
        contributions: [
            {
                id: cuid(),
                userId: cuid(),
                grantId: cuid(),
                grant: {
                    id: cuid(),
                    name: 'test one',
                    description: (0, falso_1.randText)(),
                    image: (0, falso_1.randImg)(),
                    twitter: (0, falso_1.randUserName)(),
                    website: (0, falso_1.randUrl)(),
                    location: (0, falso_1.randCountry)(),
                    paymentAccountId: (0, falso_1.randUuid)(),
                    fundingGoal: 100,
                    contributions: [],
                    team: [],
                    verified: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                matchingRoundId: null,
                amount: 1000,
                denomination: 'USD',
                amountUsd: 1000,
                paymentMethodId: cuid(),
                flagged: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
        grants: [],
        totalDonated: 1000,
        totalRaised: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
});
exports.users = users;
var grants = [
    {
        id: cuid(),
        name: 'test one',
        description: (0, falso_1.randText)(),
        image: (0, falso_1.randImg)(),
        twitter: (0, falso_1.randUserName)(),
        website: (0, falso_1.randUrl)(),
        location: (0, falso_1.randCountry)(),
        paymentAccountId: (0, falso_1.randUuid)(),
        fundingGoal: 100,
        contributions: [
            {
                id: (0, falso_1.randUuid)(),
                userId: (0, falso_1.randUuid)(),
                amount: 100,
                denomination: 'USD',
                amountUsd: 100,
                grantId: 'cld1dnt1y000008m97yakhtrf',
                matchingRoundId: null,
                paymentMethodId: (0, falso_1.randUuid)(),
                flagged: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
        team: [users[0]],
        paymentAccount: {
            id: 'clg4zguri0002s5nnydvf9ido',
            recipientAddress: 'acct_1MdDqePwtixIFqie',
            providerId: 'clg4zguri0002s5nnydvf9ido',
            provider: {
                id: 'clg4zguri0002s5nnydvf9ido',
                name: 'Stripe',
                type: 'CARD',
                acceptedCountries: ['US', 'MY'],
                denominations: ['USD'],
                website: '',
                schema: {},
                version: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: cuid(),
        name: 'test two',
        description: (0, falso_1.randText)(),
        image: (0, falso_1.randImg)(),
        twitter: (0, falso_1.randUserName)(),
        website: (0, falso_1.randUrl)(),
        location: (0, falso_1.randCountry)(),
        paymentAccountId: (0, falso_1.randUuid)(),
        fundingGoal: 100,
        contributions: [
            {
                id: (0, falso_1.randUuid)(),
                userId: (0, falso_1.randUuid)(),
                amount: 50,
                denomination: 'USD',
                amountUsd: 50,
                grantId: cuid(),
                matchingRoundId: null,
                paymentMethodId: (0, falso_1.randUuid)(),
                flagged: false,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ],
        team: [users[1]],
        paymentAccount: {
            id: 'clg4zguri0002s5nnydvf9ido',
            recipientAddress: 'acct_1MdDqePwtixIFqie',
            providerId: 'clg4zguri0002s5nnydvf9ido',
            provider: {
                id: 'clg4zguri0002s5nnydvf9ido',
                name: 'Stripe',
                type: 'CARD',
                acceptedCountries: ['US', 'MY'],
                denominations: ['USD'],
                website: '',
                schema: {},
                version: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        verified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: cuid(),
        name: 'test three',
        description: (0, falso_1.randText)(),
        image: (0, falso_1.randImg)(),
        twitter: (0, falso_1.randUserName)(),
        website: (0, falso_1.randUrl)(),
        location: (0, falso_1.randCountry)(),
        paymentAccountId: (0, falso_1.randUuid)(),
        fundingGoal: 100,
        contributions: [],
        team: [users[2]],
        paymentAccount: {
            id: 'clg4zguri0002s5nnydvf9ido',
            recipientAddress: 'acct_1MdDqePwtixIFqie',
            providerId: 'clg4zguri0002s5nnydvf9ido',
            provider: {
                id: 'clg4zguri0002s5nnydvf9ido',
                name: 'Stripe',
                type: 'CARD',
                acceptedCountries: ['US', 'MY'],
                denominations: ['USD'],
                website: '',
                schema: {},
                version: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        verified: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];
exports.grants = grants;
var ecosystemBuilder = {
    id: 'id',
    userId: 'userId',
    matchingRounds: [],
    inviteCodesId: 'inviteCodeId',
    createdAt: new Date(),
    updatedAt: new Date(),
};
exports.ecosystemBuilder = ecosystemBuilder;
var checkoutItems = {
    grants: [
        {
            id: 'cld2ilh7t000008l3g1qe3nla',
            amount: 100,
        },
        {
            id: 'cld1dnt1y000008m97yakhtrf',
            amount: 200,
        },
    ],
};
exports.checkoutItems = checkoutItems;
var checkoutInfo = {
    donated: 300,
    matched: 0,
    numberOfItems: 2,
};
exports.checkoutInfo = checkoutInfo;
var checkoutPaymentSession = { url: 'checkoutlink' };
exports.checkoutPaymentSession = checkoutPaymentSession;
var claimedCode = {
    code: 'clfsbx7bb0000pd0kjloobn8a',
    claimed: true,
};
exports.claimedCode = claimedCode;
var inviteCode = {
    id: 'clfsbx7bb0000pd0kjloobn8a',
    code: 'clfsbx7bb0000pd0kjloobn8a',
    claimed: false,
    claimedById: undefined,
    claimedBy: undefined,
    createdAt: new Date(),
    updatedAt: new Date(),
};
exports.inviteCode = inviteCode;
var claimedInviteCode = {
    id: 'clfsbx7bb0000pd0kjloobn8a',
    code: 'clfsbx7bb0000pd0kjloobn8a',
    claimed: true,
    claimedById: undefined,
    claimedBy: undefined,
    createdAt: new Date(),
    updatedAt: new Date(),
};
exports.claimedInviteCode = claimedInviteCode;
var matchingRound = {
    id: 'clg3bs7400017x6s5e7t96pzk',
    name: 'Matching Round',
    verified: true,
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
};
exports.matchingRound = matchingRound;
var uploadedFileUrl = 'https://bucket.s3.us-1.amazonaws.com/file';
exports.uploadedFileUrl = uploadedFileUrl;
var prismaService = {
    user: {
        findUnique: jest.fn().mockResolvedValue(users[0]),
        update: jest.fn().mockResolvedValue(users[0]),
    },
    grant: {
        findMany: jest.fn().mockResolvedValue(grants),
        findUnique: jest.fn().mockResolvedValue(grants[0]),
        create: jest.fn().mockResolvedValue(grants[0]),
        update: jest.fn().mockResolvedValue(grants[0]),
    },
    ecosystemBuilder: {
        findUnique: jest.fn().mockResolvedValue(ecosystemBuilder),
    },
    inviteCodes: {
        findUnique: jest.fn().mockResolvedValue(inviteCode),
        update: jest.fn().mockResolvedValue(claimedInviteCode),
    },
    matchingRound: {
        findFirst: jest.fn().mockResolvedValue(matchingRound),
    },
};
exports.prismaService = prismaService;
var providerService = {
    getProvider: jest.fn().mockResolvedValue({
        id: cuid(),
    }),
    createPaymentSession: jest.fn().mockResolvedValue(checkoutPaymentSession),
    handlePaymentWebhook: jest.fn().mockResolvedValue(undefined),
    retrieveCheckoutInfo: jest.fn().mockResolvedValue(checkoutInfo),
};
exports.providerService = providerService;
var usersService = {
    retrieveUserProfile: jest.fn().mockResolvedValue(users[0]),
    updateUserProfile: jest.fn().mockResolvedValue(users[0]),
};
exports.usersService = usersService;
var authService = {
    grantAdminPrivilege: jest.fn().mockResolvedValue(users[0]),
    revokeAdminPrivilege: jest.fn().mockResolvedValue(users[0]),
};
exports.authService = authService;
var grantsService = {
    getAllGrants: jest.fn().mockResolvedValue(grants),
    createGrant: jest.fn().mockResolvedValue(grants[0]),
    reviewGrant: jest.fn().mockResolvedValue(grants[0]),
    getGrant: jest.fn().mockResolvedValue(grants[0]),
    updateGrant: jest.fn().mockResolvedValue(grants[0]),
    resubmitGrant: jest.fn().mockResolvedValue(grants[0]),
    checkoutGrants: jest.fn().mockResolvedValue(checkoutPaymentSession),
};
exports.grantsService = grantsService;
var invitesService = {
    claimInviteCode: jest.fn().mockResolvedValue(claimedCode),
};
exports.invitesService = invitesService;
var qfService = {
    getActiveMatchingRoundByGrant: jest.fn().mockResolvedValue(matchingRound),
    // estimateMatchedAmount: jest.fn().mockResolvedValue(), // TODO
    calculateQuadraticFundingAmount: jest.fn().mockResolvedValue(matchingRound), // TODO
    // distributeMatchedFunds: jest.fn().mockResolvedValue(null), // TODO
};
exports.qfService = qfService;
var awsService = {
    uploadFile: jest.fn().mockResolvedValue(uploadedFileUrl),
};
exports.awsService = awsService;
