export declare type SocialMediaPlatformEnum = "facebook" | "twitter" | "medium" | "reddit" | "devto" | "linkedin";
export interface SocialMediaPostType {
    mediaType: "all" | SocialMediaPlatformEnum;
    blog: {
        title: string;
        content: string;
    };
    channelOrGroup?: string;
}
//# sourceMappingURL=SocialMediaPostType.d.ts.map