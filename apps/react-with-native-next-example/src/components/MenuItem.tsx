import React from "react";
import { Div, Pressable } from "react-with-native";
import { useRouter } from "react-with-native-router";
import { PageType } from "./Menu";

function MenuItem({ page }: {page: PageType}) {
  const router = useRouter();
  return (
    <Div className="w-full cursor-pointer active:bg-green-100 hover:text-[#9bd78f] text-gray-800">
      <Pressable
        className="w-full px-4 py-1 text-left hover:border-l-2 border-[#208f3a]"
        onClick={() => router.push(`/${page.path}`)}
      >
        {page.label}
      </Pressable>
    </Div>
  );
}

export default MenuItem;
