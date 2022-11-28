"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getFrontmatterDbStorageMethod=void 0;var code_types_1=require("code-types"),getFrontmatterDbStorageMethod=function(e){if(e){var t=e.dbStorageMethod&&"string"==typeof e.dbStorageMethod&&code_types_1.dbStorageMethods.includes(e.dbStorageMethod)?e.dbStorageMethod:void 0;if(t)return t;var o=e.isDbModel;return!0===o?"jsonMultiple":!1===o?null:void 0}};
/**
 * if isDbModel is specifically set to false, this will return null (which means this should overwrite other things)
 */exports.getFrontmatterDbStorageMethod=getFrontmatterDbStorageMethod;
//# sourceMappingURL=getFrontmatterDbStorageMethod.js.map