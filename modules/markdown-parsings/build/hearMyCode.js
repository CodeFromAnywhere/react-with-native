"use strict";
/**
GOAL:
- distribute read only (and audio only) material of my codebase
- it is also a fundament for other applications in the future
 */
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
exports.deployNextProject = exports.generateStaticSite = exports.operationRadio = exports.selectRandomOperation = exports.sayablesToMp3 = exports.print = exports.projectToMd = exports.bundleToMd = exports.markdownToSayable = void 0;
/**
all mp3s should be stored in a separate location because we don't need them in the file system and we don't reference them, as they are data that is located by convention. all markdowns should have a linked `TextToSpeechAudio[]` which is auto updated every time `dev` is ran. `TextToSpeechAudio` also includes infromation about the `duration`, `voice` and more...

a bigger `.md.mp3` file is auto-created for every markdown file that concatenates all `sayable` audio pieces in the right order, but also includes the audio pieces in between.
*/
var markdownToSayable = function (_a) {
    //1 get markdownparse
    var markdown = _a.markdown, markdownFilePath = _a.markdownFilePath;
    //2. alter every piece of content as needed into a sayable text that can be understood through audio only
    /*
    - headings should be paused before (long) and after (shorter)
    - headings should be numbered
    - images and other inline assets should be referenced with alt text, unless it's an audio file
    - new alineas should get some pause before
    - OPTIONAL: maybe, when starting a (sub)chapter, tell the reader how many subchapters there are in this (sub)chapter. This can give a better orientation
    */
    return [];
};
exports.markdownToSayable = markdownToSayable;
/**
 * creates a summary for a whole bundle
 */
var bundleToMd = function (_a) {
    var bundleConfigId = _a.bundleConfigId, includeModules = _a.includeModules;
    /**
     - explain operation config itself, e.g. which apps there are and an outline of the packages and modules
  
     - extract all needed operations from bundle config (with or without modules) and use operationToMd for those
    
     - extract docs and readmes from bundle config and bundle those
    */
    return "";
};
exports.bundleToMd = bundleToMd;
/**
 * summarizes the whole OS project into a markdown string
 */
var projectToMd = function (_a) {
    var includeTodo = _a.includeTodo;
    /**
    
     - the folder structure should be the outline
     - hierarchically delve into folders with all its content (md and operations)
  
     */
    return "";
};
exports.projectToMd = projectToMd;
/**
 * should print any file using a preconfigured printer (which can be local or remote. if remote and there is no connection, it should save the task for later)
 *
 * this function maybe needs "generateStaticSite"
 */
var print = function (_a) {
    var absoluteFilePath = _a.absoluteFilePath;
    /**
    
    markdown files should be rendered via the renderer first
    
    ts, json files should be color highlighted (we can simply wrap this in triple backticks and print it as markdown)
    */
};
exports.print = print;
/**
 * Creates a single audiofile of a Sayable[] and stores that in a configured location
 */
var sayablesToMp3 = function (_a) {
    var sayables = _a.sayables, destinationAbsoluteFilePath = _a.destinationAbsoluteFilePath;
    /**
    
    
    
     */
};
exports.sayablesToMp3 = sayablesToMp3;
/** selects a random operation */
var selectRandomOperation = function (baseFolderPath) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, ""];
    });
}); };
exports.selectRandomOperation = selectRandomOperation;
/**
 * randomly plays mp3 summaries of operations on the project
 */
var operationRadio = function () { };
exports.operationRadio = operationRadio;
/**
 * generates static site from a markdown file, with a menu on the right by default
 *
 * uses next.js
 *
 * because it is static, the markdown can be in the frontend assets and there is no need for a backend
 *
 *
 */
var generateStaticSite = function (_a) {
    var projectRelativeMdFilePath = _a.projectRelativeMdFilePath, singlePage = _a.singlePage;
    //
};
exports.generateStaticSite = generateStaticSite;
/**
 * NB: Obviously, this is not the right place for this function, but none of these functions are properly located yet...
 *
 * should deploy any bundle or next project folder project to Vercel by first creating and pushing it into git, and then creating it in vercel through their api
 *
 * should return an url where the project will be served and the estimated time when it will be live
 */
var deployNextProject = function () { };
exports.deployNextProject = deployNextProject;
//# sourceMappingURL=hearMyCode.js.map