import type {
  ImagePropsAndroid,
  ImagePropsBase,
  ImagePropsIOS,
  ImageStyle,
  StyleProp,
} from "react-native";
import type { ImageProps } from "next/image";

export type ImageType = ImageProps & {
  native?: ImagePropsBase & ImagePropsAndroid & ImagePropsIOS;
  style?: StyleProp<ImageStyle & { [key: string]: any }>;
};
