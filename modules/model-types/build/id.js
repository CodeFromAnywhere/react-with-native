"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.generatePassword=exports.generateId=exports.generateRandomString=void 0;const generateRandomString=e=>{const t="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";return"x".repeat(e).split("").map((()=>{const e=Math.floor(Math.random()*t.length);//0-63 --> index for above
return t.charAt(e)})).join("")};exports.generateRandomString=generateRandomString;
/**
 * 24 characters of the alphabet provides 9E33 combinations, wont be possible to brute-force in centuries, even if there are billions of entries
 */
const generateId=()=>(0,exports.generateRandomString)(24).toLowerCase();
/**
 * generates a password. By default, uses a length of 14
 */
function generatePassword(e=14){return(0,exports.generateRandomString)(e)}exports.generateId=generateId,exports.generatePassword=generatePassword;
//# sourceMappingURL=id.js.map