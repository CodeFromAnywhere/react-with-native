import * as React from "react";
import { Image } from "react-with-native";
import Template from "../template";

const ImageScreen = () => {
  return (
    <Template
      component={
        <Image
          src={require("../../assets/kawaii.png")}
          width={120}
          height={120}
          native={{
            source: require("../../assets/kawaii.png"),
            resizeMode: "repeat",
          }}
        />
      }
      title={"Image"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { Image } from "react-with-native";`;

const USAGE = `
<Image
  src={require("../../assets/kawaii.png")}
  width={120}
  height={120}
  native={{
    source: require("../../assets/kawaii.png"),
    resizeMode: "repeat",
  }}
/>`;

export default ImageScreen;
