"use strict";Object.defineProperty(exports,"__esModule",{value:!0});
/*

TODO: add support for languages

language:
   * 2 or 3 letter code for the language the value is detected to be in
   *
   * obviously, this can not always be detected. For example, it will be hard for one-word strings.
   * because of this, we can just parse the whole file first and only fill in the valueLanguage with high accuracy (99+ %)
   * at the end we just check the most common language (maybe count the more nearby ones higher, but this would be much less efficient) and fill in the blanks
   *
   * we can also have a toplevel frontmatter key with defaultLanguage or even language, if it's completely fixed
   *
   * obviously we can only detect the language for strings, the other primitives are universal.
   
 valueLanguage: Language;
*/
//# sourceMappingURL=keyValueMarkdown.js.map