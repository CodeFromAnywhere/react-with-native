import { MouseEventHandler } from "react";
import { OpenPage } from "../../store";
import { pagesObject } from "../../pages";
export declare type ClickIcon = {
    svgSrc: any;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    visible?: boolean;
};
export declare const renderOpenPage: (openPage: OpenPage, i: number, openPages: OpenPage[], setOpenPages: (value: OpenPage[]) => Promise<void>) => JSX.Element;
export declare const getActivePage: (pathname: string) => keyof typeof pagesObject;
export declare const OpenPages: () => JSX.Element | null;
//# sourceMappingURL=OpenPages.d.ts.map