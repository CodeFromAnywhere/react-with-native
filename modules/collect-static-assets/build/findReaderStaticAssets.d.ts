import { ReaderWebPage } from "webpage-types";
/**

markdown-renderer turns a relative link into this: ?mdpath=x&relativePath=y

for static, we need to turn it into something similar, but we need to guarantee no file collisions. simple!

we can just take the project-relative file path of the asset, and put it in /public/images in next.js. the final url of the asset in public next.js then becomes `images/[path/to/asset.jpg]`


 */
export declare const findReaderStaticAssets: (readerWebPages: ReaderWebPage[]) => Promise<string[] | undefined>;
//# sourceMappingURL=findReaderStaticAssets.d.ts.map