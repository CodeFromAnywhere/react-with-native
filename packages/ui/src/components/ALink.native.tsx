import { A } from "react-with-native";
import type { ALinkType } from "./ALink.type";
import { hrefIsOutgoing } from "./ALink.util";

const ALink = ({
  children,
  href,
  target,
  rel,
  linkProps,
  ...otherAProps
}: ALinkType) => {
  //overwrites rel and target if href is outgoing in order to enforce good SEO tactics (unless you specify them yourselves)
  [rel, target] =
    href && hrefIsOutgoing(href)
      ? [rel || "nofollow", target || "_blank"]
      : [rel, target];

  return (
    <A {...otherAProps} rel={rel} target={target}>
      {children}
    </A>
  );
};

export default ALink;
