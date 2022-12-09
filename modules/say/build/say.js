#!/usr/bin/env node
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
exports.sayLanguage = exports.sayNepali = exports.sayDutch = exports.test = exports.say = void 0;
var child_process_1 = require("child_process");
var make_test_1 = require("make-test");
var shorthands = {
    filePath: "input-file",
    speechRate: "rate",
    voice: "voice",
    outputFilePath: "output-file",
    audioDevice: "audio-device",
    showProgress: "progress",
    interactive: "interactive",
    fileFormat: "file-format",
    dataFormat: "data-format",
    bitRate: "bit-rate",
    quality: "quality",
};
/**
 * TODO: do research what else is out there
 *
 * say [-v voice] [-r rate] [-o outfile [aud
io format options] | -n name:port | -a device] [-f f
ile | string ...]

DESCRIPTION
       This tool uses the Speech Synthesis manager
       to convert input text to audible speech and
       either play it through the sound output
       device chosen in System Preferences or save
       it to an AIFF file.


       for usage, see `man say`
 */
var say = function (input) { return __awaiter(void 0, void 0, void 0, function () {
    var paramKeys, params, spawnInput;
    return __generator(this, function (_a) {
        paramKeys = typeof input === "string"
            ? null
            : Object.keys(input);
        params = typeof input === "string"
            ? null
            : paramKeys === null || paramKeys === void 0 ? void 0 : paramKeys.reduce(function (all, key) {
                var value = input[key];
                if (value === undefined) {
                    return all;
                }
                return "".concat(all, " --").concat(shorthands[key], "=").concat(String(value));
            }, "");
        spawnInput = typeof input === "string" ? input : params;
        (0, child_process_1.spawnSync)("say ".concat(spawnInput), { shell: true });
        return [2 /*return*/];
    });
}); };
exports.say = say;
exports.test = (0, make_test_1.makeTest)(function () {
    // say("test");
    // TODO: how do we test this without actually saying something? probably we can test if the cli works by outputting the result to a temporary mp3 file
}, function () { return true; });
var sayDutch = function (message) {
    (0, child_process_1.spawnSync)("say \"".concat(message, "\" --voice Xander"), { shell: true });
};
exports.sayDutch = sayDutch;
var sayNepali = function (message) {
    (0, child_process_1.spawnSync)("say \"".concat(message, "\" --voice Lekha"), { shell: true });
};
exports.sayNepali = sayNepali;
var sayLanguage = function (message, language) {
    var voice = language === "np" ? "Lekha" : language === "nl" ? "Xander" : "Alex";
    (0, child_process_1.spawnSync)("say \"".concat(message, "\" --voice ").concat(voice), { shell: true });
};
exports.sayLanguage = sayLanguage;
//# sourceMappingURL=say.js.map