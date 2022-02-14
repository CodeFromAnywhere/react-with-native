import React, { useState } from "react";
import { Div, Pressable, Svg, Text, Toggle } from "react-with-native";
import { useRouter } from "react-with-native-router";
import BrandIcon from "../../../assets/icons/ReactGlobe.svg";
import HiOutlineMenu from "../../../assets/icons/HiOutlineMenu.svg";
import CgClose from "../../../assets/icons/CgClose.svg";
// import BrandIcon from "./icon";
import Search from "../Search";
import { navLinks } from "../../utils/navLinks";
import MobileMenu from "./NavbarMobile";
import NavbarLinks from "./NavbarLinks";

function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <Div
      className={
        "flex flex-1 w-full pt-3 bg-navbar lg:px-20 px-4 fixed top-0 right-0 left-0 z-40"
      }
    >
      <Div className="self-center flex-1">
        <Pressable onClick={() => router.push(`/`)}>
          <Div className="flex">
            <Svg
              src={BrandIcon}
              width={14}
              height={14}
              className="p-2 text-brand h-14 w-14 hover:motion-safe:animate-spin-fast"
            />
            <Text className="flex self-center text-xl text-white">
              react-with-native
            </Text>
          </Div>
        </Pressable>
      </Div>

      <Div className="block lg:hidden">
        {open ? (
          <MobileMenu>
            <Pressable onClick={() => setOpen(!open)}>
              <Svg
                src={CgClose}
                width={14}
                height={14}
                className="absolute top-0 right-0 p-2 text-brand h-14 w-14"
              />
            </Pressable>
            <NavbarLinks navLinks={navLinks} isMobile />
          </MobileMenu>
        ) : (
          <Pressable onClick={() => setOpen(!open)}>
            <Div className="flex">
              <Svg
                src={HiOutlineMenu}
                width={14}
                height={14}
                className="p-2 text-brand h-14 w-14"
              />
            </Div>
          </Pressable>
        )}
      </Div>

      <Div className="hidden lg:block">
        <NavbarLinks navLinks={navLinks} />
      </Div>
    </Div>
  );
}

export default Navbar;
