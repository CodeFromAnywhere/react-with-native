import { ParameterName } from "code-types";
export declare type PatternMatcher = {
    pattern: string;
    matches: string;
    /**
     * if true, this indicates that all instances of the matched are single words. This makes it possible to use this patternmatcher directly after another patternmatcher without loosing information.
     */
    isSingleWord?: boolean;
};
export declare const patternMatchers: PatternMatcher[];
/**

## Form input types

How do we show different UI's based on certain things we know about some parameter (name + type)? There are many things

- All "image" or "xxxImage" should be Image + camera inputs
- All "asset" or "xxxAsset" should be File inputs
- All "recording" or "xxxAudio" should be mic inputs
- All "position" or "xxxPosition" should be coordinates which should be pickable on the map
- All "path" or "xxxPath" should be an input where you can select a relative path from project root or operation src root, depending on what we need. It needs to be clear what kind of paths are allowed, so we need to think about all the options and if we can all put that in the parameter name (would be best) or if we need to use the description...
 */
export declare const parameterNames: ParameterName[];
/**
 * Any parameter names that should render a textArea
 */
export declare const markdownTextParameterNames: string[];
export declare const passwordTextParameterNames: string[];
export declare const referenceParameterNames: string[];
export declare const referencePluralParameterNames: string[];
export declare const generatedParameterNames: string[];
export declare const isGeneratedParameterName: (parameterName: string) => void;
export declare const getParameterContentType: (parameterName: string) => void;
/**
 * this is part of the database convention
 */
export declare const isCalculatedParameter: (parameterName: string) => boolean;
//# sourceMappingURL=name-conventions.d.ts.map