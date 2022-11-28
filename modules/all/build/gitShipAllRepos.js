"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitShipAllRepos = void 0;
var forAllFolders_1 = require("./forAllFolders");
/* `gitShipAllPackages` Just ships code everywhere to github, wherever there's a git folder and there are changes.*/
var gitShipAllRepos = function (_a) {
    var basePath = _a.basePath, callback = _a.callback, fileName = _a.fileName, folderName = _a.folderName, _b = _a.shell, shell = _b === void 0 ? true : _b;
    return (0, forAllFolders_1.forAllFolders)({
        type: "git",
        command: 'git add . && git commit -m "Improvements" && git push',
        basePath: basePath,
        callback: callback,
        shell: shell,
        fileName: fileName,
        folderName: folderName,
    });
};
exports.gitShipAllRepos = gitShipAllRepos;
//# sourceMappingURL=gitShipAllRepos.js.map