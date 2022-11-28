import type { DbModels } from "sdk-db";
import { SimplifiedSchema } from "code-types";
/**
 * Gets the frontmatterSchema of any markdown model. This should contain all elements that are required to be in the frontmatter of the markdown
 */
export declare const getFrontmatterSchema: (markdownModelName: keyof DbModels | undefined) => Promise<SimplifiedSchema | undefined>;
//# sourceMappingURL=getFrontmatterSchema.d.ts.map