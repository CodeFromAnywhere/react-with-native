#!/usr/bin/env node
export declare const stripSlashes: (trimmedLine: string) => string;
export declare const stripCommentStart: (trimmedLine: string) => string;
export declare const stripCommentEnd: (trimmedLine: string) => string;
export declare const stripStar: (trimmedLine: string) => string;
export declare const trim: (string: string) => string;
/**
  parses comments (single line, multiline and doc) and removes the comment syntax

  - removes slashes
  - removes multiline comment prefix
  - removes multiline comment suffix
  - removes doccomment stars

  example input: `// comment`, output: `comment`

  example input:
  ```
  /**
   * some
   * multiline
   * comment *~/
   ```
   output:
   ```
   some
   multiline
   comment
   ```
 */
export declare const stripComment: (rawCommentString: string) => string;
//# sourceMappingURL=general.d.ts.map