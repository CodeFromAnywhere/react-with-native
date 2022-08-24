"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPathParse = void 0;
var getProjectRoot_1 = require("./getProjectRoot");
/**
 * gets all kinds of information that can be inferred from any path (file or folder).
 */
var getPathParse = function (absolutePath) {
    var projectRoot = (0, getProjectRoot_1.getProjectRoot)(absolutePath);
    if (!projectRoot)
        return;
    var relativePathFromProjectRoot = absolutePath.slice(projectRoot.length);
    return { relativePathFromProjectRoot: relativePathFromProjectRoot };
};
exports.getPathParse = getPathParse;
/**
 * returns an object with different paths based on a ts file path
 *
 * DEPRECATED: should transfer mostly to getPathParse and getOperatioinPathParse
 */
// export const getTsFilePaths = ({
//   absoluteFilePath,
//   indexFolder,
// }: {
//   absoluteFilePath: string;
//   /**
//    * if given, also returns indexFilePath
//    */
//   indexFolder?: string;
// }) => {
//   console.log("running getTsFilePaths", { absoluteFilePath });
//   const projectRoot = getProjectRoot();
//   if (!projectRoot) return;
//   const operationPathParse = getOperationPathParse(absoluteFilePath);
//   if (!operationPathParse) return;
//   const srcFolder = getFolder(operationPathParse.relativeFilePathFromSrc);
//   if (
//     !srcFolder ||
//     !operationPathParse.relativeOperationBasePathFromProjectRoot
//   ) {
//     console.log("WTF this should never happen (getTsFilePaths)", {
//       srcFolder,
//       relativeOperationBasePathFromProjectRoot:
//         operationPathParse.relativeOperationBasePathFromProjectRoot,
//     });
//     return;
//   }
//   const relativeIndexFilePath = path.join(
//     srcFolder,
//     `${path.parse(absoluteFilePath).name}.json`
//   );
//   const operationBasePath = path.join(
//     projectRoot,
//     operationPathParse.relativeOperationBasePathFromProjectRoot
//   );
//   /**
//    * NB: doesn't necessarily exist!
//    */
//   const getIndexFilePath = (indexType: string) =>
//     path.join(operationBasePath, "index", indexType, relativeIndexFilePath);
//   const indexFilePath = indexFolder ? getIndexFilePath(indexFolder) : null;
//   return {
//     getIndexFilePath,
//     srcFolder,
//     indexFilePath,
//     ...operationPathParse,
//   };
// };
//# sourceMappingURL=getPathParse.js.map