import { PluginInputType } from "react-with-native-form";

export type ViewPort = MapLocation & {
  width: string | number;
  height: string | number;
};

export type MapLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export class MapInputType implements PluginInputType {
  value!: MapLocation;
  config?: {
    errorClassName?: string;
    extraClassName?: string;
    replaceClassName?: string;
    mapboxKey: string;
  };
  extra?: { showMarker?: boolean; showZoom?: boolean };
}

export type Suggestion = {
  bbox: number[];
  center: [number, number];
  id: string;
  place_name: string;
  place_type: string[];
  text: string;
};
