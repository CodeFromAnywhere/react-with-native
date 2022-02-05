export const trimClassName = (className: string) => {
  return className
    .split(" ")
    .filter((c) => !c.startsWith("focus:") && !c.startsWith("shadow-"))
    .join(" ");
};
