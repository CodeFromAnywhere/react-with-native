import { Div } from "react-with-native";
import { MarkdownChunk } from "code-types";
import { renderMarkdownTitle } from "./renderMarkdownTitle";
import { renderMarkdownContent } from "./renderMarkdownContent";
import { MarkdownParseRenderConfig } from "./types";

/**
 * renders a MarkdownChunk interface
 */
export const renderMarkdownChunk = (
  chunk: MarkdownChunk,
  config: MarkdownParseRenderConfig
) => {
  const title = chunk.title
    ? renderMarkdownTitle(chunk.title, chunk.level)
    : null;
  return (
    <Div>
      {title}
      {chunk.content ? renderMarkdownContent(chunk.content, config) : null}
      {chunk.children?.map((chunk) => renderMarkdownChunk(chunk, config))}
    </Div>
  );
};
