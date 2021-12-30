import * as React from "react";
import {
  Button as RNButton,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import { ButtonType } from "./Button.type";

const Button = ({ native, ...props }: ButtonType) => {
  native = native!;
  return Platform.OS === "ios" ? (
    <RNButton {...native}>{props.children}</RNButton>
  ) : (
    <TouchableOpacity onPress={native.onPress}>
      <Text
        style={[
          {
            color: native.color || "#177ffb",
            textAlign: "center",
            margin: 8,
            fontSize: 18,
          },
        ]}
      >
        {native.title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

//nartive
