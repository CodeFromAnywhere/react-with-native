import { Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { trimClassName } from "../../util/trimClassName";
import { PType } from "./P.type";

export const P = ({ native, children, className }: PType) => {
  const tailwind = useTailwind();
  const { style, ...nativeWithoutStyle } = native || {};
  const tailwindStyle = className ? tailwind(trimClassName(className)) : {};
  return (
    //why would be need a view around this?
    // <View style={{ flexDirection: "row" }}>
    <Text
      style={[{ flexShrink: 1 }, tailwindStyle, style]}
      {...nativeWithoutStyle}
    >
      {children}
    </Text>
    //</View>
  );
};
