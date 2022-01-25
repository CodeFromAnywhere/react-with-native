import React from "react";
import { A, Div, Li, Pressable, Svg, Ul } from "react-with-native";
import { useRouter } from "react-with-native-router";
import { NavLinksType } from "../../utils/navLinks";

function NavbarLinks({
  navLinks,
  isMobile,
}: {
  navLinks: NavLinksType[];
  isMobile?: boolean;
}) {
  const router = useRouter();
  return (
    <Ul className={`items-center ${isMobile ? "flex-row w-full" : "flex"}`}>
      {navLinks.map((link, index) => {
        return (
          <Div key={index}>
            {link.isIcon ? (
              <ItemIcon icon={link.name} path={link.path} />
            ) : (
              <Pressable
                className={`p-4 text-white transition ease-in-out cursor-pointer duration-800 hover:text-brand ${
                  isMobile ? "w-full" : ""
                }`}
                onClick={() => router.push(link.path)}
              >
                <Li>{link.name}</Li>
              </Pressable>
            )}
          </Div>
        );
      })}
    </Ul>
  );
}

const ItemIcon = ({ icon, path }: { icon: any; path: string }) => {
  return (
    <Li>
      <A
        className="flex justify-center px-4 transition ease-in-out cursor-pointer text-brand duration-800 hover:text-white"
        href={path}
      >
        <Svg src={icon} width={10} height={10} className="w-10 h-10 p-2" />
      </A>
    </Li>
  );
};

export default NavbarLinks;
