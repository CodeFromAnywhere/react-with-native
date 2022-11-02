/**
 * type interface that can be used to summarize multiple files
 */
export declare type SizeSummary = {
    /**
     * if this is about multiple files, the number of files is specified here
     */
    numberOfFiles?: number;
    /**
     * amount of characters
     */
    characters: number;
    /**
     * amount of lines
     */
    lines: number;
    /**
     * amount of bytes
     */
    bytes: number;
    /**
     * rounded, amount of lines per file (averaged)
     */
    linesPerFile: number;
    /**
     * rounded, amount of characters per line (averaged)
     */
    charactersPerLine: number;
    /**
     * rounded, amount of bytes per character
     */
    bytesPerCharacter: number;
};
/**
 * objective size measurements of all files in a folder
 *
 * summary for a folder should contain file-summaries for different filetypes and an overal file summary
 */
export declare type FolderSummary = {
    size: SizeSummary;
    textSize: SizeSummary;
    dataSize: SizeSummary;
    codeSize: SizeSummary;
};
//# sourceMappingURL=FolderSummary.d.ts.map