import { NestedWebPage } from "webpage-types";
import { MouseEventCallbacks } from "nested-menu-types";
/**
 * General purpose nested menu component
 *
 * Please make sure that you also wrap your app with `MenuStoreProvider`, or this will crash...!
 */
export declare const NestedMenu: (props: {
    items?: NestedWebPage[] | undefined;
    headersClickable?: boolean | undefined;
} & MouseEventCallbacks) => JSX.Element;
//# sourceMappingURL=NestedMenu.d.ts.map