import React, { useState } from "react";
import { Div, Svg } from "react-with-native";
import Item from "../components/item";
import Category from "../components/category";
import HiOutlineMenu from "../../assets/icons/HiOutlineMenu.svg";
import CgClose from "../../assets/icons/CgClose.svg";

function MenuComponent({ pages }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleEnabled = () => {
    setIsEnabled(!isEnabled);
  };
  return (
    <>
      <Div className={"m-4 overflow-y-scroll rounded shadow-lg lg:relative w-60 bg-transparent"}>
          {pages.map((page, index) => {
            return (
              <Category key={index} title={page.name}>
                {page.elements.map((element, index) => {
                  return <Item key={index} page={element} />;
                })}
              </Category>
            );
          })}
      </Div>
    </>
  );
}

export default MenuComponent;
