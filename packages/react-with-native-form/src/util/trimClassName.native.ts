export const trimClassName = (className: string) => {
  const classNames = className.split(" ");

  const trimmedClassName = classNames
    .filter(
      (c) => !(c === "" || c.startsWith("focus:") || c.startsWith("shadow-"))
    )
    .join(" ");

  // console.log("trimClassName", { className, classNames, trimmedClassName });

  return trimmedClassName;
};
