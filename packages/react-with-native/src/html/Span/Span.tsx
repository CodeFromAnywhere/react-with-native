import * as React from "react";
import { SpanType } from "./Span.type";

const Span = ({ native, ...props }: SpanType) => {
  return <span {...props} />;
};

export default Span;
