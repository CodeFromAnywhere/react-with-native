/// <reference types="react" />
import { Frontmatter } from "matter-types";
/**
 * Renders markdown frontmatter parameters (and optionally a spacer)
 */
export declare const renderFrontmatter: (parameters: Frontmatter, config?: {
    renderSpacer?: boolean;
}) => JSX.Element | null;
