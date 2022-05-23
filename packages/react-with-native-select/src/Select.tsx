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
  containerClassName,
  selectFirstOption,
  //unused atm
  children,
  className,
  ios,
}: SelectProps<T>) => {
  const realValue = getRealValue({ value, selectFirstOption, options, title });
  return (
    <div className={containerClassName}>
      <select
        onChange={(e) => {
          const value = e.target.value;
          const newValue = options.find((x) => x.value === value) || null;

          console.log("select change", { value, newValue });
          onChange?.(newValue);
        }}
        className={className}
        value={String(value?.value)}
      >
        {options.map((option, index) => {
          return (
            <option value={String(option.value)} key={index}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
