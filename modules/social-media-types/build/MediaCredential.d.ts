import { DefaultModelType } from "model-types";
import { MediaPlatformEnum } from "./MediaPlatformEnum";
export interface MediaCredential extends DefaultModelType {
    mediaType: MediaPlatformEnum;
    email?: string;
    password: string;
    username?: string;
    phoneNumber?: string;
}
//# sourceMappingURL=MediaCredential.d.ts.map