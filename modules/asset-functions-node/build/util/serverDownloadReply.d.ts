/**
 * Returns a `server.reply.download` or `server.reply.file` but also sets the `Content-Disposition` header correctly and the `Content-Type`
 *
 *
 *
 * For this I finally ended up using builtin server.js stuff, we don't need to set those manually...
 *
 * See https://serverjs.io/documentation/reply/#file-
 * And https://serverjs.io/documentation/reply/#download-
 *
 * See https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition
 *
 * NB: ensure to return the result of this function in your endpoint, otherwise it won't work
 */
export declare const serverDownloadReply: (absoluteAssetPath: string, isDownload: boolean) => any;
//# sourceMappingURL=serverDownloadReply.d.ts.map