"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findAssetParametersRecursively_1 = require("./findAssetParametersRecursively");
var test = function () {
    var result = (0, findAssetParametersRecursively_1.findAssetParametersRecursively)({
        createdAt: 1665986688878,
        updatedAt: 1665986688878,
        deletedAt: 0,
        createdFirstAt: 1665986688878,
        english: {
            audio: [
                {
                    alt: "reptile",
                    name: "reptile",
                    temporaryDestination: "XJstAyLnuKFCgKdsouekTiholTMJjGRd.mp4",
                },
            ],
            latin: "reptile",
        },
        slug: "reptile",
        name: "reptile",
        language: "english",
        id: "feubjbmltjuewxmtnqhfpync",
        description: "a sort of animal",
        descriptionAudio: [null],
        image: [null],
        wordCategorySlugs: ["animal", "food"],
        type: "noun",
        priorityLevel: "critical",
        rank: 1,
        emoji: "🦎",
    });
    console.dir({ result: result }, { depth: 999 });
};
test();
//# sourceMappingURL=findAssetParametersRecursively.test.js.map