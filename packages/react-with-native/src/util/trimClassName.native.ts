export const trimClassName = (className: string) => {
  const classNames = className.split(" ");

  const trimmedClassName = classNames
    .filter(
      (c) =>
        !(
          (
            c === "" ||
            c.startsWith("focus:") ||
            c.startsWith("shadow-") ||
            c === "block"
          ) // block crashes android
        )
    )
    .join(" ");

  // console.log("trimClassName", { className, classNames, trimmedClassName });

  return trimmedClassName;
};
