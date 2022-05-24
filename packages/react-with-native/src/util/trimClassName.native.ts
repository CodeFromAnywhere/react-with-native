export const trimClassName = (className: string) => {
  const classNames = className.split(" ");

  const trimmedClassName = classNames
    .filter(
      (c) =>
        !(
          (
            c === "" ||
            c.startsWith("focus:") ||
            c.startsWith("hover:") ||
            c.startsWith("shadow-") ||
            c.startsWith("cursor-") ||
            c === "block" ||
            c === "h-screen" ||
            c === "w-screen" ||
            c === "undefined" ||
            c === "select-none"
          ) // block crashes android
        )
    )
    .join(" ");

  // console.log("trimClassName", { className, classNames, trimmedClassName });

  return trimmedClassName;
};
