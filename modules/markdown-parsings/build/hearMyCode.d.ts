/**
GOAL:
- distribute read only (and audio only) material of my codebase
- it is also a fundament for other applications in the future
 */
import { MarkdownParse } from "code-types";
export declare type Sayable = {
    sayableText?: string;
    voiceFileRelativePath?: string;
};
/**
all mp3s should be stored in a separate location because we don't need them in the file system and we don't reference them, as they are data that is located by convention. all markdowns should have a linked `TextToSpeechAudio[]` which is auto updated every time `dev` is ran. `TextToSpeechAudio` also includes infromation about the `duration`, `voice` and more...

a bigger `.md.mp3` file is auto-created for every markdown file that concatenates all `sayable` audio pieces in the right order, but also includes the audio pieces in between.
*/
export declare const markdownToSayable: ({ markdown, markdownFilePath, }: {
    markdownFilePath: string;
    markdown: MarkdownParse;
}) => Sayable[];
/**
 * creates a summary for a whole bundle
 */
export declare const bundleToMd: ({ bundleConfigId, includeModules, }: {
    bundleConfigId: string;
    /** if true, also includes the private modules */
    includeModules?: boolean | undefined;
}) => string;
/**
 * summarizes the whole OS project into a markdown string
 */
export declare const projectToMd: ({ includeTodo, }: {
    includeTodo?: boolean | undefined;
    includeOperationDetails?: boolean | undefined;
}) => string;
/**
 * should print any file using a preconfigured printer (which can be local or remote. if remote and there is no connection, it should save the task for later)
 *
 * this function maybe needs "generateStaticSite"
 */
export declare const print: ({ absoluteFilePath }: {
    absoluteFilePath: string;
}) => void;
/**
 * Creates a single audiofile of a Sayable[] and stores that in a configured location
 */
export declare const sayablesToMp3: ({ sayables, destinationAbsoluteFilePath, }: {
    destinationAbsoluteFilePath: string;
    sayables: Sayable[];
}) => void;
/** selects a random operation */
export declare const selectRandomOperation: (baseFolderPath?: string) => Promise<string>;
/**
 * randomly plays mp3 summaries of operations on the project
 */
export declare const operationRadio: () => void;
/**
 * generates static site from a markdown file, with a menu on the right by default
 *
 * uses next.js
 *
 * because it is static, the markdown can be in the frontend assets and there is no need for a backend
 *
 *
 */
export declare const generateStaticSite: ({ projectRelativeMdFilePath, singlePage, }: {
    singlePage?: boolean | undefined;
    projectRelativeMdFilePath?: string | undefined;
}) => void;
/**
 * NB: Obviously, this is not the right place for this function, but none of these functions are properly located yet...
 *
 * should deploy any bundle or next project folder project to Vercel by first creating and pushing it into git, and then creating it in vercel through their api
 *
 * should return an url where the project will be served and the estimated time when it will be live
 */
export declare const deployNextProject: () => void;
//# sourceMappingURL=hearMyCode.d.ts.map