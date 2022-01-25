import React, { useState } from "react";
import { Div, Pressable, Text } from "react-with-native";
import Menu, { CategoryType } from "./Menu";
import Search from "../../Search";

const categories: CategoryType[] = [
  {
    name: "Installation",
    pages: [{ path: "gettingStarted", label: "Getting Started" }],
  },
  {
    name: "HTML",
    pages: [
      { path: "a", label: "A" },
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
    name: "Components",
    pages: [{ path: "form", label: "Form" }],
  },
];

function Sidebar() {
  return (
    <Div className="flex-row border-r border-gray-200 w-64 max-h-full justify-items-center bg-[#fefefe] md:block hidden z-20 pt-24">
      <Search />
      <Menu categories={categories} />
    </Div>
  );
}

function SidebarSM() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Pressable className="p-4" onClick={() => setIsOpen(!isOpen)}>
      <Text className={`${isOpen ? "invisible" : "visible"} text-white`}>
        Menu {">"}
      </Text>
    </Pressable>
  );
}

export default Sidebar;
