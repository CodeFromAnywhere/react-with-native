/// <reference types="react" />
/**

1. Have Bhagya 100% all in on creating a GPT controller
2. Make a component that can be interesting text on a page, a selection of it, and a prompt. Feed that to ChatGPT and show the result in a resizable window. Add ability to share this.
3. Ensure the share buttons work well and autoshare or backup to actually post myself on socials

*/
export declare const Share: (props: {
    /**
     * Can be a more specific text instead of the text of the whole page. Can be omitted. Will just take full page text
     */
    contextText?: string | undefined;
}) => JSX.Element;
