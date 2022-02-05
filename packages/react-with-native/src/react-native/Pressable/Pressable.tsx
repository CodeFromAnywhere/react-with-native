import * as React from "react";
import { PressableType } from "./Pressable.type";

/**
 * button on web, pressable on react-native
 */
const Pressable = ({ native, ...props }: PressableType) => {
  return <button {...props} />;
};

export default Pressable;
