import * as React from "react";
import { Div, Pressable, Text, H2, Svg, Image } from "react-with-native";
import Icon from "./assets/AiFillDashboard.svg";
export default function App() {
  constonClick = () => {
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
          <Text>kkk k</Text>
          <Svg src={Icon} width={23} height={23} />
        </Pressable>
        <Image
          className=""
          src={require("./assets/favicon.png")}
          alt=""
          height="100"
          width="100"
          native={{source:require('./assets/favicon.png')}}ts/')}}
 />     />
      </Div>
    </Div> );
}
