import * as React from "react";

export default function H2({
  children,
  attributes,
}: {
  children: any;
  attributes?: any;
}) {
  return (
    <h2
      className="mt-12 md:mt-[70px] md:text-[38px] text-3xl font-bold"
      {...attributes}
    >
      {children}
    </h2>
  );
}
