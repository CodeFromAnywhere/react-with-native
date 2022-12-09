/**
GOAL:
- distribute read only (and audio only) material of my codebase
- it is also a fundament for other applications in the future
 */
export declare type Sayable = {
    sayableText?: string;
    voiceFileRelativePath?: string;
};
/**
 * Creates a single audiofile of a Sayable[] and stores that in a configured location
 */
export declare const sayablesToMp3: (config: {
    destinationAbsoluteFilePath: string;
    sayables: Sayable[];
}) => void;
//# sourceMappingURL=sayablesToMp3.d.ts.map