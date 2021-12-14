import { IconType } from 'react-icons/lib';

export type Item<T> = {
  value: T;
  label: string;
  icon?: IconType;
};
