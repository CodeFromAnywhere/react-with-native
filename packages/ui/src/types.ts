import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export type PageOptions = {
  /**
   * should this page be hidden in the root menu? Not hidden by default
   */
  hideFromMenu?: boolean;
  /**
   * What title should be shown as the page title and on the menu? Uses the page filename (capitalized) as a default
   */
  title?: string;
};

export type PageType = {
  component: RWNPage;
  key: string;
  reactNavigationOptions?:
    | NativeStackNavigationOptions
    | ((props: { route: any; navigation: any }) => NativeStackNavigationOptions)
    | undefined;
} & PageOptions;

export type RWNPage = {
  (): JSX.Element;
  options: PageOptions;
};
