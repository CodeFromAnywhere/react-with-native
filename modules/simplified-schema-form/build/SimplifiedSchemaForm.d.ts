import { ReferencableModelData, RenderableFunctionParameter } from "./types";
/**
Recursive component that renders a form for a SimplifiedSchema
 */
export declare const SimplifiedSchemaForm: <TValues extends any[]>(props: {
    /** unique id for this form */
    id: string;
    /**
     * Stack of parameterNames of parents if the form was loaded as a child (subset) of another form, the first item being the grandest parent.
     */
    parameterNameStack?: string[] | undefined;
    /**
     * sometimes you have multiple schemas that you want to put in a form, for example if you have a function that takes multiple parameters
     */
    parameters: RenderableFunctionParameter[];
    /**
     * the value is a json with the structure of the simplified schema. with this you can also prefill the form
     *
     * every item in the value array represents the value of the respective parameter
     */
    values: TValues | undefined;
    onChange: (values: TValues) => void;
    /**
     * model data (can be filtered) that can be referenced in the schema. This is used to fill the form select inputs so a value can be selected.
     *
     * Only fields needed: name, id, slug
     */
    referencableModelData?: ReferencableModelData | undefined;
    /** show more info for devs */
    isDebug?: boolean | undefined;
    /**
     * used for showing assets in the textarea view
     */
    projectRelativeStorageFilePath?: string | undefined;
    /**
     * If you're editing or creating an item, this should be its name. Can be used for naming assets
     *
     * Preferably, this must be realtime, based on the state of this very form, so the default-name of assets can change with the form state...
     */
    itemNameOrId?: string | undefined;
    /**
     * Must be provided in case an asset is stored in a db model
     */
    modelName?: string | undefined;
}) => JSX.Element | null;
//# sourceMappingURL=SimplifiedSchemaForm.d.ts.map