"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,t=1,i=arguments.length;t<i;t++)for(var a in r=arguments[t])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},__assign.apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,r,t,i){void 0===i&&(i=t);var a=Object.getOwnPropertyDescriptor(r,t);a&&!("get"in a?!r.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return r[t]}}),Object.defineProperty(e,i,a)}:function(e,r,t,i){void 0===i&&(i=t),e[i]=r[t]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,r){Object.defineProperty(e,"default",{enumerable:!0,value:r})}:function(e,r){e.default=r}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&__createBinding(r,e,t);return __setModuleDefault(r,e),r};Object.defineProperty(exports,"__esModule",{value:!0}),exports.fs=exports.Stats=exports.Dirent=exports.Dir=void 0;
// Normal deps
var graceful_fs_1=__importStar(require("graceful-fs")),util_1=require("util"),promises_1=require("fs/promises"),graceful_fs_2=require("graceful-fs");Object.defineProperty(exports,"Dir",{enumerable:!0,get:function(){return graceful_fs_2.Dir}}),Object.defineProperty(exports,"Dirent",{enumerable:!0,get:function(){return graceful_fs_2.Dirent}}),Object.defineProperty(exports,"Stats",{enumerable:!0,get:function(){return graceful_fs_2.Stats}});
// Callbacks that need to be promisified
// TODO: Provide doc-comments for these functions, as they have now been lost...
var rename=(0,util_1.promisify)(graceful_fs_1.default.rename),mkdir=(0,util_1.promisify)(graceful_fs_1.default.mkdir),readFile=(0,util_1.promisify)(graceful_fs_1.default.readFile),writeFile=(0,util_1.promisify)(graceful_fs_1.default.writeFile),access=(0,util_1.promisify)(graceful_fs_1.default.access),watch=(0,util_1.promisify)(graceful_fs_1.default.watch),appendFile=(0,util_1.promisify)(graceful_fs_1.default.appendFile),chmod=(0,util_1.promisify)(graceful_fs_1.default.chmod),chown=(0,util_1.promisify)(graceful_fs_1.default.chown),copyFile=(0,util_1.promisify)(graceful_fs_1.default.copyFile),cp=(0,util_1.promisify)(graceful_fs_1.default.cp),rm=(0,util_1.promisify)(graceful_fs_1.default.rm),readdir=(0,util_1.promisify)(graceful_fs_1.default.readdir),realpath=(0,util_1.promisify)(graceful_fs_1.default.realpath),stat=(0,util_1.promisify)(graceful_fs_1.default.stat),readFileSync=graceful_fs_1.default.readFileSync,readdirSync=graceful_fs_1.default.readdirSync,writeFileSync=graceful_fs_1.default.writeFileSync,gracefulFsPromises={
// sync, should be discouraged
readFileSync:readFileSync,readdirSync:readdirSync,writeFileSync:writeFileSync,rmSync:graceful_fs_1.rmSync,existsSync:graceful_fs_1.existsSync,accessSync:graceful_fs_1.accessSync,cpSync:graceful_fs_1.cpSync,
// promisified stuff
rename:rename,mkdir:mkdir,readFile:readFile,writeFile:writeFile,access:access,watch:watch,appendFile:appendFile,chmod:chmod,chown:chown,copyFile:copyFile,cp:cp,rm:rm,readdir:readdir,realpath:realpath,stat:stat},gracefulFsConstants={constants:graceful_fs_1.constants},fsPromises={
/**
     * cp from graceful doesn't copy folders for me for some reason
     *
     * NB: this is not graceful!
     */
cpAsync:promises_1.cp};
/**
 * NB: for some reason some of the graceful-fs functions aren't complete. For example, I can't seem to copy folders with cp from graceful-fs (cp)
 *
 * For that one I added cpAsync.
 */
exports.fs=__assign(__assign(__assign({},gracefulFsPromises),gracefulFsConstants),fsPromises);
//# sourceMappingURL=fs.js.map