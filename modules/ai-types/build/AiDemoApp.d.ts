import { SlugModelType } from "model-types";
/**
 * ---
 * dbStorageMethod: jsonSingle
 * ---
 */
export interface AiDemoApp extends SlugModelType {
    /**
     * Image should be available at public/demos/[slug].webp
     *
     * also, all contextual-prompts in folder `/db/contextual-prompts/[slug]/` are used as prompts for this demo
     *
     * If the slug is not present, the category of `ContextualPrompt` will be used
     */
    slug: string;
    /**
     * if you have, the use-case can launch on its own domain
     */
    domain?: string;
    headerTitle: string;
    hasImageBoolean?: boolean;
    headerSubtitle?: string;
    headerCtaHref?: string;
    headerCtaText?: string;
}
//# sourceMappingURL=AiDemoApp.d.ts.map