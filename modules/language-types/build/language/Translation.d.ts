import { DefaultModelType, Language, Markdown, Text } from "model-types";
/**
 * We could have a Translation model that collects any translation for any key for any model for any language.
 * The original source text is still stored in the models itself, and every model has just one language.
 *
 * If you want a markdown or text key to be translated, add `{parameter}_TranslationId` to the model. The translation can then be generated on-demand and improved afterwards.
 */
export interface Translation extends DefaultModelType {
    /**
     * Not sure if this is needed. Do we need to know where any given translation comes from? It would be a lot of searching otherwise, maybe. Maybe this should even be an array if we want to avoid duplication, but this seems to make everything more complex. Maybe just skip sourcePath for the POC.
     */
    sourcePath: string;
    language: Language;
    markdown: Markdown;
    text: Text;
}
export interface NepaliEnglishTranslationMatrix extends DefaultModelType {
    en: string;
    index: number;
    ne: string;
}
//# sourceMappingURL=Translation.d.ts.map