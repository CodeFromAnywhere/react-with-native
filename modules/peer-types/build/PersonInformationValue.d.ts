import { DefaultModelType, Id, Slug } from "model-types";
/** key value data storage model for information about a person
 *
 * - the filename must identify the person this is about (`personSlug`)
 * - the categories are the different people and the person information categories
 * - the keys are the person information datapoints
 * - the values are the values of the datapoints that you stored about this user
 *
 * Example:
 *
 * the file `person-information-values/abraham-lincoln.md` could contain something like this:
 *
 * ```md
 * # life
 * born: 11-01-1777
 * died: 20-12-1812
 *
 * # identification
 * firstName: Abraham
 * lastName: Lincoln
 * ```
 *
 * NB: It's not going to be easy to keep this model in sync with the model it relies on!
 *
 * TODO: figure out if this kan be a `KeyValueMarkdownModelType` or `MarkdownModelType`
 */
export interface PersonInformationValue extends DefaultModelType {
    personId: Id;
    personInformationSlug: Slug;
    value: string;
}
//# sourceMappingURL=PersonInformationValue.d.ts.map