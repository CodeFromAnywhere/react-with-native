export declare const compressImage: (absoluteSourceImagePath: string, config?: {
    sizeWidthPx?: number;
    aspectRatio?: {
        x: number;
        y: number;
    };
    quality?: number;
    targetFormat?: "webp" | "png" | "mp4";
    keepOriginal?: boolean;
    isDebug?: boolean;
}) => Promise<string | undefined>;
//# sourceMappingURL=compressImage.d.ts.map