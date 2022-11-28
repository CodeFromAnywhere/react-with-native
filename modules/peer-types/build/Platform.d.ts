import { SlugModelType } from "model-types";
/**
 * Collection of platforms that can be found on the internet
 *
 * e.g. linkedin would have `userUrlPrefix: https://linkedin.com/in/` and `userUrlSuffix:""`
 */
export interface Platform extends SlugModelType {
    userUrlPrefix: string;
    userUrlSuffix: string;
}
/**
 * can be used on multiple models.
 */
export declare type HandleObject = {
    [platform: Platform["slug"]]: string;
};
//# sourceMappingURL=Platform.d.ts.map