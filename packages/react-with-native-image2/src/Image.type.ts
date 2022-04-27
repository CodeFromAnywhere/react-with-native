import type {
  ImagePropsAndroid,
  ImagePropsBase,
  ImagePropsIOS,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";
import type { ImageProps } from "next/image";

export type ImageType = ImageProps & {
  native?: ImagePropsBase & ImagePropsAndroid & ImagePropsIOS;
  style?: StyleProp<ImageStyle & { [key: string]: any }>;
};

export type NativeImageType = ImageSourcePropType & {
  native?: ImagePropsBase & ImagePropsAndroid & ImagePropsIOS;
  style?: StyleProp<ImageStyle & { [key: string]: any }>;
  className?: string;
  src?: string;
};
