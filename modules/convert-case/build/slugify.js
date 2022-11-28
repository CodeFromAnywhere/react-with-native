"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = void 0;
/**
 * this function does the same as kebabCase but it also does some more transformation on top
 *
 * useful for making simple URLs and filenames. Kebacase is not enough
 *
 * NB: this is no two way transformation. When slugifying something, information is lost and it cannot be converted back in the original name.
 *
 * TODO: make the tranformations that are done here into smaller util functions and make a clean function that can be ran before running every casing conversion (maybe in a config)
 */
function slugify(string) {
    var a = "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
    var b = "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
    var p = new RegExp(a.split("").join("|"), "g");
    return string
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(p, function (c) { return b.charAt(a.indexOf(c)); }) // Replace special characters
        .replace(/&/g, "-and-") // Replace & with 'and'
        .replace(/[^\w\-]+/g, "") // Remove all non-word characters
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
}
exports.slugify = slugify;
//# sourceMappingURL=slugify.js.map