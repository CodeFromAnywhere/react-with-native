import { DbStorageMethod } from "code-types";
import { Frontmatter } from "matter-types";
/**
 * Gets db storage method for indexation
 *
 * 1) Frontmatter overrules everything
 * 2) Special extensions are looked at
 *
 */
export declare const getDbStorageMethod: (config: {
    typeName: string;
    frontmatter: Frontmatter;
    extensions?: string[] | undefined;
}) => DbStorageMethod | undefined;
//# sourceMappingURL=getDbStorageMethod.d.ts.map