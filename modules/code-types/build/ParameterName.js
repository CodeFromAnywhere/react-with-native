"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
/**
 *
 * Improves the convention for parameter names that refer to models. probably it's better to do this: `slug/id/index` are reserved on every model, let's call them "Ref". `modelNameRef` refers to modelName. But what if you want to call it differently? Then you'd need to distinguish a prefix from the modelName. Let's do this with a underscore (no dash because underscore preserves ability to dotting on the object). If you want a reference to a user be called author, you'd name it `author_userSlug`.
 *
 * TODO: reduce all TsInterfaces and functions into their parameters :D
 */
const contentTypeConst=[
// automatic
"generated",
//string
"markdown","text",
// numbers
"number","date","time","datetime",
// boolean
"toggle",
// enum
"select",
// enum[]
"selectMultiple"];
//# sourceMappingURL=ParameterName.js.map