import { AllInputType } from "./forAllFolders";
/**
 * removes all xyz for a folder
 *
 * make sure to specify which type you want.... folder or file most likely
 */
export declare const removeAll: ({ basePath, fileName, folderName, type, shell, ignore, onlyRoot, }: Omit<AllInputType, "command">) => Promise<void>;
//# sourceMappingURL=removeAll.d.ts.map