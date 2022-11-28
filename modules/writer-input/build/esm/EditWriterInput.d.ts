/// <reference types="react" />
import { DbModels } from "sdk-db";
/**


the newer one, eventually to replace `ContextTextArea`
<SmartContentEditableDivInput
  writerType={writerType}
  value={value}
  onChange={onChange}
  markdownParseRenderConfig={markdownParseRenderConfig}
/>

*/
export declare const EditWriterInput: (props: {
    onChange: (value: string) => void;
    value: string;
    projectRelativeFilePath: string;
    markdownModelName?: keyof DbModels | undefined;
}) => JSX.Element;
