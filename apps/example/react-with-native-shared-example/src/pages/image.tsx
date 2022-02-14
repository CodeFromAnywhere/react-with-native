import * as React from "react";
import { Image } from "react-with-native";
import Template, { TemplateType } from "../components/Template";

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
      info={info}
    />
  );
};

const info: TemplateType = {
  title: "Image",
  instalation: "yarn add react-with-native",
  imports: 'import { Image } from "react-with-native";',
  usage: [
    {
      title: "Usage",
      code: `
      <Image
        src={require("../../assets/kawaii.png")}
        width={120}
        height={120}
        native={{
          source: require("../../assets/kawaii.png"),
          resizeMode: "repeat",
        }}
      />`,
    },
  ],
};

export default ImageScreen;
