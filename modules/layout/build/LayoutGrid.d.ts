/// <reference types="react" />
import { MenuProps } from "menu";
/**
 * Style for creating a grid for the layout that is mobile friendly and has menu support
 *
 *
 *
   * I run into this problem all the time
   *
   * https://stackoverflow.com/questions/71616561/css-tailwind-grid-height-100vh-not-working
   *
   * final solution came from here
   *
   * https://stackoverflow.com/questions/47094742/fullscreen-flex-layouts-necessity-of-intermediate-flex-boxes
   *
   * Unfortunately, I can't seem to hide stuff anymore for some reason on non-mobile. "lg:flex hidden" just doesn't work, just hides!
   *
   * My elegant solution was to just use visible/invisible and make the mobile layout hover over the invisible one in case of a small screen, it works!
  
 */
export declare const LayoutGrid: (props: {
    children: React.ReactNode;
    header: React.ReactNode;
    /**
     * Menu is only rendered if you pass it here
     */
    menu?: MenuProps | undefined;
}) => JSX.Element;
//# sourceMappingURL=LayoutGrid.d.ts.map