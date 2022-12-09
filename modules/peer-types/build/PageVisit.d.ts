import { DefaultModelType } from "model-types";
import { IPInfo } from "./IPInfo";
/**
 * Any visit tracked based on a server request
 *
 * NB: TODO: it might occur that a page fetches multiple api endpoints, which will create duplicate data here. How do I fix that?
 */
export interface PageVisit extends DefaultModelType {
    deviceId: string;
    /**
     * complete url of the page that was visited
     */
    path: string;
    /**
     * When was the page visited
     */
    createdAt: number;
    ipInfo: IPInfo;
}
//# sourceMappingURL=PageVisit.d.ts.map