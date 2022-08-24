"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var r,i=1,s=arguments.length;i<s;i++)for(var a in r=arguments[i])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},__assign.apply(this,arguments)},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.fs=exports.Stats=exports.Dirent=exports.Dir=void 0;
// Normal deps
// TODO: do I need to put this in my dependencies?
var graceful_fs_1=require("graceful-fs"),promises_1=require("fs/promises"),graceful_fs_2=require("graceful-fs");Object.defineProperty(exports,"Dir",{enumerable:!0,get:function(){return graceful_fs_2.Dir}}),Object.defineProperty(exports,"Dirent",{enumerable:!0,get:function(){return graceful_fs_2.Dirent}}),Object.defineProperty(exports,"Stats",{enumerable:!0,get:function(){return graceful_fs_2.Stats}});
// Callbacks that need to be promisified
var graceful_fs_3=__importDefault(require("graceful-fs")),util_1=require("util"),rename=(0,util_1.promisify)(graceful_fs_3.default.rename),mkdir=(0,util_1.promisify)(graceful_fs_3.default.mkdir),readFile=(0,util_1.promisify)(graceful_fs_3.default.readFile),writeFile=(0,util_1.promisify)(graceful_fs_3.default.writeFile),access=(0,util_1.promisify)(graceful_fs_3.default.access),watch=(0,util_1.promisify)(graceful_fs_3.default.watch),appendFile=(0,util_1.promisify)(graceful_fs_3.default.appendFile),chmod=(0,util_1.promisify)(graceful_fs_3.default.chmod),chown=(0,util_1.promisify)(graceful_fs_3.default.chown),copyFile=(0,util_1.promisify)(graceful_fs_3.default.copyFile),cp=(0,util_1.promisify)(graceful_fs_3.default.cp),rm=(0,util_1.promisify)(graceful_fs_3.default.rm),readdir=(0,util_1.promisify)(graceful_fs_3.default.readdir),realpath=(0,util_1.promisify)(graceful_fs_3.default.realpath),stat=(0,util_1.promisify)(graceful_fs_3.default.stat),readFileSync=graceful_fs_3.default.readFileSync,readdirSync=graceful_fs_3.default.readdirSync,writeFileSync=graceful_fs_3.default.writeFileSync,gracefulFsPromises={
// sync, should be discouraged
readFileSync:readFileSync,readdirSync:readdirSync,writeFileSync:writeFileSync,
// promisified stuff
rename:rename,mkdir:mkdir,readFile:readFile,writeFile:writeFile,access:access,watch:watch,appendFile:appendFile,chmod:chmod,chown:chown,copyFile:copyFile,cp:cp,rm:rm,readdir:readdir,realpath:realpath,stat:stat},gracefulFsConstants={constants:graceful_fs_1.constants,rmSync:graceful_fs_1.rmSync,existsSync:graceful_fs_1.existsSync,accessSync:graceful_fs_1.accessSync,cpSync:graceful_fs_1.cpSync},fsPromises={
/**
     * cp from graceful doesn't copy folders for me for some reason
     */
cpAsync:promises_1.cp};
/**
 * NB: for some reason some of the graceful-fs functions aren't complete. For example, I can't seem to copy folders with cp from graceful-fs (cp)
 *
 * For that one I added cpAsync.
 */
exports.fs=__assign(__assign(__assign({},gracefulFsPromises),gracefulFsConstants),fsPromises);
//# sourceMappingURL=fs.js.map