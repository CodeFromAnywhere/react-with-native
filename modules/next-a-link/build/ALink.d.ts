/// <reference types="node" />
/// <reference types="react" />
import { LinkProps } from "next/link";
import { AType } from "react-with-native";
/**
 * A simple wrapper around react-with-native A and next-link
 *
 * All links you make with this component are SEO-ready
 */
export declare const ALink: ({ children, href, target, rel, linkProps, ...otherAProps }: {
    linkProps?: {
        href: string | import("url").UrlObject;
        as?: (string | import("url").UrlObject) | undefined;
        replace?: boolean | undefined;
        scroll?: boolean | undefined;
        shallow?: boolean | undefined;
        passHref?: boolean | undefined;
        prefetch?: boolean | undefined;
        locale?: string | false | undefined;
        legacyBehavior?: boolean | undefined;
        onMouseEnter?: ((e: any) => void) | undefined;
        onClick?: ((e: any) => void) | undefined;
    } | undefined;
} & import("react").ClassAttributes<HTMLAnchorElement> & import("react").AnchorHTMLAttributes<HTMLAnchorElement> & {
    native?: import("react-native").TextProps | undefined;
    textClassName?: string | undefined;
}) => JSX.Element;
//# sourceMappingURL=ALink.d.ts.map