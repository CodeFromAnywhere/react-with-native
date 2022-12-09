/**

- Implement a component that preloads all audios for the `ShortMarkdown` and lets you play one with a callback (look at https://stackoverflow.com/questions/47686345/playing-sound-in-react-js)
- If slide has audio belonging to it, find it and play it. Start at certain point, depending on which part you are at.
- Select the correct audio for every slide, and get the API url for it. Load it in into an `<audio>` element once you go to the slide.

*/
export declare const useMultiAudio: (urls: string[]) => {
    players: {
        url: string;
        playing: boolean;
    }[];
    toggle: (targetIndex: number) => () => void;
};
