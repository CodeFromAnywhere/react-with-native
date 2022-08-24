import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { Item, SelectProps } from "./types";
import { getRealValue } from "./util";

/**
 * renders either a SelectDropdown or SelectDrawer, based on screensize
 */
export const Select = <T extends unknown>({
  options,
  onChange,

  value,
  title,
  containerClassName,
  selectFirstOption,
  autoSuggest,
  //unused atm
  children,
  className,
  ios,
}: SelectProps<T>) => {
  const [temporaryValue, setTemporaryValue] = useState("");
  const [id] = useState(`list${String(Math.round(Math.random() * 100000))}`);

  const realValue = getRealValue({ value, selectFirstOption, options, title });

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    const newValue = options.find((x) => x.value === value) || null;

    console.log("select change", { value, newValue });
    onChange?.(newValue);
  };

  const renderOptions = () => {
    return (
      <>
        {options.map((option, index) => {
          return (
            <option value={String(option.value)} key={index}>
              {option.label}
            </option>
          );
        })}
      </>
    );
  };

  return (
    <div className={containerClassName}>
      {autoSuggest ? (
        <span>
          <input
            list={id}
            onChange={(event) => {
              const value = event.target.value;

              const foundOption = options.find((x) => x.value === value);
              if (foundOption) {
                onChange?.(foundOption);
              }

              setTemporaryValue(value);
            }}
            className={className}
            value={temporaryValue}
          />

          <datalist placeholder={title} id={id}>
            {renderOptions()}
          </datalist>
        </span>
      ) : (
        <select
          onChange={onChangeSelect}
          className={className}
          value={String(value?.value)}
        >
          {renderOptions()}
        </select>
      )}
    </div>
  );
};
