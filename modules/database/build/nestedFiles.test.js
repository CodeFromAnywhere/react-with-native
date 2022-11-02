"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_db_1 = require("./test-db");
var test = function () {
    var item = {
        categoryStackCalculated: ["sub", "folder"],
        name: "hell-yeah",
        markdown: "some markdown....",
    };
    var x = test_db_1.testDb.set("MarkdownTestModel", [item]);
};
test();
//# sourceMappingURL=nestedFiles.test.js.map