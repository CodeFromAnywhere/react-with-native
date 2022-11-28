#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setJsonKey = exports.setKeyAtLocation = void 0;
const fs_util_1 = require("fs-util");
function setKeyAtLocation(path, value, object) {
    var schema = object; // a moving reference to internal objects within obj
    var pList = path.split(".");
    var len = pList.length;
    for (var i = 0; i < len - 1; i++) {
        var elem = pList[i];
        if (!schema[elem])
            schema[elem] = {};
        schema = schema[elem];
    }
    schema[pList[len - 1]] = value;
}
exports.setKeyAtLocation = setKeyAtLocation;
/*
npx setjsonkey [json-path] key1.key2.[index/latest/push].key3 "value"


 collect arguments 1 2 and 3
 find file (arg1) in path, import json (or start with empty object in a new file)
 reduce keys (arg2) to go deeper into the object and create keys as they don't exist
 make sure it works with arrays too
 convert value string (arg3) to number, boolean if they seem to be like that

*/
const setJsonKey = ({ jsonPath, keyLocation, value, debug, }) => __awaiter(void 0, void 0, void 0, function* () {
    const usage = 'usage: npx setjsonkey [json-file-path] key1.key2.[index/latest/push].key3 "value" (Check https://github.com/Code-From-Anywhere/setjsonkey for more info)';
    // VALIDATION
    if (!keyLocation || keyLocation.length === 0) {
        console.log(usage);
        process.exit(0);
    }
    const jsonPathWithExtension = jsonPath.endsWith(".json")
        ? jsonPath
        : jsonPath + ".json";
    const absolutePath = fs_util_1.path.resolve(jsonPathWithExtension);
    const fileExists = fs_util_1.fs.existsSync(absolutePath);
    if (!fileExists) {
        const folder = (0, fs_util_1.getFolder)(absolutePath);
        console.log("creating folder because it didn't exist yet", folder);
        fs_util_1.fs.mkdir(folder, { recursive: true });
    }
    let object = {};
    if (fileExists) {
        try {
            object = JSON.parse(yield fs_util_1.fs.readFile(absolutePath, "utf8"));
        }
        catch (e) {
            console.log("No JSON found here, so we're overwriting it with our new JSON");
        }
    }
    if (typeof object !== "object") {
        object = {};
    }
    const realValue = value === "true" || value === "false"
        ? Boolean(value)
        : !isNaN(Number(value))
            ? Number(value)
            : value;
    // UPDATE/SET JSON key
    setKeyAtLocation(keyLocation, realValue, object);
    const newObject = JSON.stringify(object, undefined, 2);
    yield fs_util_1.fs.writeFile(absolutePath, newObject, { encoding: "utf8" });
    if (debug) {
        console.log({ absolutePath, fileExists, object, newObject });
        console.log("succesfully changed your json!");
    }
});
exports.setJsonKey = setJsonKey;
//# sourceMappingURL=general.js.map