import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

export type MainPageProps = {
  markdownString: null | string;
  queryPaths: string[];
};

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
  (props?: any): JSX.Element;
  options: PageOptions;
};

/**
 * coming soon! We could ask people to add examples of the usage of their component to automatically generate frontend-docs!
 */

export type ComponentOptions = {
  example?: JSX.Element;
};
export type RWNComponent = {
  (): JSX.Element;
  options: ComponentOptions;
};
