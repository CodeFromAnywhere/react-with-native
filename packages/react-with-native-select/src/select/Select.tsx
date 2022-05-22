import { Item, SelectProps } from "./types";
import { getRealValue } from "./util";

/**
 * renders either a SelectDropdown or SelectDrawer, based on screensize
 */
const Select = <T extends unknown>({
  options,
  onChange,
  value,
  title,
  className,
  containerClassName,
  children,
  hasReset,
  selectFirstOption,
  id,
}: SelectProps<T>) => {
  const realValue = getRealValue({ value, selectFirstOption, options, title });
  return (
    <div className={containerClassName}>
      <select
        onChange={(e) => {
          const value = e.target.value;
          const newValue = options.find((x) => x.value === value) || null;
          onChange?.(newValue);
        }}
      >
        {options.map((option, index) => {
          const isSelected = realValue?.value === option.value;
          return (
            <option key={index} selected={isSelected}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
