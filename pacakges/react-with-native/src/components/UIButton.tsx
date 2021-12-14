import * as React from "react";
import { Button } from "..";

const UIButton = ({
  onClick,
  title,
  style,
  color,
  extraClassName,
  disabled,
}: {
  onClick: () => void;
  title: string;
  style?: object;
  extraClassName?: string;
  color?: "red" | "green" | "gray";
  disabled?: boolean;
}) => {
  let bgColor = `bg-blue-400`;
  let bgColorHover = `hover:bg-blue-500`;

  if (color === "red") {
    bgColor = `bg-red-400`;
    bgColorHover = `hover:bg-red-500`;
  }

  if (color === "green") {
    bgColor = `bg-green-400`;
    bgColorHover = `hover:bg-green-500`;
  }

  if (color === "gray") {
    bgColor = `bg-gray-400`;
    bgColorHover = `hover:bg-gray-500`;
  }

  return (
    <Button
      className={`flex px-6 py-2 text-white transition duration-200  rounded-lg ${bgColor} ${bgColorHover} ${extraClassName}`}
      style={style}
      onClick={onClick}
      native={{ title, onPress: onClick, color, disabled }}
    >
      {title}
    </Button>
  );
};
export default UIButton;
