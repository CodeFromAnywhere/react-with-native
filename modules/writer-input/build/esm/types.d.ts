import { WriterType } from "filename-conventions";
import { MappedObject } from "js-util";
import { AugmentedWord } from "markdown-reader-types";
export declare type DefaultWriterProps = {
    writerType: WriterType;
    value: string;
    onChange: (value: string) => void;
    filename?: string;
    augmentedWordObject?: MappedObject<AugmentedWord>;
    projectRelativeBaseFolderPath: string;
    projectRelativeMarkdownFilePath: string;
};
