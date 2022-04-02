import * as ReactDOM from "react-dom";
import { MenuItem, ControlledMenu, useMenuState } from "@szhsin/react-menu";
import { MouseEvent, useState } from "react";
import { ChildrenType, Item, ID } from "./types";
import { Div, Svg } from "react-with-native";

const SelectMenu = <T extends unknown>({
  options,
  value,
  onChange,
  children,
  className,
}: {
  options: Item<T>[];
  value: Item<T>;
  onChange?: (value: Item<T>) => void;
  children: ChildrenType<T>;
  className?: string;
}) => {
  const { toggleMenu, ...menuProps } = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [id, setId] = useState<ID>();

  const onClick = (e?: MouseEvent<Element>, id?: ID) => {
    if (e) {
      e.preventDefault();
      setAnchorPoint({ x: e.clientX, y: e.clientY });
    }

    setId(id);

    toggleMenu(true);
  };

  if (typeof document === "undefined") {
    return null;
  }

  return (
    <Div className="w-full">
      {/* {ReactDOM.createPortal(
        <ControlledMenu
          {...menuProps}
          anchorPoint={anchorPoint}
          onClose={() => toggleMenu(false)}
        >
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <MenuItem
                key={`menu${index}`}
                onClick={(e) => {
                  option.onClick?.(id);
                  onChange?.(option);
                }}
                className={"flex items-center"}
              >
                <Div className="w-6 mr-4">
                  {Icon && <Svg src={Icon} className="w-6 h-6 text-black" />}
                </Div>
                {option.label}
              </MenuItem>
            );
          })}
        </ControlledMenu>,
        document.getElementById("contextmenu")!
      )} */}
      {children({ onClick, value, className })}
    </Div>
  );
};
export default SelectMenu;
