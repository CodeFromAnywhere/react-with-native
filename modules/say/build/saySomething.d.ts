#!/usr/bin/env node
export declare type SayOptions = {
    /**
     * Specify an absolute path to a file with some text
     */
    filePath?: string;
    /**
     * message string to be said
     */
    message?: string;
    speechRate?: number;
    voice?: string;
    outputFilePath?: string;
    audioDevice?: string;
    showProgress?: boolean;
    interactive?: string;
    fileFormat?: string;
    dataFormat?: string;
    bitRate?: number;
    quality?: number;
};
/**
 * TODO: do research what else is out there
 *
 * say [-v voice] [-r rate] [-o outfile [aud
io format options] | -n name:port | -a device] [-f f
ile | string ...]

DESCRIPTION
       This tool uses the Speech Synthesis manager
       to convert input text to audible speech and
       either play it through the sound output
       device chosen in System Preferences or save
       it to an AIFF file.


       for usage, see `man say`
 */
export declare const saySomething: (input: string | SayOptions) => Promise<void>;
export declare const test: () => Promise<boolean>;
export declare const sayDutch: (message: string) => void;
export declare const sayNepali: (message: string) => void;
export declare type SayLanguageEnum = "np" | "nl" | "en";
export declare const sayLanguage: (message: string, language: SayLanguageEnum) => void;
//# sourceMappingURL=saySomething.d.ts.map