import React, { useState } from "react";
import { Div, Svg } from "react-with-native";
import Category from "./Category";
import HiOutlineMenu from "../../assets/icons/HiOutlineMenu.svg";
import CgClose from "../../assets/icons/CgClose.svg";
import MenuItem from "./MenuItem";
import { useRouter } from "react-with-native-router";

function Menu({ categories }: { categories: CategoryType[] }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleEnabled = () => {
    setIsEnabled(!isEnabled);
  };
  const router = useRouter();
  const search = (router.query.search || "") as string;

  return (
    <>
      <Div
        className={
          "m-4 overflow-y-scroll lg:relative"
        }
      >
        {categories.map((category, index) => {
          const pages = category.pages.filter((p) =>
            !search || search.length === 0
              ? true
              : p.path.includes(search.toLowerCase())
          );
          return pages.length === 0 ? null : (
            <Category key={index} title={category.name}>
              {pages.map((page, index) => {
                return <MenuItem key={index} page={page} />;
              })}
            </Category>
          );
        })}
      </Div>
    </>
  );
}

export type CategoryType = {
  name: string;
  pages: PageType[];
};

export type PageType = {
  path: string;
  label: string;
};

export default Menu;
