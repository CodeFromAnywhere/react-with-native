import { DefaultModelType } from "model-types";
import { Image } from "asset-type";
import { HandleObject } from "./Platform";
/**
 ---
 dbStorageMethod: jsonSingle
 projectRelativePath: db/me.json
 ---

 Used for collecting information about yourself that is presented to your peers
 */
export interface Me extends DefaultModelType {
    usernameHandles: HandleObject;
    firstName: string;
    lastName: string;
    image: Image;
}
//# sourceMappingURL=Me.d.ts.map