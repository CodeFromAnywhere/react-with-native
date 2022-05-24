"use strict";
/**
 * This file was auto-generated using the Sensible Boilerplate Creator (npx create-sensible-app).
 * You can edit it in what ever way you see fit.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.syncModels = exports.sequelize = exports.getAllModels = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sensible_files_1 = require("sensible-files");
dotenv_1.default.config();
const sequelize_typescript_1 = require("sequelize-typescript");
const getAllModels = () => {
    return (0, sensible_files_1.importFromFiles)({
        files: (0, sensible_files_1.findFiles)("model", __dirname).map((x) => x.path),
        guard: (moduleExports) => typeof moduleExports === "function",
    });
};
exports.getAllModels = getAllModels;
exports.sequelize = new sequelize_typescript_1.Sequelize({
    dialect: "sqlite",
    storage: "db.sqlite",
    models: (0, exports.getAllModels)(),
    benchmark: false,
    logQueryParameters: false,
    logging: (sql, timing) => {
        if (timing && timing > 200) {
            console.log(sql, timing);
        }
    },
});
const syncModels = async () => {
    try {
        const alter = true;
        console.log(`Syncing db (alter: ${alter})`);
        await exports.sequelize.authenticate();
        await exports.sequelize.sync({
            // logging: console.log,
            alter,
        });
        console.log("Synced");
    }
    catch (e) {
        console.log("e", e);
    }
};
exports.syncModels = syncModels;
