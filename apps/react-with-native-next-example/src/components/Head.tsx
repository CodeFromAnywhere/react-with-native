import React from "react";
import { Div, Pressable, Svg, Text, Toggle } from "react-with-native";
import { useRouter } from "react-with-native-router";
import BrandIcon from "../../assets/icons/FaReact.svg";

function Head() {
  const router = useRouter();
  return (
    <Div
      className={
        "flex w-full p-4 bg-gradient-to-tl from-[#203c12] to-[#1e3a0f]"
      }
    >
      <Pressable onClick={() => router.push(`/`)}>
        <Div className="flex">
          <Svg
            src={BrandIcon}
            width={14}
            height={14}
            className="p-2 text-[#9bd78f] h-14 w-14"
          />
          <Text className="flex self-center text-xl text-white">
            react-with-native
          </Text>
        </Div>
      </Pressable>
    </Div>
  );
}

export default Head;
