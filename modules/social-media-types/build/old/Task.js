"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskNames = exports.taskName = exports.allTasks = exports.taskPriorities = void 0;
var js_util_1 = require("js-util");
exports.taskPriorities = [
    "low",
    "high",
    "critical",
    "toggleAutomationPriority",
];
exports.allTasks = [
    {
        taskName: "scrapeProfile",
        minimumTimeRequired: 60,
    },
    {
        taskName: "scrapeConnections",
        minimumTimeRequired: 60,
    },
];
exports.taskName = [
    "scrapeProfile",
    "scrapeConnections",
    "scrapeGroups",
    "scrapePosts",
    "sendMessage",
    "login",
    "createPost",
    "testEndpoint",
    "toggleAutomation",
];
exports.taskNames = (0, js_util_1.createEnum)(exports.taskName);
//# sourceMappingURL=Task.js.map