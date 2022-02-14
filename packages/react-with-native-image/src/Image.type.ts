import type {
  ImagePropsAndroid,
  ImagePropsBase,
  ImagePropsIOS,
} from "react-native";
import type { ImageProps } from "next/image";

export type ImageType = ImageProps & {
  native?: ImagePropsBase & ImagePropsAndroid & ImagePropsIOS;
};
