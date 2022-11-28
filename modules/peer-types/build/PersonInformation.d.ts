import { KeyValueMarkdownModelType, Slug } from "model-types";
/**
 * categorisation model for informormation about a person
 *
 * - the keys are the things you want to store
 * - the values are the descriptions of the thing to be stored
 * - the categories can organise the things you want to store better
 */
export interface PersonInformation extends KeyValueMarkdownModelType {
    parent_personInformationSlug?: Slug;
    parent_personInformation?: PersonInformation;
}
//# sourceMappingURL=PersonInformation.d.ts.map