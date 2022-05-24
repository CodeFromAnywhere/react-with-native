import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";
import { A, AType } from "react-with-native";

//combines next/link and html/a with and adds a couple sensible defaults
// for more info, see https://nextjs.org/learn/seo/rendering-and-ranking/on-page-seo and https://nextjs.org/docs/api-reference/next/link

/**
 * @returns origin, so protocol + domain + port
 */
export const getOrigin = () => {
  //we don't always have window.location, depending on where this is ran
  if (typeof window === "undefined" || typeof window.location === "undefined")
    return;
  return window.location.origin;
};

/**
 * @returns boolean indicating if a href is outgoing or not
 */
export const hrefIsOutgoing = (href: string) => {
  const origin = getOrigin();
  if (!origin) return false; //can't reason without this, assume it's an internal link
  if (!href.startsWith("http")) return false; //no http at beginning of href... must be internal
  const isSameOrigin = href.startsWith(origin);
  return !isSameOrigin; //probably external, except if you link to your own origin (which would be weird)
};

const ALink = ({
  children,
  href,
  target,
  rel,
  linkProps,
  ...otherAProps
}: { linkProps?: LinkProps } & AType) => {
  //overwrites rel and target if href is outgoing in order to enforce good SEO tactics (unless you specify them yourselves)
  [rel, target] =
    href && hrefIsOutgoing(href)
      ? [rel || "nofollow", target || "_blank"]
      : [rel, target];

  console.log({ href });
  return (
    <Link {...linkProps} href={href || "#"} passHref>
      <A {...otherAProps} rel={rel} target={target}>
        {children}
      </A>
    </Link>
  );
};

export default ALink;
