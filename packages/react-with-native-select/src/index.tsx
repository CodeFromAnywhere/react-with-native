import SelectDropdown from "./SelectDropdown";
import SelectDrawer from "./SelectDrawer";
import SelectMenu from "./SelectMenu";
import { Item, SelectProps } from "./types";

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
  id,
}: SelectProps<T>) => {
  const realValue: Item<T> = value || { label: title, value: undefined as T };
  return (
    <>
      <div className={`hidden lg:flex ${containerClassName}`}>
        {children ? (
          <SelectMenu value={realValue} onChange={onChange} options={options}>
            {children}
          </SelectMenu>
        ) : (
          <SelectDropdown
            value={realValue}
            onChange={onChange}
            options={options}
            className={className || "w-60"}
          />
        )}
      </div>

      <div className={`lg:hidden ${containerClassName}`}>
        <SelectDrawer
          onChange={onChange}
          options={options}
          value={realValue}
          title={title}
          className={className}
          hasReset={hasReset}
          id={id}
        >
          {children}
        </SelectDrawer>
      </div>
    </>
  );
};

export default Select;
