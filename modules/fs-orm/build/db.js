"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.set=exports.push=exports.get=exports.db=void 0;
/*
Make `db.get("Export", config?: GetConfig)` work for all operations, a single operation, and a single file. Benchmark performance.

Refactor todo `fs-orm/src/cli.ts`: `newOperation db` with `db` object and `get, set, push` functions and bins
*/
const index_typescript_1=require("index-typescript"),js_util_1=require("js-util"),orm_1=require("./orm"),indexDefaults=(0,js_util_1.mergeObjectsArray)(index_typescript_1.indexTypes.map((e=>({[e]:{operation:"*"}}))));exports.db=(0,orm_1.createDb)({defaults:Object.assign({},indexDefaults)}),exports.get=exports.db.get,exports.push=exports.db.push,exports.set=exports.db.set;
//# sourceMappingURL=db.js.map