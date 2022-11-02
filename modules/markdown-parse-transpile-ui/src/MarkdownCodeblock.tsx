import { renderMarkdownContent } from "./renderMarkdownContent";
import { createCodeblockMarkdown } from "ui-util";
import { Div } from "react-with-native";
import { useState } from "react";
import { ClickableIcon } from "clickable-icon";
export type CodeblockMode = "preview" | "scroll" | "full";

export const defaultExpandedMode: CodeblockMode = "scroll";
export const defaultMinimalMode: CodeblockMode = "preview";

/**
 * Renders a markdown codeblock with a text as content and an optional extension
 *
 */
export const MarkdownCodeblock = (props: {
  text: string;
  extension?: string;
  /**
   * If set, this is the mode when minimised
   */
  minimalMode?: CodeblockMode;
  /**
   * If set, this is the mode when expanded
   */
  expandedMode?: CodeblockMode;
  /**
   * if true, by default it's expanded
   */
  isInitiallyExpanded?: boolean;
  /**
   * if true, mode cannot be changed
   */
  isModeStatic?: boolean;
}) => {
  const {
    text,
    extension,
    expandedMode,
    isInitiallyExpanded,
    minimalMode,
    isModeStatic,
  } = props;

  const [isExpanded, setIsExpanded] = useState(isInitiallyExpanded);

  const mode = isExpanded
    ? expandedMode || defaultExpandedMode
    : minimalMode || defaultMinimalMode;

  const realText =
    mode === "preview"
      ? text.length > 200
        ? text.slice(0, 198) + ".."
        : text
      : text;

  return (
    <Div className="w-full">
      {isModeStatic ? null : (
        <Div>
          <ClickableIcon
            onClick={() => {
              setIsExpanded(!isExpanded);
            }}
            emoji={isExpanded ? "➖ Minimise" : "➕ Expand"}
          />
        </Div>
      )}

      <Div
        className={
          mode === "scroll"
            ? "overflow-y-auto h-80"
            : mode === "preview"
            ? "opacity-25 bg-black"
            : undefined
        }
      >
        {renderMarkdownContent(
          createCodeblockMarkdown(realText, extension || null),
          // The config below is not needed since all that is renderedd is a codeblock, which doesn't need to render links etc.
          {
            projectRelativeBaseFolderPath: "",
            projectRelativeMarkdownFilePath: "",
          }
        )}
      </Div>
    </Div>
  );
};
