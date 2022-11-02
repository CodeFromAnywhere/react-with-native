/**
 * Internal links should have a small footprint since there can be many of them
 *
 * An internal link just needs to be a word connected to a different page
 */
export declare type InternalLink = {
    internalLinkWord: string;
    queryPath: string;
};
/**
 * This datastructure is probably needed to make it more efficient.
 *
 * Should be a lookup table for the querypath for every word
 */
export declare type InternalLinkObject = {
    [internalLinkWord: string]: string;
};
//# sourceMappingURL=InternalLink.d.ts.map