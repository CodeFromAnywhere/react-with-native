import { DefaultModelType, Slug } from "model-types";
/**
 * DEPRECTATED: should be replaced by `MediaPost`
 */
export interface PeerMessage extends DefaultModelType {
    /**
     * In  this case, this should be the createdAt of the original source! :)
     */
    createdFirstAt: number;
    /**
     * The peer this message has been posted by
     */
    peerSlug: Slug;
    message: string;
}
//# sourceMappingURL=PeerMessage.d.ts.map