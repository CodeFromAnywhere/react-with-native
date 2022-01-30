import * as React from "react";
import { ButtonProps } from "react-native";
import { ActivityIndicator } from ".";
import { Button, Div } from "..";

const UIButton = ({
  onClick,
  onPress,
  title,
  style,
  color,
  loading,
  extraClassName,
  disabled,
}: {
  /**
   * not needed inside a form
   */
  onClick?: () => void;
  /**
   * always needed, unless you give onClick
   */
  onPress?: () => void;

  title: string;
  loading?: boolean;
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

  const native: ButtonProps = {
    title,
    color,
    disabled,
    onPress: (onClick || onPress)!,
  };

  return (
    <Button
      className={`flex px-6 py-2 justify-center text-white transition duration-200 rounded-lg ${bgColor} ${bgColorHover} ${extraClassName}`}
      style={style}
      onClick={onClick}
      native={native}
    >
      {loading ? (
        <Div className="mr-2">
          <ActivityIndicator />
        </Div>
      ) : null}
      {title}
    </Button>
  );
};
export default UIButton;
