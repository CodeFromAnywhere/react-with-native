import { Id, SlugModelType } from "model-types";
import { Person } from "social-media-types";
import { AppOperation } from "./AppOperation";
/**
 A peer is a device with King OS installed.
 A peer can be connected to a person. A person can have multiple `Peer`s.
 */
export interface Peer extends SlugModelType {
    /**
     * The ip of the OS api (or something else). Can be a local IP or remote IP.
     *
     * NB: Port must be omitted
     */
    name: string;
    /**
     * A given description of the peer. Can be the name of the device or the user.
     */
    peerName: string;
    /**
     * if true, the above IP is a local one, meaning it cannot be accessed from outside of this network
     *
     * This is easy to determine: local IP's must start with "192.168"
     */
    isLocalIpCalculated?: boolean;
    /**
     * if `true`, this peer will show on top
     */
    isFavorite?: boolean;
    /**
     * Should be true if it is you
     *
     * NB: TODO: probably need to change this and attach it to the person.
     */
    isMe?: boolean;
    /**
     * Optionally, you can provide an authentication token here. This will be used for connecting to their api, and different authTokens could either represent different users, or maybe a global authToken can also be used.
     *
     * Different users can have different rigths
     */
    authToken?: string;
    /**
     * If true, this peer should not be shared
     */
    isPrivate?: boolean;
    /**
     * Returning `true` or `false` indicating whether or not the IP is giving a response
     */
    isOnlineCalculated?: boolean;
    /**
     * Whenever the peer is online, this should update
     */
    lastOnlineAt: number;
    /**
     * last sync of any model
     *
     * Useful for example for a p2p messaging
     */
    lastSyncDatabaseAtObject: {
        [modelName: string]: number;
    };
    personId?: Id;
    person?: Person;
    /**
     * Calculated all operations that can be exposed as apps. This is taken from `getAllAppOperations` function
     */
    appOperationsCalculated?: AppOperation[];
}
//# sourceMappingURL=Peer.d.ts.map