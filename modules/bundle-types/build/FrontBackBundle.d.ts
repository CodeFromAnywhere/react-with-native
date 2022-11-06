import { OperationPrivacy } from "./types";
/**
 * This type can specify a frontend and backend that belong to each other. it doesn't include all operations that the ui or server are dependent on, they are calculated separately
 */
export interface FrontBackBundle {
    /**
     * any operation names that are not necesarily dependencies of the named front-back bundle but still need to be available.
     */
    operations?: OperationPrivacy[];
    /**
     * (optional) main shared ui package of the frontend
     */
    uiOperationName?: string;
    /**
     * which app shell(s) or app operations are there for the frontend?
     */
    appShellOperationNames?: string[];
    /** operation name for server, if this UI is connected to one */
    serverOperationName?: string;
    /**
     * if there is a ui and it has a web-shell, and it is deployed somewhere into production, add the deployed domain here.
     */
    productionWebUrl?: string;
    /**
     * if there is one, it should be specified here (without trailing slash)
     */
    productionApiUrl?: string;
    /**
     * if this is provided, all endpoints require this auth token to be provided, or the endpoints do not work
     *
     * if you wish to have a more extensive authentication method for your endpoints, make sure to create your own auth layer
     */
    endpointsAuthToken?: string;
}
//# sourceMappingURL=FrontBackBundle.d.ts.map