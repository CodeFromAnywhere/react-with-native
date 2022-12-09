export declare type AudioWithViews = {
    audioPath: string | null;
    /**
     * Unique key for the audio
     */
    audioKey?: string;
    audioDurationMs?: number;
    viewEmbeds: ViewEmbed[];
};
export declare type ViewEmbed = {
    /**
     * Unique key for the belonging audio, used to find the desired audio
     */
    audioKey?: string;
    /**
     * Either viewPath or title is required
     */
    title?: string;
    /**
     * Either viewPath or title is required
     */
    viewPath?: string;
    /**
     * Text in the alt of the image or video, but only if the alt is wrapped in quotes (e.g. "your spoken text"). Can be parsed into an audio and subtitles, and also a duration.
     */
    spokenText?: string;
    /**
     * Added afterwards
     */
    durationMs?: number;
};
//# sourceMappingURL=AudioWithViews.d.ts.map