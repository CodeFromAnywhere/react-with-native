export type StoreConfig<T extends { [key: string]: any }> = {
  /**
   * try to get this into a generic so it will be possible to see which values there are
   */
  defaultValues: T;
  baseKey?: string;
};

export type AnyObject = {
  [key: string]: any;
};

export type StoreOptions = {
  /**
   * by default, both are returned
   */
  return?: "value" | "dispatch";
};

export type Keys<T> = Extract<keyof T, string>;

export type Dispatch<T> = (value: T) => Promise<void>;
