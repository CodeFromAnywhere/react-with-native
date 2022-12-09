import { queries } from "api";
import { FancyLoader } from "fancy-loader";
import * as React from "react";
import { Div } from "react-with-native";
import { ShortMarkdownPlayer } from "./ShortMarkdownPlayer";
/**


the newer one, eventually to replace `ContextTextArea`
<SmartContentEditableDivInput
  writerType={writerType}
  value={value}
  onChange={onChange}
  markdownParseRenderConfig={markdownParseRenderConfig}
/>

*/
export var ShortStudio = function (props) {
    var _a;
    var projectRelativeFilePath = props.projectRelativeFilePath;
    var shortMarkdownQuery = queries.useGetOrGenerateShortMarkdown(projectRelativeFilePath);
    var shortMarkdown = ((_a = shortMarkdownQuery.data) === null || _a === void 0 ? void 0 : _a.result) || undefined;
    // console.log({ shortMarkdown });
    return (React.createElement(Div, { className: "w-full h-full flex flex-1 flex-col" },
        shortMarkdownQuery.isLoading ? React.createElement(FancyLoader, null) : null,
        React.createElement(ShortMarkdownPlayer, { shortMarkdown: shortMarkdown, projectRelativeFilePath: projectRelativeFilePath })));
};
