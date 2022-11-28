declare type Success = boolean;
/**
 * Builds and minifies the src
 */
export declare const yarnBuild: (operationBasePath: string, config?: {
    /**
     * if true, build folder will be removed first
     */
    rmFirst?: boolean;
    skipMinify?: boolean;
}) => Promise<Success>;
export {};
//# sourceMappingURL=yarnBuild.d.ts.map