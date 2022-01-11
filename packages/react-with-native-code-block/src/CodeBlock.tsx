import React from "react";
import toast from "cogo-toast";
import copy from "copy-to-clipboard";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import PrismTheme from "prism-react-renderer/themes/nightOwl";
import { A, Svg, Div, Span } from "react-with-native";
import IoMdClipboard from "./IoMdClipboard.svg";

const CodeBlock = ({
  code,
  language,
}: {
  code: string;
  language: Language;
}) => {
  const copyToClipboard = () => {
    copy(code);
    toast.success(`Copied to clipboard`, {
      position: "bottom-center",
    });
  };

  return (
    <Highlight
      {...defaultProps}
      theme={PrismTheme}
      code={code.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} rounded p-4 relative overflow-auto w-1/2`}
          style={style}
        >
          <A
            onClick={copyToClipboard}
            className="absolute top-0 right-0 p-1 text-white cursor-pointer"
          >
            <Svg src={IoMdClipboard} width={18} height={18}/>
          </A>
          {tokens.map((line, i) => (
            <Div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <Span {...getTokenProps({ token, key })} />
              ))}
            </Div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
