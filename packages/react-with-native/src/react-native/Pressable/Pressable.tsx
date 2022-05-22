import * as React from "react";
import { joinClassNames } from "../../util/util";
import { PressableType } from "./Pressable.type";

/**
 * button on web, pressable on react-native
 */
const Pressable = ({
  native,
  textClassName,
  className,
  ...props
}: PressableType) => {
  return (
    <button {...props} className={joinClassNames(className, textClassName)} />
  );
};

export default Pressable;
