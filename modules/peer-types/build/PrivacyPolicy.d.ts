import { Slug } from "model-types";
/**
 * private: this resource cannot be found nor accessed
 *
 * search: this resource can be found, but cannot be read
 *
 * read: this resource can be read, but cannot be written
 *
 * write: this resource can be written on, but cannot be executed
 *
 * execute (default): this resource can be executed too (full rights)
 */
export declare type PrivacyPolicyPrivacyEnum = "private" | "search" | "read" | "write" | "execute";
/**
 * On top of the default privacy and the custom privacy policies, there should be a convention of path names:
 *
 * - if the folder name is "private", hide this from search
 * - if the file subextension is `.private`, hide this from search
 */
export interface PrivacyPolicy {
    osDefaultPrivacy: PrivacyPolicyPrivacyEnum;
    customPrivacyPolicies: CustomPrivacyPolicy[];
}
/**
 * Optionally you can add custom privacy policies that do or do not apply to all peers.
 */
export declare type CustomPrivacyPolicy = {
    privacy: PrivacyPolicyPrivacyEnum;
    projectRelativePath: string;
    /**
     * By default everyone is allowed this policy, unless they are ignored.
     */
    ignore_peerSlugs?: Slug[];
    /**
     * By default everyone is allowed this policy, but if you provide this, only the following peers will be allowed this policy
     */
    allow_peerSlugs?: Slug[];
};
//# sourceMappingURL=PrivacyPolicy.d.ts.map