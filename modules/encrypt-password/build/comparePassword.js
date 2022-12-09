"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.comparePassword=void 0;var bcrypt_1=require("bcrypt"),comparePassword=function(r,e){return(0,bcrypt_1.compareSync)(r,e)};
/**
 * Method to check if a raw password should be the same as the encrypted variant. Uses `bcrypt`
 */exports.comparePassword=comparePassword;
//# sourceMappingURL=comparePassword.js.map