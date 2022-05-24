import type { ImagePropsAndroid, ImagePropsBase, ImagePropsIOS, ImageSourcePropType, ImageStyle, StyleProp } from "react-native";
import type { ImageProps } from "next/image";
export declare type ImgType = ImageProps & {
    native?: ImagePropsBase & ImagePropsAndroid & ImagePropsIOS;
    style?: StyleProp<ImageStyle & {
        [key: string]: any;
    }>;
};
export declare type NativeImgType = ImageSourcePropType & {
    native?: ImagePropsBase & ImagePropsAndroid & ImagePropsIOS;
    style?: StyleProp<ImageStyle & {
        [key: string]: any;
    }>;
    className?: string;
    src?: string;
};
//# sourceMappingURL=Img.type.d.ts.map