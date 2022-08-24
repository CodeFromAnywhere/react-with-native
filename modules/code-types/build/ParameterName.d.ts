/**
 * ---
 * labels: TYPENET 🕺🏾
 * ---
 *
 * Improves the convention for parameter names that refer to models. probably it's better to do this: `slug/id/index` are reserved on every model, let's call them "Ref". `modelNameRef` refers to modelName. But what if you want to call it differently? Then you'd need to distinguish a prefix from the modelName. Let's do this with a underscore (no dash because underscore preserves ability to dotting on the object). If you want a reference to a user be called author, you'd name it `author_userSlug`.
 */
import { SimplifiedSchemaType } from "./SimplifiedSchema";
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
export declare type PatternMatcher = {
    pattern: string;
    matches: string;
    /**
     * if true, this indicates that all instances of the matched are single words. This makes it possible to use this patternmatcher directly after another patternmatcher without loosing information.
     */
    isSingleWord?: boolean;
};
export declare const markdownTextParameterNames: string[];
export declare const passwordTextParameterNames: string[];
export declare const referenceParameterNames: string[];
export declare const referencePluralParameterNames: string[];
export declare const generatedParameterNames: string[];
export declare const isGeneratedParameterName: (parameterName: string) => void;
export {};
//# sourceMappingURL=ParameterName.d.ts.map