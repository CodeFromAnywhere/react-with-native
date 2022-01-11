import React from "react";
import { Div, Svg, Text } from "react-with-native";
import BrandIcon from "../../assets/icons/FaReact.svg";

function Footer() {
  return (
    <Div
      className={
        "flex flex-1 h-28 w-full p-4 justify-center bg-gradient-to-tl from-[#203c12] to-[#1e3a0f]"
      }
    >
      <Svg
        src={BrandIcon}
        width={8}
        height={8}
        className="self-center w-8 h-8 p-2 text-white"
      />
      <Text className="flex self-center text-white"> react-with-native </Text>
    </Div>
  );
}

export default Footer;
