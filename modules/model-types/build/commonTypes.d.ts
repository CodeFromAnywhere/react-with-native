export declare type Json = string | number | boolean | null | {
    [key: string]: Json;
} | Json[];
export declare type Email = string;
export declare function isEmail(email: string): boolean;
/**
 * use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example.
 */
export declare type Slug = string;
/**
 * used for md files. index is the line
 */
export declare type Index = number;
/**
 * text can be in multiple formats.
 * most texts in data are probably just text
 * but they can also contain markdown
 * ----
 * if there is a data model with just a single text and it is clear from the name of the model what it should be, better call it either text or markdown.
 */
export declare type Text = string;
/**
 * a string that is known to contain markdown.
 */
export declare type Markdown = string;
/**
 * valid url, can be validated
 */
export declare type Url = string;
/**
 * country code without +
 */
export declare type PhoneNumber = number;
//# sourceMappingURL=commonTypes.d.ts.map