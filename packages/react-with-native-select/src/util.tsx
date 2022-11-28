import { Item } from "./types";

export const getRealValue = <T extends unknown>({
  value,
  selectFirstOption,
  options,
  title,
}: {
  title: string;
  options: Item<T>[];
  value?: Item<T> | null;
  selectFirstOption?: boolean;
}): Item<T> => {
  const result = value
    ? value
    : selectFirstOption
    ? options[0]
    : { label: title, value: "", data: undefined };

  return result;
};
