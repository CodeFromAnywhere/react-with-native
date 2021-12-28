import React from "react";
import { Div, Pressable, useRouter } from "react-with-native";

function Menu({ Component, pageProps}) {
  const pages = [
    { path: "activityIndicator", label: "Activity Indicator" },
    { path: "button", label: "Button" },
    { path: "div", label: "Div" },
    { path: "h2", label: "H2" },
    { path: "image", label: "Image" },
    { path: "input", label: "Input" },
    { path: "label", label: "Label" },
    { path: "pressable", label: "Pressable" },
    { path: "strong", label: "Strong" },
    { path: "text", label: "Text" },
    { path: "toggle", label: "Toggle" },
    { path: "form", label: "Form" },
    { path: "select", label: "Select" },
  ];
  const router = useRouter();
  return (
    <Div className="flex flex-1 min-h-screen">
      <Div className="bg-green-400 lg:relative lg:w-60">
        MENU
        {pages.map((page, index) => {
          return (
            <Div key={page.label} className="w-full h-10 cursor-pointer">
              <Pressable onClick={() => router.push(`/${page.path}`)}>
                {page.label}
              </Pressable>
            </Div>
          );
        })}
      </Div>
      
      <Div className="relative flex flex-1">
        <Component {...pageProps} />
      </Div>
      
    </Div>
  );
}

export default Menu;
