import { SchemaProperty } from "schema-util";
import { TsInterface } from "code-types";
import { AugmentedAnyModelType } from "model-types";
export declare const getDataParameterNames: (properties: SchemaProperty[]) => string[];
export declare type Highlight = {
    slug?: string;
    id?: string;
};
/**
 
In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows

 */
export declare const ModelComponent: (props: {
    modelName?: string | undefined;
    highlight: Highlight;
}) => JSX.Element;
export declare type Action = {
    name: string;
    emoji: string;
    action: (item: AugmentedAnyModelType) => any;
};
export declare const CrudTable: (props: {
    tsInterface: TsInterface;
    data: AugmentedAnyModelType[];
    onEndReached?: (() => void) | undefined;
    highlight: Highlight;
    actions: Action[];
}) => JSX.Element;
//# sourceMappingURL=ModelComponent.d.ts.map