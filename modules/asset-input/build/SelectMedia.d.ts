/// <reference types="react" />
/**

project: api urls
p2p: api urls with other ip
---
google: remote image urls
giphy: remote image urls
unsplashed: remote image urls
youtube: remote video urls (selectable as mp3, mp4, or url)

 */
declare type MediaSourceEnum = "project" | "p2p" | "google" | "giphy" | "unsplashed" | "youtube";
export declare const SelectMedia: (props: {
    source: MediaSourceEnum;
}) => JSX.Element;
export {};
//# sourceMappingURL=SelectMedia.d.ts.map