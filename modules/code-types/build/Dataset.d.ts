import { SlugModelType, Price, AugmentedAnyModelType } from "model-types";
/**
 * NB: keys are made `humanCase` and used in UI, so keep a readable name
 */
export declare const datasetFilterOperatorConst: readonly ["includesLetters", "includes", "startsWith", "endsWith", "equal", "notEqual", "greaterThan", "greaterThanOrEqual", "lessThan", "lessThanOrEqual"];
export declare type DatasetFilterOperator = typeof datasetFilterOperatorConst[number];
/**
 * Can be better, see https://www.w3schools.com/js/js_comparisons.asp
 */
export declare type DatasetFilter = {
    objectParameterKey: string;
    /**
     * This will sometines need to be casted
     */
    value: string;
    /**
     * Uses type equality
     */
    operator: DatasetFilterOperator;
    /**
     * TODO: Maybe add possibility to use a sort function from the SDK
     */
    filterFunctionName?: string;
};
/**
 * Sort by comparing the two values using the `Array.sort` method and Greater than and Less than operators.
 */
export declare type DatasetSort = {
    objectParameterKey: string;
    /**
     * sort normally or in reverse order
     */
    sortDirection?: "ascending" | "descending";
    /**
     * TODO:
     */
    sortFunctionName?: string;
};
/**
 * Model
 *
 * Make subsets of models that can be used for authorising someone for a subset of data, or transfering (or filtering out) subsets of data to a bundle.
 */
export interface Dataset extends SlugModelType, DatasetConfig {
    /**
     * The model you want to make a dataset from
     */
    modelName: string;
    /**
     * How much does this dataset cost?
     */
    price?: Price;
    defaultView?: ModelViewEnum;
    allowedModelViews?: ModelViewEnum[];
}
export declare const modelViews: readonly [{
    readonly view: "table";
    readonly emoji: "🍴";
}, {
    readonly view: "grid";
    readonly emoji: "⚃";
}, {
    readonly view: "timeline";
    readonly emoji: "⏳";
}, {
    readonly view: "tree";
    readonly emoji: "🌳";
}];
export declare type ModelView = typeof modelViews[number];
/**
 * Models should be able to be shown in multiple different views:
 *
 * - Table: useful to show models with much details
 * - Grid: useful to show models with a visual aspect and less details
 * - Timeline: useful to show text-related models
 * - Tree: useful to show a hierarchy
 */
export declare type ModelViewEnum = typeof modelViews[number]["view"];
export declare const datasetConfigKeys: readonly ["filter", "sort", "maxRows", "startFromIndex", "objectParameterKeys", "ignoreObjectParameterKeys", "view"];
export declare type DatasetConfigKey = typeof datasetConfigKeys[number];
export declare type DatasetConfigShape = {
    [key in DatasetConfigKey]?: any;
};
/**
 * The part of dataset that can be used in certain functions
 */
export interface DatasetConfig extends DatasetConfigShape {
    /**
     * Filters are applied after each other
     */
    filter?: DatasetFilter[];
    /**
     *
     */
    sort?: DatasetSort[];
    /**
     * Specify a max amount of items n
     */
    maxRows?: number;
    /**
     * If specified, slices the sorted array to omit the first n items;
     */
    startFromIndex?: number;
    /**
     * If specified, will only include these parameter keys of the model object. Otherwise all keys will be taken
     */
    objectParameterKeys?: string[];
    /**
     * If specified, will omit these keys when creating the dataset
     */
    ignoreObjectParameterKeys?: string[];
}
/**
 * If you don't specify `.objectParameterKeys` and `.ignoreObjectParameterKeys` in your `Dataset`, the item should stay itself, otherwise it should be a partial item
 *
 * I don't really like this though, it would be much better if a dataset could get the real type of the dataset item, so not just a partial, but a Pick. The problem with this is that we don't have an enum of the Dataset's.
 *
 * But since this is such an interesting model, I think we can easily create some code generation based on this, that would create these for you.
 */
export declare type DatasetItem<TItem extends AugmentedAnyModelType, TDataset extends DatasetConfig> = TDataset["objectParameterKeys"] extends undefined ? TDataset["ignoreObjectParameterKeys"] extends undefined ? TItem : Partial<TItem> : Partial<TItem>;
//# sourceMappingURL=Dataset.d.ts.map