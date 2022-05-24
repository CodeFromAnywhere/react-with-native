import { PluginInputType } from "react-with-native-form";
export declare type ViewPort = MapLocation & {
    width: string | number;
    height: string | number;
};
export declare type MapLocation = {
    latitude: number;
    longitude: number;
    zoom: number;
};
export declare class MapInputType implements PluginInputType {
    value: MapLocation;
    config?: {
        errorClassName?: string;
        extraClassName?: string;
        replaceClassName?: string;
        mapboxKey: string;
    };
    extra?: {
        showMarker?: boolean;
        showZoom?: boolean;
    };
}
export declare type Suggestion = {
    bbox: number[];
    center: [number, number];
    id: string;
    place_name: string;
    place_type: string[];
    text: string;
};
//# sourceMappingURL=types.d.ts.map