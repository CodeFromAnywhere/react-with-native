export const getItem = async (key: string) => {
  if (typeof window === "undefined") {
    return undefined;
  }
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : undefined;
};

export const setItem = async (key: string, value: any) => {
  if (typeof window === "undefined") {
    return;
  }
  localStorage.setItem(key, JSON.stringify(value));
};
