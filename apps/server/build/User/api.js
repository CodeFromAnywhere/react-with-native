"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const makeEndpoint_1 = require("../makeEndpoint");
const model_1 = __importDefault(require("./model"));
module.exports = [
    (0, makeEndpoint_1.makeEndpoint)("signup", "POST", async (ctx) => {
        const { email } = ctx.body;
        const user = await model_1.default.create({ email });
        const success = !!user;
        return {
            response: success ? "Signed up" : "Something went wrong",
            success,
        };
    }),
];
