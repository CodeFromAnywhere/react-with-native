import { getImplicitId } from "markdown-parse-js";
import { P } from "react-with-native";

/**
 * renders a markdown title (level should be 1 for h1 and 6 for h6)
 */
export const renderMarkdownTitle = (title: string, level: number) => {
  const levelSize =
    level === 1
      ? "text-3xl"
      : level === 2
      ? "text-2xl"
      : level === 3
      ? "text-xl"
      : level === 4
      ? "text-lg"
      : level === 5
      ? "text-md"
      : level === 6
      ? "text-sm"
      : "text-xs";

  return (
    <P id={getImplicitId(title)} className={levelSize}>
      {title}
    </P>
  );
};
