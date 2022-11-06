/// <reference types="react" />
import { FunctionParameter } from "code-types";
export declare type ReferencableItem = {
    id: string;
    name?: string;
    slug?: string;
    categoryStackCalculated?: string[];
};
export declare type ReferencableModelData = {
    [modelName: string]: {
        data: ReferencableItem[] | undefined;
        isLoading?: boolean;
    };
};
export interface RenderableFunctionParameter extends FunctionParameter {
    /**
       * If true, this parameter will be a dbModel
       *
      
       If true, we assume a model-ready endpoint is used, so it will be rendered more cleanly (some fields are automatic)
      
       */
    isDbModel?: boolean;
    /**
     * Optionally, you can provide a render function here to render the title differently, for example to add buttons
     */
    renderButtons?: (parameter: RenderableFunctionParameter) => JSX.Element;
}
//# sourceMappingURL=types.d.ts.map