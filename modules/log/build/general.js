#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.log=void 0;var options={
//special
Reset:"[0m",Bright:"[1m",Dim:"[2m",Underscore:"[4m",Blink:"[5m",Reverse:"[7m",Hidden:"[8m",
//color
FgBlack:"[30m",FgRed:"[31m",FgGreen:"[32m",FgYellow:"[33m",FgBlue:"[34m",FgMagenta:"[35m",FgCyan:"[36m",FgWhite:"[37m",
//backgrounds
BgBlack:"[40m",BgRed:"[41m",BgGreen:"[42m",BgYellow:"[43m",BgBlue:"[44m",BgMagenta:"[45m",BgCyan:"[46m",BgWhite:"[47m"},resetString="[0m",log=function(
/**
 * the message to be displayed to the user
 */
e,
/**
 * the configuration (optional)
 */
o){var n="error"===(null==o?void 0:o.type)?options.FgRed:"important"===(null==o?void 0:o.type)?options.FgBlue:"success"===(null==o?void 0:o.type)?options.FgGreen:"warning"===(null==o?void 0:o.type)?options.FgYellow:null;
// say(message);
return n?console.log("".concat(n,"%s").concat(resetString),e):console.log(e)};exports.log=log;
//# sourceMappingURL=general.js.map