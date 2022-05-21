"use strict";
/**
 * This file was auto-generated using the Sensible Boilerplate Creator (npx create-sensible-app).
 * You can edit it in what ever way you see fit.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("core");
const env = process.env;
const { DOMAIN, NODE_ENV, ADMIN_PASSWORD } = env;
const Constants = {
    ...core_1.PublicConstants,
    DOMAIN,
    NODE_ENV,
    ADMIN_PASSWORD,
};
exports.default = Constants;
