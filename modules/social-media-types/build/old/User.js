"use strict";
/**
 * this file contains all endpoints about users for linkedin king. could be useful if we need a user app
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoles = exports.meUserFields = exports.publicUserFields = void 0;
exports.publicUserFields = [
    "id",
    "name",
    "username",
    "role",
    "image",
    "base64",
    "createdAt",
    "updatedAt",
];
exports.meUserFields = exports.publicUserFields.concat([
    "loginToken",
    "email",
    "subscribedToNewsletter",
]);
exports.userRoles = ["default", "admin"];
//# sourceMappingURL=User.js.map