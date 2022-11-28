import { Position } from "geo-types";
/**
 * Information that is inferred from an IP
 */
export declare type IPInfo = {
    /**
     * The ip of the device. Can be a local IP or remote IP.
     *
     * NB: Port is not included
     */
    ip: string;
    city: string | undefined;
    position: Position | undefined;
    positionRadiusKm: number | undefined;
    country: string | undefined;
    region: string | undefined;
    timezone: string | undefined;
};
//# sourceMappingURL=IPInfo.d.ts.map