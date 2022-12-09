/// <reference types="node" />
import gracefulFs from "graceful-fs";
import type { PathLike } from "graceful-fs";
import { Dir, Dirent, Stats } from "graceful-fs";
export { PathLike };
export { Dir, Dirent, Stats };
/**
 * all handy Fs types
 */
export type Fs = {
    PathLike: PathLike;
    Stats: Stats;
    Dir: Dir;
    Dirent: Dirent;
};
/**
 * NB: for some reason some of the graceful-fs functions aren't complete. For example, I can't seem to copy folders with cp from graceful-fs (cp)
 *
 * For that one I added cpAsync.
 */
export declare const fs: {
    /**
     * cp from graceful doesn't copy folders for me for some reason
     *
     * NB: this is not graceful!
     */
    cpAsync: typeof gracefulFs.promises.cp;
    constants: typeof gracefulFs.constants;
    readFileSync: typeof gracefulFs.readFileSync;
    readdirSync: typeof gracefulFs.readdirSync;
    writeFileSync: typeof gracefulFs.writeFileSync;
    rmSync: typeof gracefulFs.rmSync;
    existsSync: typeof gracefulFs.existsSync;
    accessSync: typeof gracefulFs.accessSync;
    cpSync: typeof gracefulFs.cpSync;
    rename: typeof gracefulFs.rename.__promisify__;
    mkdir: typeof gracefulFs.mkdir.__promisify__;
    readFile: typeof gracefulFs.readFile.__promisify__;
    writeFile: typeof gracefulFs.writeFile.__promisify__;
    access: typeof gracefulFs.access.__promisify__;
    watch: (arg1: gracefulFs.PathLike) => Promise<string>;
    appendFile: typeof gracefulFs.appendFile.__promisify__;
    chmod: typeof gracefulFs.chmod.__promisify__;
    chown: typeof gracefulFs.chown.__promisify__;
    copyFile: typeof gracefulFs.copyFile.__promisify__;
    cp: (arg1: string | import("url").URL, arg2: string | import("url").URL) => Promise<void>;
    rm: typeof gracefulFs.rm.__promisify__;
    readdir: typeof gracefulFs.readdir.__promisify__;
    realpath: typeof gracefulFs.realpath.__promisify__;
    stat: typeof gracefulFs.stat.__promisify__;
};
//# sourceMappingURL=fs.d.ts.map