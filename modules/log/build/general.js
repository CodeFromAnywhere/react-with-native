"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = exports.parseTitle = exports.DEBUG = exports.getCallerFileName = void 0;
/**
 * TODO: this is great. now also get the operationName. If the operationName appears in the config, for debug, show the log, otherwise don't show
 */
var getCallerFileName = function () {
    var stack = new Error().stack;
    if (!stack)
        return;
    // console.log("Complete stack", stack);
    var firstRelevantLine = stack.split("\n")[3];
    if (!firstRelevantLine)
        return;
    var jsFilePath = firstRelevantLine.split("at ")[1].split(":")[0];
    if (!jsFilePath)
        return;
    var srcPath = jsFilePath.replace("/build/", "/src/").replace(".js", ".ts");
    return srcPath;
};
exports.getCallerFileName = getCallerFileName;
/**
 * if true, also shows debug messages
 */
exports.DEBUG = false;
/**
 * special character combinations that make the console message be printed differently
 */
var options = {
    //special
    Reset: "\x1b[0m",
    Bright: "\x1b[1m",
    Dim: "\x1b[2m",
    Underscore: "\x1b[4m",
    Blink: "\x1b[5m",
    Reverse: "\x1b[7m",
    Hidden: "\x1b[8m",
    //color
    FgBlack: "\x1b[30m",
    FgRed: "\x1b[31m",
    FgGreen: "\x1b[32m",
    FgYellow: "\x1b[33m",
    FgBlue: "\x1b[34m",
    FgMagenta: "\x1b[35m",
    FgCyan: "\x1b[36m",
    FgWhite: "\x1b[37m",
    //backgrounds
    BgBlack: "\x1b[40m",
    BgRed: "\x1b[41m",
    BgGreen: "\x1b[42m",
    BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m",
    BgMagenta: "\x1b[45m",
    BgCyan: "\x1b[46m",
    BgWhite: "\x1b[47m",
};
var resetString = "\x1b[0m";
/**
 * TODO: Should parse a title from markdown
 */
var parseTitle = function (markdown) {
    var sentences = markdown
        .split("\n")
        .map(function (x) { return x.split("."); })
        .flat();
    var title = sentences[0], rest = sentences.slice(1);
    return { title: title, rest: rest.filter(function (x) { return x.length > 0; }).join("\n") };
};
exports.parseTitle = parseTitle;
/**
 * Log a message with a special type
 */
var log = function (
/**
 * the message to be displayed to the user
 */
message, 
/**
 * the configuration (optional)
 */
config, 
/**
 * Extra data the user needs to be able to see.
 */
data) {
    if ((config === null || config === void 0 ? void 0 : config.type) === "debug" && !exports.DEBUG)
        return;
    // TODO: figure out if I can also get the path, so I can easily figure out the operation and also store logs somewhere nice
    // const caller = log.caller?.name;
    // const titleParse = parseTitle(message);
    // const title = config?.title || titleParse.title;
    var color = (config === null || config === void 0 ? void 0 : config.type) === "error"
        ? options.FgRed
        : (config === null || config === void 0 ? void 0 : config.type) === "important"
            ? options.FgBlue
            : (config === null || config === void 0 ? void 0 : config.type) === "success"
                ? options.FgGreen
                : (config === null || config === void 0 ? void 0 : config.type) === "warning"
                    ? options.FgYellow
                    : null;
    if (color) {
        console.log("".concat(color, "%s").concat(resetString), message);
    }
    else {
        console.log(message);
    }
    if ((config === null || config === void 0 ? void 0 : config.type) === "error") {
        console.log("(error happened in ".concat((0, exports.getCallerFileName)(), ")"));
    }
    if (data) {
        if (typeof data === "object") {
            console.table(data);
        }
        else {
            console.log(data);
        }
    }
};
exports.log = log;
//# sourceMappingURL=general.js.map