import type {
  ImagePropsAndroid,
  ImagePropsBase,
  ImagePropsIOS,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
} from "react-native";
import type { ImageProps } from "next/image";

export type ImgType = ImageProps & {
  native?: ImagePropsBase & ImagePropsAndroid & ImagePropsIOS;
  style?: StyleProp<ImageStyle & { [key: string]: any }>;
};

export type NativeImgType = ImageSourcePropType & {
  native?: ImagePropsBase & ImagePropsAndroid & ImagePropsIOS;
  style?: StyleProp<ImageStyle & { [key: string]: any }>;
  className?: string;
  src?: string;
};
