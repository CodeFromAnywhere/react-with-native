import React from "react";
import { Div, Svg, Text } from "react-with-native";
import BrandIcon from "../../../assets/icons/FaReact.svg";

function Footer() {
  return (
    <Div
      className={
        "flex w-full p-4 justify-center bottom-0 right-0 bg-navbar  border-t border-zinc-600"
      }
    >
      <Svg
        src={BrandIcon}
        width={8}
        height={8}
        className="self-center w-8 h-8 p-2 text-brand"
      />
      <Text className="flex self-center text-gray-100">
        {" "}
        react-with-native{" "}
      </Text>
    </Div>
  );
}

export default Footer;
