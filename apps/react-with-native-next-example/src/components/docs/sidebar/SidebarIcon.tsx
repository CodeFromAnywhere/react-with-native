import React, { useState } from "react";
import { Pressable, Svg } from "react-with-native";
import CgSearch from "../../assets/icons/CgSearch.svg";

function SidebarIcon() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Pressable className="p-4" onClick={() => setIsOpen(!isOpen)}>
      <Svg
        src={CgSearch}
        width={20}
        height={20}
        className={`${isOpen ? "invisible" : "visible"} text-white`}
      />
    </Pressable>
  );
}

export default SidebarIcon;
