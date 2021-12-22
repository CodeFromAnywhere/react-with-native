import ReactDOM from "react-dom";
import { MenuItem, ControlledMenu, useMenuState } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { MouseEvent, useState } from "react";
import { ChildrenType, Item } from "./types";
import { Svg } from "react-with-native";

const SelectMenu = <T extends unknown>({
  options,
  value,
  onChange,
  children,
  className,
}: {
  options: Item<T>[];
  value: Item<T>;
  onChange: (value: Item<T>) => void;
  children: ChildrenType<T>;
  className?: string;
}) => {
  const { toggleMenu, ...menuProps } = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [id, setId] = useState<string|number|null>(null);

  const onClick = (e: MouseEvent<Element>, id: string | number) => {
    e.preventDefault();
    setAnchorPoint({ x: e.clientX, y: e.clientY });
    toggleMenu(true);
    setId(id);
  };

  if (typeof document === "undefined") {
    return null;
  }

  return (
    <div className="w-full">
      {ReactDOM.createPortal(
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
                  onChange(option);
                }}
                className={"flex items-center"}
              >
                <div className="w-6 mr-4">
                  {Icon && <Svg src={Icon} className="w-6 h-6 text-black" />}
                </div>
                {option.label}
              </MenuItem>
            );
          })}
        </ControlledMenu>,
        document.getElementById("contextmenu")!
      )}
      {children({ onClick, value, className })}
    </div>
  );
};
export default SelectMenu;
