/// <reference types="node" />
export type { ParsedPath } from "node:path";
export declare const path: {
    parse: (p: string) => import("path").ParsedPath;
    basename: (p: string, ext?: string | undefined) => string;
    delimiter: string;
    dirname: (p: string) => string;
    extname: (p: string) => string;
    format: (pP: import("path").FormatInputPathObject) => string;
    isAbsolute: (p: string) => boolean;
    join: (...paths: string[]) => string;
    normalize: (p: string) => string;
    resolve: (...pathSegments: string[]) => string;
    sep: string;
};
//# sourceMappingURL=path.d.ts.map