"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.getMergedQueryConfig = exports.dbConfig = void 0;
/**
 * TODO: maybe splitting this up + importing DbModels as type, will reduce the risk of circular dependencies
 */
var sdk_db_1 = require("sdk-db");
var fs_orm_1 = require("fs-orm");
exports.dbConfig = {
    modelQueryConfig: sdk_db_1.modelQueryConfig,
    defaultQueryConfig: undefined,
};
var getMergedQueryConfig = function (modelName, customQueryConfig) { return (0, fs_orm_1.mergeConfigs)(modelName, exports.dbConfig, customQueryConfig); };
exports.getMergedQueryConfig = getMergedQueryConfig;
exports.db = (0, fs_orm_1.createDb)(exports.dbConfig);
//# sourceMappingURL=db.js.map