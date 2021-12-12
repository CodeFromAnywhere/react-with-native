import * as React from "react";

const Subtitle = ({
  children,
  white,
  extraClassName,
  attributes,
}: {
  children: any;
  white?: boolean;
  extraClassName?: string;
  attributes?: any;
}) => {
  return (
    <h3
      className={`text-lg font-bold ${white && `text-white`} ${
        extraClassName || ""
      }`}
      {...attributes}
    >
      {children}
    </h3>
  );
};
export default Subtitle;
