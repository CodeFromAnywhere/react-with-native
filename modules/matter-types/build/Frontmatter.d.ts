/**
 * Our version of frontmatter is a bit simpler than regular frontmatter
 *
 * Not sure if this is a good idea, but it keeps it simple for our OS
 *
 * all values parse in a similar way to csv
 *
 * make sure that you use quotes if you want to store a string with commas, because commas in a parameter indicate that it is a string array
 *
 * NB: string arrays are comma separated values, where you can put values with special characters in between quotes
 */
export declare type Frontmatter = {
    [frontMatterKey: string]: string;
};
//# sourceMappingURL=Frontmatter.d.ts.map