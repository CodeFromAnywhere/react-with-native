"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.encryptPassword=void 0;var bcrypt_1=require("bcrypt"),encryptPassword=function(r){return(0,bcrypt_1.hashSync)(r,10)};
/**
 * Method to encrypt any password. Uses `bcrypt`
 */exports.encryptPassword=encryptPassword;
//# sourceMappingURL=encryptPassword.js.map