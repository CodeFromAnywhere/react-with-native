/// <reference types="react" />
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
export declare type MainPageProps = {
    markdownString: null | string;
    queryPaths: string[];
};
export declare type PageOptions = {
    /**
     * should this page be hidden in the root menu? Not hidden by default
     */
    hideFromMenu?: boolean;
    /**
     * What title should be shown as the page title and on the menu? Uses the page filename (capitalized) as a default
     */
    title?: string;
};
export declare type PageType = {
    component: RWNPage;
    key: string;
    reactNavigationOptions?: NativeStackNavigationOptions | ((props: {
        route: any;
        navigation: any;
    }) => NativeStackNavigationOptions) | undefined;
} & PageOptions;
export declare type RWNPage = {
    (props?: any): JSX.Element;
    options: PageOptions;
};
/**
 * coming soon! We could ask people to add examples of the usage of their component to automatically generate frontend-docs!
 */
export declare type ComponentOptions = {
    example?: JSX.Element;
};
export declare type RWNComponent = {
    (): JSX.Element;
    options: ComponentOptions;
};
//# sourceMappingURL=types.d.ts.map