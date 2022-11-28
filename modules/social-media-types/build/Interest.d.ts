import { KeyValueMarkdownModelType, Slug } from "model-types";
export interface Interest extends KeyValueMarkdownModelType {
    parent_interestSlug: Slug;
    parent_interest: Interest;
}
//# sourceMappingURL=Interest.d.ts.map