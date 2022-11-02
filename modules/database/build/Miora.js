"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createUser=void 0;
// hello --> 22x35x66x66x99
var encryptPassword=function(e){return e.split("").map((function(e){return e.charCodeAt(0)})).join("x")},createUser=function(e){encryptPassword(e.password),e.username};exports.createUser=createUser;
//# sourceMappingURL=Miora.js.map