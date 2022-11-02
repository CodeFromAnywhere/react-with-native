export type { ParsedPath } from "node:path";
export declare const path: {
    relative: (from: string, to: string) => string;
    parse: (path: string) => import("path").ParsedPath;
    basename: (path: string, suffix?: string | undefined) => string;
    delimiter: ";" | ":";
    dirname: (path: string) => string;
    extname: (path: string) => string;
    format: (pathObject: import("path").FormatInputPathObject) => string;
    isAbsolute: (path: string) => boolean;
    join: (...paths: string[]) => string;
    normalize: (path: string) => string;
    resolve: (...paths: string[]) => string;
    sep: "\\" | "/";
};
//# sourceMappingURL=path.d.ts.map