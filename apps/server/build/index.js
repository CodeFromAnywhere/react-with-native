"use strict";
/**
 * This file was auto-generated using the Sensible Boilerplate Creator (npx create-sensible-app).
 * You can edit it in what ever way you see fit.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const server_1 = __importDefault(require("server"));
const server_2 = require("./server");
const db_1 = require("./db");
const makeSense = (config) => {
    const customPort = Number(process.env.PORT);
    const port = !isNaN(customPort) ? customPort : 4000;
    // /** SYNC ALL MODELS  */
    (0, db_1.syncModels)();
    const { header } = server_1.default.reply; // OR server.reply;
    const cors = [
        (ctx) => header("Access-Control-Allow-Origin", "*"),
        (ctx) => header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"),
        (ctx) => header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, HEAD"),
        (ctx) => (ctx.method.toLowerCase() === "options" ? 200 : false),
    ];
    // @ts-ignore
    (0, server_1.default)({
        port,
        public: "public",
        security: {
            csrf: false,
        },
    }, cors, (0, server_2.getAllEndpoints)()).then((context) => {
        console.log(`Running on port`, port);
    });
};
makeSense();
