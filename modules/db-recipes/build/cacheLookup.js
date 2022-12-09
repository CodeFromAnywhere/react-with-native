"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheLookup = void 0;
/**
 * Wrapper function to cache any function and invalidate it, in some way
 *
 * caching
 * automatic cache invalidation if data sources are updated
 * optimistic caching after cache invalidation
 */
var cacheLookup = function (functionName, parameters) {
    // TODO: think of a smart way to look in cache and make sure it works with as many functions as possible with a smart cache invalidation + cleanup strategy
    return { hasValidCache: false };
};
exports.cacheLookup = cacheLookup;
//# sourceMappingURL=cacheLookup.js.map