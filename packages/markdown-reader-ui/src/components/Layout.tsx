import { Div, Span } from "react-with-native";
import {
  NestedMenu,
  queryPathsArrayToNestedPathObject,
  nestedPathObjectToNestedMenuRecursive,
  MenuItemType,
  MenuType,
} from "nested-menu";

export const Layout = ({
  queryPaths,
  children,
}: {
  queryPaths: string[];
  children: any;
}) => {
  const nestedPathObject = queryPathsArrayToNestedPathObject(queryPaths);
  const pathsMenu = nestedPathObjectToNestedMenuRecursive(nestedPathObject);

  const homeMenu: MenuItemType = { title: "Home", href: "/" };
  const menu: MenuType = pathsMenu ? [homeMenu, ...pathsMenu] : [homeMenu];
  return (
    <Div className="h-screen grid grid-rows-6">
      <Div className="row-span-6 grid grid-cols-5">
        <Div
          className={`
        col-span-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white`}
          textClassName="dark:text-white"
        >
          {children}
        </Div>
        <Span className="border-l col-span-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white border-l-gray-400">
          {menu ? <NestedMenu menu={menu} /> : "Menu couldn't be found"}
        </Span>
      </Div>
    </Div>
  );
};
