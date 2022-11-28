#!/usr/bin/env node
"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAbsoluteImport = exports.getTypeFromImportSpecifierRecursive = exports.getExportSymbolTypeRecursive = exports.getDefaultSymbolType = exports.getImportSpecifiersWithNames = exports.getExportSpecifierNames = exports.getSymbolTypeDeclarations = void 0;
var log_1 = require("log");
var typescript_1 = require("typescript");
var js_util_1 = require("js-util");
var ts_morph_util_1 = require("ts-morph-util");
var getSymbolTypeDeclarations = function (symbol) {
    return __spreadArray(__spreadArray([], getSymbolDeclarationsOfKind(symbol, typescript_1.SyntaxKind.TypeAliasDeclaration), true), getSymbolDeclarationsOfKind(symbol, typescript_1.SyntaxKind.InterfaceDeclaration), true);
};
exports.getSymbolTypeDeclarations = getSymbolTypeDeclarations;
var getExportSpecifierNames = function (symbol) {
    var _a;
    return (((_a = symbol === null || symbol === void 0 ? void 0 : symbol.getDeclarations()) === null || _a === void 0 ? void 0 : _a.filter(function (x) { return x.isKind(typescript_1.SyntaxKind.ExportSpecifier); }).map(function (x) { return x.asKind(typescript_1.SyntaxKind.ExportSpecifier); }).filter(js_util_1.notEmpty).map(function (x) { return x.getName(); })) || []);
};
exports.getExportSpecifierNames = getExportSpecifierNames;
/**
 * get the ImportSpecifier(s) of with a certain name.
 */
var getImportSpecifiersWithNames = function (sourceFile, names) {
    return sourceFile
        .getImportDeclarations()
        .map(function (x) { return x.getNamedImports(); })
        .flat()
        .filter(function (x) { return names.includes(x.getName()); });
}; //
exports.getImportSpecifiersWithNames = getImportSpecifiersWithNames;
/**
 * gets type of a symbol and if the type has a generic, without recursing.
 */
var getDefaultSymbolType = function (symbol, debug) {
    if (debug) {
        console.log({
            kinds: symbol
                .getDeclarations()
                .map(function (x) { return ({ kind: x.getKindName(), name: x.getText() }); }),
        });
    }
    var symbolTypeDeclarations = (0, exports.getSymbolTypeDeclarations)(symbol);
    var type = symbolTypeDeclarations.length > 0 ? "type" : "value";
    /**
     * checks whether the symbol contains a type declaration which has a generic parameter
     */
    var hasGeneric = type === "type"
        ? !!symbolTypeDeclarations.find(
        // NB: type parameters gets the generics
        function (declaration) { return (0, ts_morph_util_1.getHasGeneric)(declaration); })
        : undefined;
    return { type: type, hasGeneric: hasGeneric };
};
exports.getDefaultSymbolType = getDefaultSymbolType;
/**
 * gets type of exportSymbols. recurses if it's an exportsymbol
 *
 * TODO: NB: exports that come from a destructured initialiser aren't found! fix it
 */
var getExportSymbolTypeRecursive = function (symbol, sourceFile, debug) {
    var exportSpecifierNames = (0, exports.getExportSpecifierNames)(symbol);
    if (debug)
        console.log(exportSpecifierNames);
    if (exportSpecifierNames.length > 0) {
        // get the ImportSpecifier of this ExportSpecifier, and if one exists, recurse this function on it.
        var importSpecifiers = (0, exports.getImportSpecifiersWithNames)(sourceFile, exportSpecifierNames);
        if (importSpecifiers.length > 1) {
            // NB: warn if there is more than one as that would be strange
            (0, log_1.log)("More than one importsSpecifiers with that name: ".concat(exportSpecifierNames.join(","), " (imports: ").concat(importSpecifiers
                .map(function (x) { return x.getName(); })
                .join(","), ")... file: ").concat(sourceFile.getFilePath()), {
                type: "warning",
            });
        }
        if (importSpecifiers.length > 0) {
            return (0, exports.getTypeFromImportSpecifierRecursive)(importSpecifiers[0], debug);
        }
        /* REmoved this.... seems that this will make it never do the default one
          else {
            if (debug) {
              console.log(
                "Weird, we couldn't find the importspecifier for exportSpecifiers"
              );
            }
            return { type: undefined };
          }
          */
    }
    return (0, exports.getDefaultSymbolType)(symbol, debug);
};
exports.getExportSymbolTypeRecursive = getExportSymbolTypeRecursive;
/**
 * Recursive function that gets the type specifier from an import specifier
 */
