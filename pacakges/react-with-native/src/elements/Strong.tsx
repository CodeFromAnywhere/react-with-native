import { StrongType } from "./Strong.type";

const Strong = ({ native, ...props }: StrongType) => {
  return <strong {...props} />;
};

export default Strong;
