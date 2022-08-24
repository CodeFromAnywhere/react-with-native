import { Index, Slug } from "./commonTypes";
import { Id } from "./id";
import { Language } from "./language";
import { TimeTypes } from "./time";
/**
 * This probably doesn't work, but it would be great if it would. This way I'd like to say that any model can have keys that end with "Id". These keys should always refer to Ids from other models.
 * Also, if a model has a key like this, it is inferred that there is also a key without the Id suffix which does or doesn't cointain the actual model specified by the id.
 *
 * If this cannot be done in typescript, it can be convention, and we can create a linter for this.
 *
 * Wooh!
 *
 * ```
const relations: RelationType = {
  helloId: "hoi",
  byeId: "bye",
};
```

The above seems to be working fine, so it IS possible!

TODO: think about it... should the name of the parameter be dependent on the strategy of how the model is stored? Maybe just call it all id, right? We can also make the index a string by just prepending a string to it.
 */
export declare type RelationType = {
    [key: `${string}Id`]: Id | undefined;
    [key: `${string}Slug`]: Slug | undefined;
    [key: `${string}Index`]: Index | undefined;
};
/**
 * use this model by default
 */
export declare type DefaultModelType = {
    id: Id;
} & TimeTypes & RelationType;
/**
 * use this model for things you want to store in CSV format
 *
 * TODO: add support for numbers, booleans, null, undefined
 */
export declare type CsvModelType = DefaultModelType & {
    [key: string]: string | number | boolean | null | undefined;
};
/**
 * use this model for things with a name that have an unique slug that can be used to identify the model
 */
export declare type SlugModelType = {
    /**
     * unique id used for compatibility purposes
     */
    id: string;
    /** kebab-case of the name, should be unique */
    slug: Slug;
    name: string;
    /**
     * @default en
     */
    language: Language;
} & TimeTypes & RelationType;
/**
 * handy model type for storing stuff in a Markdown file.
 *
 * another option could be to parse the markdown file, but to kiss we are going to just return markdown with the full markdown content
 */
export declare type MarkdownModelType = {
    /**
     * should be a stringified version of the index. used for compatibility with some general purpose functions
     */
    id: string;
    /**
     * human readable version of filename
     */
    name: string;
    /**
     * slugified filename
     */
    slug: string;
    markdown: string;
    /**
     * will be stored in frontmatter
     */
    [parameter: string]: string | number | boolean | undefined | null;
};
//# sourceMappingURL=common.d.ts.map