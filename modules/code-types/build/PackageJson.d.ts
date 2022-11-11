import { AnyModelType } from "model-types";
import { OperationConfig } from "./OperationConfig";
import { OperationClassification } from "./OperationClassification";
export declare type PackageInfoObject = {
    [key: string]: string;
};
/** DEPRECATED: TODO: should use OperationClassification */
export declare type ProjectType = "next" | "react-native" | "react" | "express" | "server" | "unknown";
/**
 * Sensible-global configurations
 *
 * TODO: rename to `typerepo`
 */
export declare type SensibleConfig = {
    /**
     * put on to true if minify doesn't work, so it will be skipped by `rebuildOperation`
     */
    skipMinify?: boolean;
    /**
     * If true, this is the root of a typerepo
     *
     * TODO: check if we can deprecate this
     */
    isSensibleProject?: boolean;
    /**
     * If true, it means that this operation has dependency on one or more operations that have been generated. We need to know this because it can easily cause circular imports if we don't filter them out sometimes
     */
    hasGeneratedDependencies?: boolean;
    /**
     * If set to true, this operation will not be included into the SDKs
     */
    isNotSdkable?: boolean;
};
/**
 * ---
 * dbStorageMethod: jsonSingle
 * operationRelativePath: package.json
 * ---
 */
export interface PackageJson extends AnyModelType {
    path?: string;
    name?: string;
    main?: string;
    source?: string;
    description?: string;
    version?: string;
    private?: boolean;
    author?: string | {
        [key: string]: string;
    };
    repository?: string | {
        type?: string;
        url: string;
        directory?: string;
    };
    homepage?: string;
    dependencies?: PackageInfoObject;
    devDependencies?: PackageInfoObject;
    peerDependencies?: PackageInfoObject;
    bin?: {
        [key: string]: string;
    };
    workspaces?: string[];
    scripts?: {
        [commandName: string]: string;
    };
    type?: OperationClassification;
    sensible?: SensibleConfig;
    operation?: OperationConfig;
}
//# sourceMappingURL=PackageJson.d.ts.map