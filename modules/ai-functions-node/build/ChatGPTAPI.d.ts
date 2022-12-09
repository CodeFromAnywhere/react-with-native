import { type ChromiumBrowserContext, type Page } from "playwright";
export declare class ChatGPTAPI {
    protected _userDataDir: string;
    protected _headless: boolean;
    protected _markdown: boolean;
    protected _chatUrl: string;
    protected _browser: ChromiumBrowserContext | void;
    protected _page: Page;
    /**
     * @param opts.userDataDir — Path to a directory for storing persistent chromium session data
     * @param opts.chatUrl — OpenAI chat URL
     * @param opts.headless - Whether or not to use headless mode
     * @param opts.markdown — Whether or not to parse chat messages as markdown
     */
    constructor(opts?: {
        /** @defaultValue `'/tmp/chatgpt'` **/
        userDataDir?: string;
        /** @defaultValue `'https://chat.openai.com/'` **/
        chatUrl?: string;
        /** @defaultValue `false` **/
        headless?: boolean;
        /** @defaultValue `true` **/
        markdown?: boolean;
    });
    init(opts?: {
        auth?: "blocking" | "eager";
    }): Promise<Page | undefined>;
    getIsSignedIn(): Promise<boolean>;
    getLastMessage(): Promise<string | null>;
    getPrompts(): Promise<string[]>;
    getMessages(): Promise<string[]>;
    sendMessage(message: string): Promise<string>;
    close(): Promise<void | undefined>;
    protected _getInputBox(): Promise<any>;
}
//# sourceMappingURL=ChatGPTAPI.d.ts.map