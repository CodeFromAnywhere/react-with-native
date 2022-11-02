export declare type CompressionConfig = {
    /**
     * used for audio
     */
    bitrate?: number;
    /**
     * Frames per second. Used for video
     */
    fps?: number;
    /**
     * Set the resolution. Will not upscale.
     *
     * Used for video and images
     */
    resolution?: {
        width: number;
        height: number;
    };
    /**
     * if true, will overwrite the original file
     */
    shouldOverwrite?: boolean;
};
//# sourceMappingURL=CompressionConfig.d.ts.map