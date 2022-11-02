import { Div } from "react-with-native";
import { MarkdownParse } from "code-types";
import { renderMarkdownChunk } from "./renderMarkdownChunk";
import { renderFrontmatter } from "./renderFrontMatter";
import { MarkdownParseRenderConfig } from "./types";

/**
 * renders the MardkownParse interface (including frontmatter)
 */
export const renderMarkdownParse = (
  markdownParse: MarkdownParse,
  config: MarkdownParseRenderConfig
) => {
  return (
    <Div>
      {renderFrontmatter(markdownParse.parameters, { renderSpacer: true })}
      {markdownParse.content?.map((chunk) =>
        renderMarkdownChunk(chunk, config)
      )}
    </Div>
  );
};
