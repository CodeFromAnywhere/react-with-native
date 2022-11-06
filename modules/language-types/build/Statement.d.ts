import { MarkdownModelType, Slug } from "model-types";
import { Word } from "./Word";
export interface Statement extends MarkdownModelType {
    /**
     * your statement: definition, fact, question, quote
     */
    name: string;
    type?: "definition" | "fact" | "question" | "quote";
    url?: string;
    author?: string;
    /**
     * number [0-1] representing agreement
     *
     * - 1 meaning 100% agreement
     * - 0 means 0% agreement or complete disagreement
     */
    agreement?: number;
    /**
     * defaults to 0.5 meaning average importancy
     * this could be either a calculated or set property.
     * could it be calculated on your value hierarchy?
     * not sure if this is practical (yet) but still a very interesting property to have, or somehow calculate.
     */
    importancyCalculated?: number;
    /**
     * A statement can connect to one or more words.
     */
    wordSlugs: Slug[];
    words?: Word[];
}
//# sourceMappingURL=Statement.d.ts.map