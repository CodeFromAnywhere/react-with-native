import ReactDOM from "react-dom";
import { MenuItem, ControlledMenu, useMenuState } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { MouseEvent, useState } from "react";
import { Item } from "./types";

const SelectMenu = <T extends unknown>({
  options,
  value,
  onChange,
  children,
}: {
  options: Item<T>[];
  value: Item<T>;
  onChange: (value: Item<T>) => void;
  children: any;
}) => {
  const { toggleMenu, ...menuProps } = useMenuState();
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  const onClick = (e: MouseEvent<Element>) => {
    e.preventDefault();
    setAnchorPoint({ x: e.clientX, y: e.clientY });
    toggleMenu(true);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <ControlledMenu
          {...menuProps}
          anchorPoint={anchorPoint}
          onClose={() => toggleMenu(false)}
        >
          {options.map((option, index) => (
            <MenuItem
              key={`menu${index}`}
              onClick={() => {
                option.onClick?.();
                onChange(option);
              }}
              className={"flex"}
            >
              <div className="w-6">{option.icon}</div>
              {option.label}
            </MenuItem>
          ))}
        </ControlledMenu>,
        document.getElementById("contextmenu")!
      )}
      {children({ onClick })}
    </>
  );
};
export default SelectMenu;
