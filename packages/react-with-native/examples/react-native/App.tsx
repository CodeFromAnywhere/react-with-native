import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Div, Pressable, Text, H2 } from "react-with-native";
export default function App() {
  const onClick = () => {
    console.log("Lkjdslkfdjslakjdsfk");
  };
  return (
    <Div
      className={
        "bg-green-400 flex flex-col  absolute top-0 bottom-0 left-0 right-0 flex-1 justify-center items-center"
      }
    >
      <H2 className={"text-red-600"}>Welcome to REACT WITH NATIVE BITCH</H2>

      <Div>
        <Pressable
          className="p-4 bg-yellow-400 rounded-full"
          onClick={onClick}
          native={{ onPress: onClick }}
        >
          <Text>WAT DAN</Text>
        </Pressable>
      </Div>
    </Div>
  );
}
