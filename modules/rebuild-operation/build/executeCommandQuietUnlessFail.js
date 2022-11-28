"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.executeCommandQuietUnlessFail=void 0;var child_process_1=require("child_process"),executeCommandQuietUnlessFail=function(e){var o=e.command,t=e.cwd,c=e.description;c&&process.stdout.write("".concat(c," "));try{(0,child_process_1.execSync)(o,{cwd:t,encoding:"utf8",stdio:"pipe"});return c&&console.log("✅"),!0}catch(e){c&&console.log("❌");var s=e;return console.log("".concat(o," went wrong:"),null==s?void 0:s.stdout),!1}};
/**
 * Executes a command without showing the result, unless the command fails, then it will log the output.,
 */exports.executeCommandQuietUnlessFail=executeCommandQuietUnlessFail;
//# sourceMappingURL=executeCommandQuietUnlessFail.js.map