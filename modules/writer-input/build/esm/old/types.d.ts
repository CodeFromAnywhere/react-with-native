import { TextEditingContext } from "./getContext";
export declare type EditorProps = {
    value: string;
    onChange: (value: string) => void;
    withContext?: (context: TextEditingContext) => void;
    className: string;
    projectRelativeFilePath?: string;
};
