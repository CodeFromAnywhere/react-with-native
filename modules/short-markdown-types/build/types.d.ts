/**
 * Duration is required, and either title or viewPath must be there
 */
export declare type ShortMarkdownSlide = {
    title?: string;
    viewPath?: string;
    /**
     * First calculate this based on the belonging audio, its duration, and that divided by the amount of views that belong to that audio
     */
    durationMs: number;
    /**
     * Calculaled
     */
    startMs?: number;
    /**
     * LATER:
     */
    subtitle?: string;
};
/**
 *
 */
export declare type AudioTrackItem = {
    relativeAudioFilePath: string;
    durationMs?: number;
    startMs?: number;
};
//# sourceMappingURL=types.d.ts.map