import { DefaultModelType } from "model-types";
import { BackendAsset } from "asset-type";
export interface TokiPonaMatrix extends DefaultModelType {
    tok: string;
    tokAudio?: BackendAsset;
    nl: string;
    nlAudio?: BackendAsset;
    en: string;
    enAudio?: BackendAsset;
    np: string;
    npAudio?: BackendAsset;
    "pt-br": string;
    "pt-brAudio"?: BackendAsset;
    em: string;
    category: string;
    type?: "noun" | "adjective" | "verb" | null;
}
//# sourceMappingURL=TokiPonaMatrix.d.ts.map