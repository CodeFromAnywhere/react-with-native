import { DefaultModelType, Language } from "model-types";
declare type LanguageMatrix = {
    [language in Language]?: string;
};
export interface LanguageMatrixModel extends LanguageMatrix, DefaultModelType {
}
/** later, for performance reasons */
export declare type IndexedLanguageMatrix = {
    [baseLanguageWord: string]: LanguageMatrix;
};
export {};
//# sourceMappingURL=LanguageMatrix.d.ts.map