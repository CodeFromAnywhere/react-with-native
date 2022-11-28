/// <reference types="react" />
import { DefaultModelType, Id, Language, Markdown, MarkdownModelType, Slug } from "model-types";
/**
 * A message is a very important model as there are loads of platforms that have this model implemented, in some way.
 */
export interface Message extends DefaultModelType {
    subject?: Text;
    message: Markdown;
    messageChannelId: Id;
}
/** channel where messages can be posted to */
export interface MessageChannel extends DefaultModelType {
    platformSlug: Slug;
    /** way to identify the channel on the platform */
    platformChannelId: string;
    url?: string;
    name: string;
    slug: string;
    description?: string;
    /** if true, this channel is a group */
    isGroup?: boolean;
    /** ids that each identify a person that is part of this channel. Isn't always available */
    members?: Id[];
    /**
     * The below parameters should ONLY be used if the instance is a channel for a group.
     * if this is a channel for a person, the interests should be stored on the person instead.
     */
    /** group-only: interests this group has */
    interests?: Slug[];
    /** group-only: most specific location of the people in this channel (if any) */
    location?: Slug;
    /** group-only: preferred spoken language in this channel */
    language: Language;
    /** when did you make your last post? */
    myLastPostAt: number;
}
/**
 * A way to store messagepresets in markdown. the headers are the different categories. If the first alinea is bolded, it will be parsed to be the title, and will be removed from the message.
 */
export interface MessagePreset extends MarkdownModelType {
    title?: string;
}
//# sourceMappingURL=message-types.d.ts.map