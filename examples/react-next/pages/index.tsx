import React from "react";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Div, Pressable, Text, H2 } from "react-with-native";
const Home: NextPage = () => {
  return (
    <Div
      className={
        "bg-green-400 flex absolute top-0 bottom-0 left-0 right-0 flex-col flex-1 justify-center items-center"
      }
    >
      <H2 className={"text-red-600"}>Welcome to REACT WITH NATIVE BITCH</H2>

      <Div>
        <Pressable
          className="p-4 bg-yellow-400 rounded-full"
          onClick={() => {
            console.log("Lkjdslkfdjslakjdsfk");
          }}
        >
          <Text>WAT DAN</Text>
        </Pressable>
      </Div>
    </Div>
  );
};

export default Home;
