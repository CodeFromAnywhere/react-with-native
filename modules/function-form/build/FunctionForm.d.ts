/// <reference types="react" />
import { ReferencableModelData } from "simplified-schema-form";
import type { WithoutPromise } from "api-types";
/**
FunctionForm is a very easy way to create a frontend component that is connected with an api that is connected with a function on your backend (that can do anything)

All you need to provide is a `TsFunction`

This component only works if your `api` is up-to-date and your function is succesfully indexed using `typerepo`. For authentication, the `api` convention is used. See the `api` docs.

@see TsFunction
 */
export declare const FunctionForm: <T extends (...params: any[]) => any>(props: {
    /**
     * Must be given if you want to store assets with this
     */
    projectRelativeStorageFilePath?: string | undefined;
    /**
     * Must be given if you want to store assets with this
     */
    modelName?: string | undefined;
    /**
     * Add the tsfunction here imported from `your-operation/db/ts-functions/[function-name].json` directly
     *
     * Typed as `any` because you can import it from JSON, but this should be a `TsFunction`.
     *
     * @see TsFunction
     */
    tsFunction: any;
    /**
     * For js functions, provide the function to be executed here. If not given, it will try to use the api.
     *
     * NB: this should be the same function as the function you provide the index of at `tsFunction`
     */
    submitFunction?: T | undefined;
    /**
     * If you provide a `submitFunction`, you can also provide a callback that does something with the result of the function
     */
    withResult?: ((result: WithoutPromise<ReturnType<T>>) => void) | undefined;
    /**
     * callback to call after the api has resulted with a result
     *
     * Please type this yourself as `RealApiReturnType<"functionName">`
     *
     * If you don't provide this but an api call is done, we'll call `showStandardResponse`
     */
    withApiResult?: ((result: any) => void) | undefined;
    initialValues?: any[] | undefined;
    showResult?: boolean | undefined;
    /**
     * Provide referencable model data if you want to
     */
    referencableModelData?: ReferencableModelData | undefined;
}) => JSX.Element;
//# sourceMappingURL=FunctionForm.d.ts.map