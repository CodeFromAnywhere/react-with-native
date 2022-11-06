import { SubtextConfig, SubwordConfig } from "writer-types";
/**
 * Interesting... In order to auto-generate a form for this, we need to combine the two into a simple function that does NOTHING. Why? Because we can't store it in the database, it is better to keep this in the frontend...
 *
 * NB: DEPRECATED: TODO: function isn't used. Since the indexation didn't go right, the solution with a `SimplifiedSchemaForm` ended up being easier. Keeping it here because I need to fix the indexation nonetheless.
 */
export declare const editSubtextSubwordConfig: (subtextConfig: SubtextConfig, subwordConfig: SubwordConfig) => {
    subtextConfig: SubtextConfig;
    subwordConfig: SubwordConfig;
};
