import { TsIndexModelType } from "model-types";
/**
 * returns the paths of instances in a file, like functions, variables or interfaces
 */
export declare const getInstanceNames: (array: any[], relativePathFromProjectRoot: string) => string[];
/**
 * function that returns a filter function that can check if some object (that extends an TsIndexModelType) has the same relative file path from the project root
 */
export declare const hasSameProjectPath: (projectRelativePath: string) => <T extends TsIndexModelType>(x: T) => boolean;
export declare const getFileWithExtension: (absolutePath: string) => string;
//# sourceMappingURL=util.d.ts.map