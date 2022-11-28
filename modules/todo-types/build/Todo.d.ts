import { Id } from "model-types";
import { SpecialKvmdModelType } from "./SpecialKvmdModelType";
/**
 * The `Todo` KVMD model parses a `TodoFile` to find individual todos, their status, category, and more structured metadata.
 *
 * Can be chosen to be used for a `TodoFile` to create an alternative UI
 *
 * `TodoFile`s can be parsed to find this datastructure
 *
 * Will be great for insights.
 */
export interface Todo extends SpecialKvmdModelType {
    /**
     * If line contains a bolded text at the start, this will be the title
     */
    title?: string;
    /**
     * unix timestamp indicating when this thing needs to be done
     *
     * can be inferred from the line like:
     *
     * `(< 2023-08-20)`
     */
    deadlineAt?: number;
    /**
     * Inferred from the line
     */
    todo: string;
    /**
     * Can be indicated with
     *
     * ✅ = done
     * ❌ = wontdo
     * 🔧 = doing (maybe use 🟠?)
     *
     * (none = todo)
     */
    status: "todo" | "doing" | "wontdo" | "done";
    /**
     * can be indicated with '🚫'
     */
    isBlocked: boolean;
    /**
     * can be indicated with '❗️'
     */
    isCritical: boolean;
    /**
     * can be indicated with '🌐'
     */
    isInternetRequired: boolean;
    /**
     * can be inferred from @[PersonSlug]
     */
    assigned_personId?: Id;
    /**
     * can be inferred from a time indicator between parenthesises at the end of the sentence
     *
     * e.g. `(3h)` or `(20m)` or `(5d)`
     */
    duration?: number;
    durationTimeIndicator: "hours" | "days" | "minutes";
}
//# sourceMappingURL=Todo.d.ts.map