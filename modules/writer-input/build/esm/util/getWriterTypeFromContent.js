import { tryParseJson } from "try-parse-json";
import { isTypescript } from "./isTypescript";
/**
 *
 */
export var getWriterTypeFromContent = function (text) {
    if (isTypescript(text))
        return "typescript";
    // NB: json is something else
    if (tryParseJson(text))
        return "other";
    // by default, assume markdown
    return "markdown";
};
