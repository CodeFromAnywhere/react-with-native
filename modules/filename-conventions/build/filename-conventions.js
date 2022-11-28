"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIndexableFileId = exports.operationUnindexableNamesOrSubExtensions = exports.frontendOptionalFileSubExtensions = exports.projectRelativeGeneratedOperationsFolder = exports.generatedFolders = exports.sourceFolderName = exports.databaseFolderName = exports.buildFolderName = void 0;
var hasSubExtension_1 = require("./hasSubExtension");
exports.buildFolderName = "build";
exports.databaseFolderName = "db";
exports.sourceFolderName = "src";
exports.generatedFolders = [
    "node_modules",
    exports.buildFolderName,
    ".next",
    ".git",
    ".turbo",
];
exports.projectRelativeGeneratedOperationsFolder = "operations/tools/generated";
/**
 * these special operations are generated, so should not be copied, but should be generated in the bundle after everything is copied
 */
exports.frontendOptionalFileSubExtensions = [
    "native",
    "ios",
    "android",
    "web",
];
exports.operationUnindexableNamesOrSubExtensions = ["cli", "test"];
var isIndexableFileId = function (fileId) {
    var isOperationName = (0, hasSubExtension_1.hasSubExtension)(fileId, exports.operationUnindexableNamesOrSubExtensions, true);
    var isFrontendOptionalName = (0, hasSubExtension_1.hasSubExtension)(fileId, exports.frontendOptionalFileSubExtensions, false);
    var isIndex = fileId === "index";
    var isIndexable = !isIndex && !isFrontendOptionalName && !isOperationName;
    return isIndexable;
};
exports.isIndexableFileId = isIndexableFileId;
//# sourceMappingURL=filename-conventions.js.map