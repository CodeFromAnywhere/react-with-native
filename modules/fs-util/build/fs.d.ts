/// <reference types="node" />
/// <reference types="node" />
import { constants, rmSync, existsSync, accessSync, cpSync } from "graceful-fs";
import { cp as cpAsync } from "fs/promises";
import type { PathLike } from "graceful-fs";
export { PathLike };
import { Dir, Dirent, Stats } from "graceful-fs";
export { Dir, Dirent, Stats };
/**
 * all handy Fs types
 */
export declare type Fs = {
    PathLike: PathLike;
    Stats: Stats;
    Dir: Dir;
    Dirent: Dirent;
};
import gracefulFs from "graceful-fs";
/**
 * NB: for some reason some of the graceful-fs functions aren't complete. For example, I can't seem to copy folders with cp from graceful-fs (cp)
 *
 * For that one I added cpAsync.
 */
export declare const fs: {
    /**
     * cp from graceful doesn't copy folders for me for some reason
     */
    cpAsync: typeof cpAsync;
    constants: typeof constants;
    rmSync: typeof rmSync;
    existsSync: typeof existsSync;
    accessSync: typeof accessSync;
    cpSync: typeof cpSync;
    readFileSync: typeof gracefulFs.readFileSync;
    readdirSync: typeof gracefulFs.readdirSync;
    writeFileSync: typeof gracefulFs.writeFileSync;
    rename: typeof gracefulFs.rename.__promisify__;
    mkdir: typeof gracefulFs.mkdir.__promisify__;
    readFile: typeof gracefulFs.readFile.__promisify__;
    writeFile: typeof gracefulFs.writeFile.__promisify__;
    access: typeof gracefulFs.access.__promisify__;
    watch: (arg1: PathLike) => Promise<string>;
    appendFile: typeof gracefulFs.appendFile.__promisify__;
    chmod: typeof gracefulFs.chmod.__promisify__;
    chown: typeof gracefulFs.chown.__promisify__;
    copyFile: typeof gracefulFs.copyFile.__promisify__;
    cp: (arg1: string, arg2: string) => Promise<void>;
    rm: typeof gracefulFs.rm.__promisify__;
    readdir: typeof gracefulFs.readdir.__promisify__;
    realpath: typeof gracefulFs.realpath.__promisify__;
    stat: typeof gracefulFs.stat.__promisify__;
};
//# sourceMappingURL=fs.d.ts.map