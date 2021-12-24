export const getItem = async (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : undefined;
};

export const setItem = async (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};
