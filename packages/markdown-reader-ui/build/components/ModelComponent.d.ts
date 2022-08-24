/// <reference types="react" />
import { TsInterface } from "code-types";
declare type Model = {
    data?: any[];
    index?: TsInterface;
};
/**
 


In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows


 */
export declare const ModelComponent: ({ model, modelName, refresh, highlight, loading, }: {
    loading?: boolean | undefined;
    model?: Model | null | undefined;
    modelName: string;
    refresh: () => void;
    highlight: {
        slug?: string;
        id?: string;
        index?: number;
    };
}) => JSX.Element;
export {};
//# sourceMappingURL=ModelComponent.d.ts.map