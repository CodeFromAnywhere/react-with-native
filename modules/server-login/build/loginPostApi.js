"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.loginPostApi=void 0;var server_1=__importDefault(require("server")),loginPostApi=function(e){var o,t=null===(o=e.data)||void 0===o?void 0:o.authToken;return console.log("set cookiezzz",{authToken:t}),server_1.default.reply.cookie("testje",t,{
/**
         * NB: VERY IMPORTANT In order to receive the cookie at other port or domain
         */
sameSite:"none",secure:!0,
/**
         * It turned out that Chrome won't set the cookie if the domain contains a port. Setting it for localhost (without port) is not a problem
         */
domain:"localhost"}).send({isSuccessful:!0,message:"Logged in"})};
/**
 * Uses cookies (https://serverjs.io/documentation/reply/#cookie-) to login
 *
 * Needed for having `authToken` with GET as well in a safe manner (e.g. for images)
 */exports.loginPostApi=loginPostApi;
//# sourceMappingURL=loginPostApi.js.map