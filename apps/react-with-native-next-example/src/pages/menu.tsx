import React from "react";
import { Div, useRouter } from "react-with-native";
import MenuComponent from "../components/menu";

const pages = [
  {
    name: "html",
    elements: [
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
    elements: [
      { path: "form", label: "Form" },
      { path: "select", label: "Select" },
    ],
  },
];

function Menu({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Div className="flex flex-1 min-h-screen ">
      <MenuComponent pages={pages} />
      <Div className="relative flex flex-1">
        <Component {...pageProps} />
      </Div>
    </Div>
  );
}

export default Menu;
