import { ImagePropsAndroid, ImagePropsBase, ImagePropsIOS } from "react-native";
import { ImageProps } from "next/image";

export type ImageType = ImageProps & {
  native?: ImagePropsBase & ImagePropsAndroid & ImagePropsIOS;
};
