import React from "react";
import { Div, Pressable, useRouter } from "react-with-native";

function Item({ page }) {
  const router = useRouter();
  return (
    <Div className="w-full text-gray-500 cursor-pointer focus:text-sky-200 focus:outline-none active:bg-sky-200 hover:text-sky-500">
      <Pressable
        className="w-full px-4 py-1 text-left hover:border-l-4"
        onClick={() => router.push(`/${page.path}`)}
      >
        {page.label}
      </Pressable>
    </Div>
  );
}

export default Item;
