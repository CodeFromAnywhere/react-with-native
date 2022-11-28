import { DefaultModelType } from "model-types";
import { Postable } from "./Postable";
import { MessageChannel } from "./message-types";
export declare type SocialMediaPlatformEnum = "facebook" | "twitter" | "medium" | "reddit" | "devto" | "linkedin";
export interface SocialMediaPost extends DefaultModelType {
    /**
     * Parsed content from the postable content, every social media platform parses in a different way
     *
     * For example, a big blog could be parsed into multiple tweets.
     *
     * Another example: maybe in some cases we need to remove images or audio
     *
     * Another example: markdown is mostly unsupported!
     */
    socialMediaPlatform: SocialMediaPlatformEnum;
    postableId: string;
    postable?: Postable;
    parsedTitle?: string;
    parsedContent?: string;
    isPostable: boolean;
    unpostableReason?: string;
    isPosted?: boolean;
    isVerified?: boolean;
    postedUrl?: string;
    channelOrGroup?: string;
    posted_messageChannelId?: string;
    posted_messageChannel?: MessageChannel;
    /**
     * After it has been posted, this should be filled and frequently updated
     */
    postedDetailsCalculated?: {
        /**
         * URL that leads directly to the posted message
         */
        views: number;
        reactions: number;
        interactions: number;
        statisticsUpdatedAt: number;
    };
}
//# sourceMappingURL=SocialMediaPost.d.ts.map