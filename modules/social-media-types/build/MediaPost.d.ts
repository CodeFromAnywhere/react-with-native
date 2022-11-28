import { BackendAsset } from "asset-type";
import { MarkdownModelType } from "model-types";
import { MediaChannel } from "./MediaChannel";
import { MediaPlatformEnum } from "./MediaPlatformEnum";
/**
 * Post/message on any medium.
 */
export interface MediaPost extends MarkdownModelType {
    /**
     * Parsed content from the postable content, every social media platform parses in a different way
     *
     * For example, a big blog could be parsed into multiple tweets.
     *
     * Another example: maybe in some cases we need to remove images or audio
     *
     * Another example: markdown is mostly unsupported!
     */
    mediaPlatform: MediaPlatformEnum;
    posted_messageChannelId?: string;
    posted_messageChannel?: MediaChannel;
    isVerified?: boolean;
    isPostable: boolean;
    unpostableReason?: string;
    isPosted?: boolean;
    /**
     * URL that leads directly to the posted message
     */
    postedUrl?: string;
    channelOrGroupName?: string;
    /**
     * projectRelativePath referring to the file that has been parsed into this MediaPost
     */
    webMarkdownFile_projectRelativePath?: string;
    /**
   *
   *
   * the following are DEPRECATED, use `markdown` and parse the title, content, and potential asset  from there
  
    parsedTitle
    parsedContent
  
   */
    markdown: string;
    /**
     * Calculated from `.markdown`
     */
    parsedTitleCalculated?: string;
    /**
     * Calculated from `.markdown`
     */
    parsedContentCalculated?: string;
    /**
     * Calculated from `.markdown`
     */
    parsedAssetCalculated?: BackendAsset;
    /**
     * After it has been posted, this should be filled and frequently updated
     *
     * Omitted from the form in writer-input because it's indexed
     */
    postedDetailsIndexed?: {
        views: number;
        reactions: number;
        interactions: number;
        statisticsUpdatedAt: number;
    };
}
//# sourceMappingURL=MediaPost.d.ts.map