#!/usr/bin/env node
"use strict";var __spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||2===arguments.length)for(var i,o=0,n=t.length;o<n;o++)!i&&o in t||(i||(i=Array.prototype.slice.call(t,0,o)),i[o]=t[o]);return e.concat(i||Array.prototype.slice.call(t))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.isAbsoluteImport=exports.getTypeFromImportSpecifierRecursive=exports.getExportSymbolTypeRecursive=exports.getDefaultSymbolType=exports.getImportSpecifiersWithNames=exports.getExportSpecifierNames=exports.getSymbolTypeDeclarations=void 0;var log_1=require("log"),typescript_1=require("typescript"),js_util_1=require("js-util"),ts_morph_util_1=require("ts-morph-util"),getSymbolTypeDeclarations=function(e){return __spreadArray(__spreadArray([],getSymbolDeclarationsOfKind(e,typescript_1.SyntaxKind.TypeAliasDeclaration),!0),getSymbolDeclarationsOfKind(e,typescript_1.SyntaxKind.InterfaceDeclaration),!0)};exports.getSymbolTypeDeclarations=getSymbolTypeDeclarations;var getExportSpecifierNames=function(e){var t;return(null===(t=null==e?void 0:e.getDeclarations())||void 0===t?void 0:t.filter((function(e){return e.isKind(typescript_1.SyntaxKind.ExportSpecifier)})).map((function(e){return e.asKind(typescript_1.SyntaxKind.ExportSpecifier)})).filter(js_util_1.notEmpty).map((function(e){return e.getName()})))||[]};exports.getExportSpecifierNames=getExportSpecifierNames;
/**
 * get the ImportSpecifier(s) of with a certain name.
 */
var getImportSpecifiersWithNames=function(e,t){return e.getImportDeclarations().map((function(e){return e.getNamedImports()})).flat().filter((function(e){return t.includes(e.getName())}))};
exports.getImportSpecifiersWithNames=getImportSpecifiersWithNames;
/**
 * gets type of a symbol and if the type has a generic, without recursing.
 */
var getDefaultSymbolType=function(e,t){t&&console.log({kinds:e.getDeclarations().map((function(e){return{kind:e.getKindName(),name:e.getText()}}))});var r=(0,exports.getSymbolTypeDeclarations)(e),i=r.length>0?"type":"value";return{type:i,hasGeneric:"type"===i?!!r.find((
// NB: type parameters gets the generics
function(e){return(0,ts_morph_util_1.getHasGeneric)(e)})):void 0}};exports.getDefaultSymbolType=getDefaultSymbolType;
/**
 * gets type of exportSymbols. recurses if it's an exportsymbol
 *
 * TODO: NB: exports that come from a destructured initialiser aren't found! fix it
 */
var getExportSymbolTypeRecursive=function(e,t,r){var i=(0,exports.getExportSpecifierNames)(e);if(r&&console.log(i),i.length>0){
// get the ImportSpecifier of this ExportSpecifier, and if one exists, recurse this function on it.
var o=(0,exports.getImportSpecifiersWithNames)(t,i);if(o.length>1&&
// NB: warn if there is more than one as that would be strange
(0,log_1.log)("More than one importsSpecifiers with that name: ".concat(i.join(",")," (imports: ").concat(o.map((function(e){return e.getName()})).join(","),")... file: ").concat(t.getFilePath()),{type:"warning"}),o.length>0)return(0,exports.getTypeFromImportSpecifierRecursive)(o[0],r);
/* REmoved this.... seems that this will make it never do the default one
          else {
            if (debug) {
              console.log(
                "Weird, we couldn't find the importspecifier for exportSpecifiers"
              );
            }
            return { type: undefined };
          }
          */}return(0,exports.getDefaultSymbolType)(e,r)};exports.getExportSymbolTypeRecursive=getExportSymbolTypeRecursive;
/**
 * Recursive function that gets the type specifier from an import specifier
 */
var getTypeFromImportSpecifierRecursive=function(e,t,
/**
 * Files it was already in (to prevent infinite loops)
 */
r){
// NB: find the file where the import is defined
try{var i=e.getImportDeclaration().getModuleSpecifierSourceFile();
// NB: without the module source we can't know the type of this importspecifier
if(!i)return;var o=i.getFilePath();if(!o)return;var n=r||[];if(n.includes(o))return void console.log("Infinite loop found, returning...",{filePath:o,fileStack:r});var p=n.concat(o),a=i.getExportSymbols().find((function(t){return t.getName()===e.getName()}));
// NB: in the source, find all exported stuff
// NB: if the source doesn't contain any export with that name, we can't know its type
if(!a)return;
/**
         * NB: all ExportSpecifiers don't have a more specific SyntaxKind because they are imported.
         * If there are any ExportSpecifiers with a matching ImportSpecifier, recurse on that!
         */var s=(0,exports.getExportSpecifierNames)(a);if(s.length>0){var l=(0,exports.getImportSpecifiersWithNames)(i,s);if(l.length>1&&
// NB: warn if there is more than one as that would be strange
(0,log_1.log)("More than one importsSpecifiers with that name",{type:"warning"}),l.length>0&&p.length<10){
// console.log(`recursing`, { newFileStack, filePath });
// NB: recursion!
var c=l[0];return(0,exports.getTypeFromImportSpecifierRecursive)(c,t,p)}return void(t&&console.log("Weird, no importspecifiers found for exportSpecifier!!"))}
// console.log({
//   fileOfExport: fileOfExport?.getFilePath(),
//   exportSymbols: exportSymbols?.map((x) => x.getName()),
//   importSpecifier: importSpecifier.getName(),
//   importedSymbol: importedSymbol?.getName(),
//   name: importSpecifier.getName(),
// });
return(0,exports.getDefaultSymbolType)(a,t)}catch(e){return void console.log("failed")}};exports.getTypeFromImportSpecifierRecursive=getTypeFromImportSpecifierRecursive;var isAbsoluteImport=function(e){return!!e&&!e.startsWith(".")};exports.isAbsoluteImport=isAbsoluteImport;var getSymbolDeclarationsOfKind=function(e,t){return e.getDeclarations().filter((function(e){return e.getKind()===t})).map((function(e){return e.asKind(t)})).filter(js_util_1.notEmpty)};
//# sourceMappingURL=util.js.map