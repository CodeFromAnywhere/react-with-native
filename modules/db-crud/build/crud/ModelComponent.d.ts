/// <reference types="react" />
import { Highlight } from "./types";
/**
 
In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows

 */
export declare const ModelComponent: (props: {
    modelName?: string | undefined;
    highlight: Highlight;
}) => JSX.Element;
//# sourceMappingURL=ModelComponent.d.ts.map