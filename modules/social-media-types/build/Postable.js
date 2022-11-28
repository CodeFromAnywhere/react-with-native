"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostedStatistics = exports.findPostableToPost = void 0;
/**
 * This function finds a postable from the database and posts it on multiple channels
 *
 * This can be executed with a CRON
 *
 * 1. finds a postable that has no posted paired
 * 2. chooses the channels where this thing can be posted on
 * 3. for every channel, formats the post correctly
 * 4. for every channel, places the post
 */
var findPostableToPost = function () { };
exports.findPostableToPost = findPostableToPost;
/**
 * This function keeps the `Posted` statistics up-to-date
 *
 * Can be executed with a cron for all recent posts
 */
var updatePostedStatistics = function () { };
exports.updatePostedStatistics = updatePostedStatistics;
//# sourceMappingURL=Postable.js.map