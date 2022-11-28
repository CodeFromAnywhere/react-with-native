import { DefaultModelType, Id } from "model-types";
import { Person } from "./Person";
import { AppOperation } from "./AppOperation";
import { IPInfo } from "./IPInfo";
import { AuthenticationMethod } from "./AuthenticationMethjod";
import { IResult } from "./external/ua-parser-js";
/**
 A Device that accesses any King OS api.

 A device can be connected to a person. A person can have multiple `Device`s.

 A Device does not necissarily have King OS installed themselves, they can also be a visitor to another King OS app of someone else.
 */
export interface Device extends DefaultModelType, IPInfo {
    /**
     * AuthToken is used to identify a device. Unique identifier that is saved in the devices browser/app.
     *
     * If the authToken is the same, we can be sure that the device is matched, even if the IP is different.
     */
    authToken: string;
    /**
     * Parsed User Agent header.
     *
     * NOT used to identify the device, since the device can already be connected to a person!
     */
    userAgent: IResult;
    /**
     * Raw `User-Agent` header.
     *
     * NOT used to identify the device, since the device can already be connected to a person!
     */
    userAgentString: IResult["ua"];
    /**
     * Name of the device, calculated based on metadata like location, os, and ip
     *
     * Can be edited by the user
     */
    name: string;
    /**
     * the root IPInfo is from the latest IP the device had. All previous IPs are added to this array
     */
    previousIps: IPInfo[];
    /**
     * Domains the Device has visited
     *
     * The Origin request header indicates the origin (scheme, hostname, and port) that caused the request
     */
    origins: string[];
    /**
     * Is set to true if the devices IP is pinged and seems to have something that resembles a King OS PAPI.
     */
    hasPapi?: boolean;
    /**
     * Returning `true` or `false` indicating whether or not the IP is giving a response
     */
    isOnlineCalculated?: boolean;
    /**
     * Whenever the peer is online, this should update
     */
    lastOnlineAt: number;
    /**
     * if true, the above IP is a local one, meaning it cannot be accessed from outside of this network
     *
     * This is easy to determine: local IP's must start with "192.168"
     */
    isLocalIpCalculated?: boolean;
    /**
     * if `true`, this device will show on top
     */
    isFavorite?: boolean;
    /**
     * If true, this peer should not be shared
     */
    isPrivate?: boolean;
    /**
     * last sync of any model
     *
     * Useful for example for a p2p messaging
     */
    lastSyncDatabaseAtObject: {
        [modelName: string]: number;
    };
    /**
     * If the device is authenticated, this should be set.
     *
     * Can be unset by the person
     */
    personIds?: Id[];
    persons?: Person[];
    /**
     * A device can switch between persons, by changing this value
     */
    currentPersonId?: Id;
    /**
     * If you have a currentPersonId, it is calculated and provided by selecting it from the persons array
     *
     * For now, only provided by functioncontext
     */
    currentPersonCalculated?: Person;
    /**
     * Calculated all operations that can be exposed as apps. This is taken from `getAllAppOperations` function
     */
    appOperationsCalculated?: AppOperation[];
    /**
     * If the `Device` is not identified as a person yet, this can be configured to authenticate with different methods. Once it matches to a person, this can be cleared and `personId` can be attached.
     */
    authenticationMethods: AuthenticationMethod[];
}
//# sourceMappingURL=Device.d.ts.map