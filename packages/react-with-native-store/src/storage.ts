/**
 * If you don't have access to the `useStore` hook, maybe because you're doing something outside of react... you can directly use the storage with javascript using this function
 */
export const getItem = async (key: string) => {
  if (typeof window === "undefined") {
    return undefined;
  }
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : undefined;
};

/**
 * If you don't have access to the `useStore` hook, maybe because you're doing something outside of react... you can directly use the storage with javascript using this function
 *
 * BEWARE! Updating this won't update your react components!
 */
export const setItem = async (key: string, value: any) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
};
