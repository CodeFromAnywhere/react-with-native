import { DefaultModelType } from "model-types";
import { SocialMediaPlatformEnum } from "./SocialMediaPost";
export interface SocialMediaCredentail extends DefaultModelType {
    mediaType: SocialMediaPlatformEnum;
    email?: string;
    password: string;
    userName?: string;
    phoneNumber?: string;
}
//# sourceMappingURL=SocialMediaCredential.d.ts.map