import menu from "./pages/menu";
import index from "./pages/index";
import form from "./pages/form";
import utilities from "./pages/utilities";
import { PageType } from "./types";

export const pagesObject = { menu, index, form, utilities };

type PageKey = keyof typeof pagesObject;

const pageKeys = Object.keys(pagesObject) as PageKey[];

export const pages: PageType[] = pageKeys.map((pageKey) => ({
  ...pagesObject[pageKey].options,
  component: pagesObject[pageKey],
  key: pageKey,
}));

export const getPageTitle = (page: PageType) =>
  page.title || page.key.charAt(0).toUpperCase().concat(page.key.slice(1));

export default pages;
