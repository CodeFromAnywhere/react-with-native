import { MarkdownParse } from "markdown-types";
import { Sayable } from "../expose/sayablesToMp3";
/**
all mp3s should be stored in a separate location because we don't need them in the file system and we don't reference them, as they are data that is located by convention. all markdowns should have a linked `TextToSpeechAudio[]` which is auto updated every time `dev` is ran. `TextToSpeechAudio` also includes infromation about the `duration`, `voice` and more...

a bigger `.md.mp3` file is auto-created for every markdown file that concatenates all `sayable` audio pieces in the right order, but also includes the audio pieces in between.
*/
export declare const markdownToSayable: ({ markdown, markdownFilePath, }: {
    markdownFilePath: string;
    markdown: MarkdownParse;
}) => Sayable[];
//# sourceMappingURL=markdownToSayable.d.ts.map