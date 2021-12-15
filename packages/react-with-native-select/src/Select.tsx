import SelectDropdown from "./SelectDropdown";
import SelectDrawer from "./SelectDrawer";
import SelectMenu from "./SelectMenu";
import { Item } from "./types";

/**
 * renders either a SelectDropdown or SelectDrawer, based on screensize
 */
const Select = <T extends unknown>({
  options,
  onChange,
  value,
  title,
  className,
  children,
}: {
  title: string;
  options: Item<T>[];
  onChange: (value: Item<T> | null) => void;
  value?: Item<T>;
  className?: string;
  children?: any;
}) => {
  const realValue: Item<T> = value || { label: title, value: undefined as T };
  return (
    <div>
      <div className="hidden lg:flex">
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

      <div className="lg:hidden">
        <SelectDrawer
          onChange={onChange}
          options={options}
          value={realValue}
          title={title}
        >
          {children}
        </SelectDrawer>
      </div>
    </div>
  );
};

export default Select;
