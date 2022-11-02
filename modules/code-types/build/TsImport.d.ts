import { TsIndexModelType } from "model-types";
import { TsComment } from "./TsComment";
import { ImportClassification } from "./TypescriptIndex";
/**
 */
export interface TsImport extends TsIndexModelType {
    /**
     * surrounding comments and comments inside of the import
     */
    comments: TsComment[];
    module: string;
    /**
     * TODO: not sure, but I believe alias should be defined at the import, not at the export, right?
     */
    alias?: string;
    classification: ImportClassification;
    /**
     * sometimes the import statement module referenced cannot be found, in that case it cannot be known whether the import should contain a type or value, so it will be undefined.
     */
    type: "value" | "type" | undefined;
    /**
     * only for type exports. tells you whether or not the type has one or more generic parameter(s)
     */
    hasGeneric?: boolean;
    isAbsolute: boolean;
    isModuleResolved: boolean;
    isModuleFromMonorepo: boolean;
}
//# sourceMappingURL=TsImport.d.ts.map