"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getLastFolder=exports.getFileName=exports.getFolder=exports.getPathCombinations=void 0;var js_util_1=require("js-util"),path_1=require("./path"),getPathCombinations=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.map((function(t){return(0,js_util_1.makeArray)(t)})).map((function(t){return t.filter(js_util_1.notEmpty)})).reduce((function(t,e){
// first chunk is the combination of itself
return 0===t.length?e:t.reduce((function(t,r){
// for every segment add all the chunks to that segment
var o=e.map((function(t){return path_1.path.join(r,t)}));
//add them to all new cumSegments
return t.concat(o)}),[]);
// all next chunks use the accummualted segments and reduce them
}),[])};exports.getPathCombinations=getPathCombinations;
/**
   if the path exists:
      - if the pathString is a folder, that is returned.
      - if the pathstring is not a folder, returns the pathstring without the file suffix
      
  if the path doesn't exist: returns pathString witout last chunk (this would only work for file paths)
   */
var getFolder=function(t){if(path_1.path.parse(t).ext.length>0){
// NB: assume it's a file, let's avoid folders with dots!
var e=t.split("/");//remove the filename
return e.pop(),e.join("/")}
// NB: it's already a folder!
return t};exports.getFolder=getFolder;
/**
 * removes everything before the last slash to get file name
 */
var getFileName=function(t){return path_1.path.basename(t)};exports.getFileName=getFileName;
/**
 * removes everything after the last slash to get folder path
 *
 * input: /Users/king/Documents/some/folder/xyz
 * output: xyz
 *
 * input: /Users/king/Documents/some/folder/xyz.txt
 * output: folder
 */
var getLastFolder=function(t){
// console.log({ pathString, lastFolder });
return(0,exports.getFolder)(t).split("/").pop()};exports.getLastFolder=getLastFolder;
//# sourceMappingURL=js.js.map