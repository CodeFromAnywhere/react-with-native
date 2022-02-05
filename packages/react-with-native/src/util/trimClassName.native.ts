export const trimClassName = (className: string) => {
  const classNames = className.split(" ");
  console.log("gonna trim ", className, classNames);
  return classNames
    .filter((c) => !c.startsWith("focus:") && !c.startsWith("shadow-"))
    .join(" ");
};
