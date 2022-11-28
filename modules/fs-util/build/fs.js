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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fs = exports.Stats = exports.Dirent = exports.Dir = void 0;
// Normal deps
var graceful_fs_1 = __importStar(require("graceful-fs"));
var util_1 = require("util");
var promises_1 = require("fs/promises");
var graceful_fs_2 = require("graceful-fs");
Object.defineProperty(exports, "Dir", { enumerable: true, get: function () { return graceful_fs_2.Dir; } });
Object.defineProperty(exports, "Dirent", { enumerable: true, get: function () { return graceful_fs_2.Dirent; } });
Object.defineProperty(exports, "Stats", { enumerable: true, get: function () { return graceful_fs_2.Stats; } });
// Callbacks that need to be promisified
// TODO: Provide doc-comments for these functions, as they have now been lost...
var rename = (0, util_1.promisify)(graceful_fs_1.default.rename);
var mkdir = (0, util_1.promisify)(graceful_fs_1.default.mkdir);
var readFile = (0, util_1.promisify)(graceful_fs_1.default.readFile);
var writeFile = (0, util_1.promisify)(graceful_fs_1.default.writeFile);
var access = (0, util_1.promisify)(graceful_fs_1.default.access);
var watch = (0, util_1.promisify)(graceful_fs_1.default.watch);
var appendFile = (0, util_1.promisify)(graceful_fs_1.default.appendFile);
var chmod = (0, util_1.promisify)(graceful_fs_1.default.chmod);
var chown = (0, util_1.promisify)(graceful_fs_1.default.chown);
var copyFile = (0, util_1.promisify)(graceful_fs_1.default.copyFile);
var cp = (0, util_1.promisify)(graceful_fs_1.default.cp);
var rm = (0, util_1.promisify)(graceful_fs_1.default.rm);
var readdir = (0, util_1.promisify)(graceful_fs_1.default.readdir);
var realpath = (0, util_1.promisify)(graceful_fs_1.default.realpath);
var stat = (0, util_1.promisify)(graceful_fs_1.default.stat);
var readFileSync = graceful_fs_1.default.readFileSync;
var readdirSync = graceful_fs_1.default.readdirSync;
var writeFileSync = graceful_fs_1.default.writeFileSync;
var gracefulFsPromises = {
    // sync, should be discouraged
    readFileSync: readFileSync,
    readdirSync: readdirSync,
    writeFileSync: writeFileSync,
    rmSync: graceful_fs_1.rmSync,
    existsSync: graceful_fs_1.existsSync,
    accessSync: graceful_fs_1.accessSync,
    cpSync: graceful_fs_1.cpSync,
    // promisified stuff
    rename: rename,
    mkdir: mkdir,
    readFile: readFile,
    writeFile: writeFile,
    access: access,
    watch: watch,
    appendFile: appendFile,
    chmod: chmod,
    chown: chown,
    copyFile: copyFile,
    cp: cp,
    rm: rm,
    readdir: readdir,
    realpath: realpath,
    stat: stat,
};
var gracefulFsConstants = {
    constants: graceful_fs_1.constants,
};
var fsPromises = {
    /**
     * cp from graceful doesn't copy folders for me for some reason
     *
     * NB: this is not graceful!
     */
    cpAsync: promises_1.cp,
};
/**
 * NB: for some reason some of the graceful-fs functions aren't complete. For example, I can't seem to copy folders with cp from graceful-fs (cp)
 *
 * For that one I added cpAsync.
 */
exports.fs = __assign(__assign(__assign({}, gracefulFsPromises), gracefulFsConstants), fsPromises);
//# sourceMappingURL=fs.js.map