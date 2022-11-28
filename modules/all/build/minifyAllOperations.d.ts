import { AllInputType } from "./forAllFolders";
/**
 * minify all operations everywhere. optionally:
 * - enable the shell
 * - specify a basepath (tools by default)
 */
export declare const minifyAllOperations: (config?: Omit<AllInputType, "type" | "command" | "callback" | "fileName" | "folderName" | "ignore">) => Promise<void>;
//# sourceMappingURL=minifyAllOperations.d.ts.map