var getTypeFromImportSpecifierRecursive = function (importSpecifier, debug, 
/**
 * Files it was already in (to prevent infinite loops)
 */
fileStack) {
    // NB: find the file where the import is defined
    try {
        var fileOfExport = importSpecifier
            .getImportDeclaration()
            .getModuleSpecifierSourceFile();
        // NB: without the module source we can't know the type of this importspecifier
        if (!fileOfExport)
            return;
        var filePath = fileOfExport.getFilePath();
        if (!filePath)
            return;
        var realFileStack = fileStack || [];
        if (realFileStack.includes(filePath)) {
            console.log("Infinite loop found, returning...", { filePath: filePath, fileStack: fileStack });
            return;
        }
        var newFileStack = realFileStack.concat(filePath);
        // NB: in the source, find all exported stuff
        var exportSymbols = fileOfExport.getExportSymbols();
        // NB: find the export with the same name as the import
        var importedSymbol = exportSymbols.find(function (x) { return x.getName() === importSpecifier.getName(); });
        // NB: if the source doesn't contain any export with that name, we can't know its type
        if (!importedSymbol)
            return;
        /**
         * NB: all ExportSpecifiers don't have a more specific SyntaxKind because they are imported.
         * If there are any ExportSpecifiers with a matching ImportSpecifier, recurse on that!
         */
        var exportSpecifierNames = (0, exports.getExportSpecifierNames)(importedSymbol);
        if (exportSpecifierNames.length > 0) {
            var importSpecifiers = (0, exports.getImportSpecifiersWithNames)(fileOfExport, exportSpecifierNames);
            if (importSpecifiers.length > 1) {
                // NB: warn if there is more than one as that would be strange
                (0, log_1.log)("More than one importsSpecifiers with that name", {
                    type: "warning",
                });
            }
            if (importSpecifiers.length > 0 && newFileStack.length < 10) {
                // console.log(`recursing`, { newFileStack, filePath });
                // NB: recursion!
                var first = importSpecifiers[0];
                return (0, exports.getTypeFromImportSpecifierRecursive)(first, debug, newFileStack);
            }
            else {
                if (debug)
                    console.log("Weird, no importspecifiers found for exportSpecifier!!");
                return;
            }
        }
        // console.log({
        //   fileOfExport: fileOfExport?.getFilePath(),
        //   exportSymbols: exportSymbols?.map((x) => x.getName()),
        //   importSpecifier: importSpecifier.getName(),
        //   importedSymbol: importedSymbol?.getName(),
        //   name: importSpecifier.getName(),
        // });
        return (0, exports.getDefaultSymbolType)(importedSymbol, debug);
    }
    catch (e) {
        console.log("failed");
        return;
    }
};
exports.getTypeFromImportSpecifierRecursive = getTypeFromImportSpecifierRecursive;
var isAbsoluteImport = function (moduleString) {
    return moduleString ? !moduleString.startsWith(".") : false;
};
exports.isAbsoluteImport = isAbsoluteImport;
var getSymbolDeclarationsOfKind = function (symbol, kind) {
    var declarations = symbol
        .getDeclarations()
        .filter(function (x) { return x.getKind() === kind; })
        .map(function (x) { return x.asKind(kind); })
        .filter(js_util_1.notEmpty);
    return declarations;
};
//# sourceMappingURL=util.js.map