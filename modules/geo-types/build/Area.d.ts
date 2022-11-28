import { SlugModelType } from "model-types";
/**
 * in the UI this should be a special input type, where you can draw a polygon or circles on the map and the center will be calculated
 */
export interface Area extends SlugModelType {
    polygon?: Position[];
    circles?: Circle[];
    center?: {
        latitude: number;
        longitude: number;
    };
}
export interface Circle {
    diameterMeters: number;
    position: Position;
}
export interface Position {
    latitude: number;
    longitude: number;
}
//# sourceMappingURL=Area.d.ts.map