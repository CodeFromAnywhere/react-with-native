import { SimplifiedSchemaType } from "./SimplifiedSchema";
/**
 *
 * Improves the convention for parameter names that refer to models. probably it's better to do this: `slug/id/index` are reserved on every model, let's call them "Ref". `modelNameRef` refers to modelName. But what if you want to call it differently? Then you'd need to distinguish a prefix from the modelName. Let's do this with a underscore (no dash because underscore preserves ability to dotting on the object). If you want a reference to a user be called author, you'd name it `author_userSlug`.
 *
 * TODO: reduce all TsInterfaces and functions into their parameters :D
 */
declare const contentTypeConst: readonly ["generated", "markdown", "text", "number", "date", "time", "datetime", "toggle", "select", "selectMultiple"];
declare type ContentType = typeof contentTypeConst[number];
export interface ParameterName {
    pattern: string;
    example: string;
    description: string;
    type: SimplifiedSchemaType;
    /** in case of array, what's in the array? */
    secondaryType?: SimplifiedSchemaType;
    contentType: ContentType[];
}
export {};
//# sourceMappingURL=ParameterName.d.ts.map