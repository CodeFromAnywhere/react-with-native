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
