export type StoreConfig<T> = {
  /**
   * try to get this into a generic so it will be possible to see which values there are
   */
  defaultValues: T;
  baseKey?: string;
};

export type StoreOptions = {
  /**
   * by default, both are returned
   */
  return?: "value" | "dispatch";
};

export type Keys<T> = Extract<keyof T, "string">;
