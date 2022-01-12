import React from "react";
import { Div, Pressable } from "react-with-native";
import Head from "./Head";
import Menu, { CategoryType } from "./Menu";
import Search from "./Search";

const categories: CategoryType[] = [
  {
    name: "html",
    pages: [
      { path: "activityIndicator", label: "Activity Indicator" },
      { path: "button", label: "Button" },
      { path: "div", label: "Div" },
      { path: "h2", label: "H2" },
      { path: "p", label: "P" },
      { path: "i", label: "I" },
      { path: "li", label: "Li" },
      { path: "image", label: "Image" },
      { path: "input", label: "Input" },
      { path: "label", label: "Label" },
      { path: "pressable", label: "Pressable" },
      { path: "strong", label: "Strong" },
      { path: "text", label: "Text" },
      { path: "toggle", label: "Toggle" },
    ],
  },
  {
    name: "components",
    pages: [{ path: "form", label: "Form" }],
  },
];

function Sidebar() {
  return (
    <Div className="flex-row border-r border-gray-200 w-64 max-h-full justify-items-center bg-[#fefefe]">
      <Search />
      <Menu categories={categories} />
    </Div>
  );
}

export default Sidebar;
