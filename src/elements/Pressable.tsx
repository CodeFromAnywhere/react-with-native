import React from "react";
import { PressableComponentType } from "./Pressable.type";

const Pressable = ({ native, ...props }: PressableComponentType) => {
  return <button {...props} />;
};

export default Pressable;
