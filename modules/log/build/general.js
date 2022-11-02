"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.log=exports.parseTitle=exports.DEBUG=exports.getCallerFileName=void 0;
/**
 * TODO: this is great. now also get the operationName. If the operationName appears in the config, for debug, show the log, otherwise don't show
 */
var getCallerFileName=function(){var e=(new Error).stack;if(e){
// console.log("Complete stack", stack);
var t=e.split("\n")[3];if(t){var l=t.split("at ")[1].split(":")[0];if(l)return l.replace("/build/","/src/").replace(".js",".ts")}}};exports.getCallerFileName=getCallerFileName,
/**
 * if true, also shows debug messages
 */
exports.DEBUG=!1;
/**
 * special character combinations that make the console message be printed differently
 */
var options={
//special
Reset:"[0m",Bright:"[1m",Dim:"[2m",Underscore:"[4m",Blink:"[5m",Reverse:"[7m",Hidden:"[8m",
//color
FgBlack:"[30m",FgRed:"[31m",FgGreen:"[32m",FgYellow:"[33m",FgBlue:"[34m",FgMagenta:"[35m",FgCyan:"[36m",FgWhite:"[37m",
//backgrounds
BgBlack:"[40m",BgRed:"[41m",BgGreen:"[42m",BgYellow:"[43m",BgBlue:"[44m",BgMagenta:"[45m",BgCyan:"[46m",BgWhite:"[47m"},resetString="[0m",parseTitle=function(e){var t=e.split("\n").map((function(e){return e.split(".")})).flat();return{title:t[0],rest:t.slice(1).filter((function(e){return e.length>0})).join("\n")}};exports.parseTitle=parseTitle;
/**
 * Log a message with a special type
 */
var log=function(
/**
 * the message to be displayed to the user
 */
e,
/**
 * the configuration (optional)
 */
t,
/**
 * Extra data the user needs to be able to see.
 */
l){if("debug"!==(null==t?void 0:t.type)||exports.DEBUG){
// TODO: figure out if I can also get the path, so I can easily figure out the operation and also store logs somewhere nice
// const caller = log.caller?.name;
// const titleParse = parseTitle(message);
// const title = config?.title || titleParse.title;
var r="error"===(null==t?void 0:t.type)?options.FgRed:"important"===(null==t?void 0:t.type)?options.FgBlue:"success"===(null==t?void 0:t.type)?options.FgGreen:"warning"===(null==t?void 0:t.type)?options.FgYellow:null;r?console.log("".concat(r,"%s").concat(resetString),e):console.log(e),"error"===(null==t?void 0:t.type)&&console.log("(error happened in ".concat((0,exports.getCallerFileName)(),")")),l&&("object"==typeof l?console.table(l):console.log(l))}};exports.log=log;
//# sourceMappingURL=general.js.map