import { DefaultModelType } from "model-types";
export interface WeirdTypescriptFile<TFiles extends {
    [fileName: string]: {
        [variableName: string]: {
            value: any;
            type: "variable" | "enum";
        };
    };
}, TDbQuerySelector extends {
    fileName: keyof TFiles;
}> extends DefaultModelType {
    variables: TFiles[TDbQuerySelector["fileName"]];
}
//# sourceMappingURL=WeirdTypescriptFile.d.ts.map