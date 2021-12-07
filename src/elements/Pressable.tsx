import React from "react";
import { PressableType } from "./Pressable.type";

const Pressable = ({ native, ...props }: PressableType) => {
  return <button {...props} />;
};

export default Pressable;
