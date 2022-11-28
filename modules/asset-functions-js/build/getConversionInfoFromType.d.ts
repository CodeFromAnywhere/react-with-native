/**
 * Received files contain a "type" like "audio/mp3" or "image/jpeg", etc...
 *
 * Here the extension is decided.
 *
 * NB: we also need to convert the file itself in case of mp3
 */
export declare const getConversionInfoFromType: (uploadMimeType: string | undefined) => {
    uploadMimeType: string | undefined;
    targetFormat: string | undefined;
    isUnchecked?: boolean | undefined;
};
//# sourceMappingURL=getConversionInfoFromType.d.ts.map