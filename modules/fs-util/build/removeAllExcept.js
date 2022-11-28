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
        while (_) try {
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
exports.removeAllExcept = void 0;
var fs_1 = require("./fs");
var path_1 = require("./path");
/**
 * Removes everything inside a folder except some files and folders that can, optionally, be ignored for removal. does not remove the folder itself
 *
 * NB: make this work with subdirectories!
 */
var removeAllExcept = function (folderPath, config) { return __awaiter(void 0, void 0, void 0, function () {
    var filesAndFolders, removePromises, promised;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fs_1.fs.readdir(folderPath, {
                    encoding: "utf8",
                    withFileTypes: true,
                })];
            case 1:
                filesAndFolders = _a.sent();
                removePromises = filesAndFolders.map(function (dirent) {
                    var _a;
                    if ((_a = config === null || config === void 0 ? void 0 : config.ignore) === null || _a === void 0 ? void 0 : _a.find(function (x) { return x.includes(dirent.name); }))
                        return { name: dirent.name, removed: false };
                    if ((config === null || config === void 0 ? void 0 : config.typeToRemove) === "file" && !dirent.isFile())
                        return { name: dirent.name, removed: false };
                    if ((config === null || config === void 0 ? void 0 : config.typeToRemove) === "folder" && !dirent.isDirectory())
                        return { name: dirent.name, removed: false };
                    return fs_1.fs
                        .rm(path_1.path.join(folderPath, dirent.name), { recursive: true })
                        .then(function () { return ({ name: dirent.name, removed: true }); });
                });
                return [4 /*yield*/, Promise.all(removePromises)];
            case 2:
                promised = _a.sent();
                return [2 /*return*/, promised];
        }
    });
}); };
exports.removeAllExcept = removeAllExcept;
//# sourceMappingURL=removeAllExcept.js.map