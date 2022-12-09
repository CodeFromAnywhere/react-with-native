"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsInterfaceToDbMenu = void 0;
var makeSrcRelativeFolder_1 = require("./makeSrcRelativeFolder");
var tsInterfaceToDbMenu = function (tsInterface, type) {
    var srcRelativeFolder = (0, makeSrcRelativeFolder_1.makeSrcRelativeFolder)(tsInterface.operationRelativeTypescriptFilePath);
    if (!tsInterface.operationName)
        return;
    return {
        name: tsInterface.name,
        operationName: tsInterface.operationName,
        type: type,
        srcRelativeFolder: srcRelativeFolder,
    };
};
exports.tsInterfaceToDbMenu = tsInterfaceToDbMenu;
//# sourceMappingURL=tsInterfaceToDbMenu.js.map