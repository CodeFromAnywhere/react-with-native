import { SlugModelType, Price, AugmentedAnyModelType } from "model-types";
/**
 * Can be better, see https://www.w3schools.com/js/js_comparisons.asp
 */
export declare type DatasetFilter = {
    objectParameterKey: string;
    value: string | number | boolean | null | undefined;
    /**
     * Uses type equality
     */
    operator: "equal" | "notEqual" | "gt" | "gte" | "lt" | "lte";
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
}
/**
 * The part of dataset that can be used in certain functions
 */
export interface DatasetConfig {
    /**
     * Filters are applied after each other
     */
    filter?: DatasetFilter | DatasetFilter[];
    /**
     *
     */
    sort?: DatasetSort | DatasetSort[];
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
export declare type DatasetItem<TItem extends AugmentedAnyModelType, TDataset extends Dataset> = TDataset["objectParameterKeys"] extends undefined ? TDataset["ignoreObjectParameterKeys"] extends undefined ? TItem : Partial<TItem> : Partial<TItem>;
//# sourceMappingURL=Dataset.d.ts.map