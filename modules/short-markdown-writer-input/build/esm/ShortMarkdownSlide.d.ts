/// <reference types="react" />
import { ViewEmbed } from "short-markdown-types";
export declare const ShortMarkdownSlide: (props: {
    item: ViewEmbed;
    index: number;
    projectRelativeFilePath: string;
    setSlide: (index: number) => void;
    isAutoplay?: boolean | undefined;
}) => JSX.Element;
