import { UI } from "react-with-native-ui";
import { Select } from "./Select";
import { Button, Div, P, Span } from "react-with-native";
import { Item } from "./types";

export type SelectMultipleInputProps<T extends unknown> = {
  value: Item<T | null>[];
  className?: string;
  onChange: (value: Item<T | null>[]) => void;
  uniqueFieldId?: string;
  autoSuggest?: boolean;
  title?: string;
  options: Item<T | null>[];
  placeholder?: string;
  noPlaceholder?: boolean;
};

export const SelectMultipleInput = <T extends unknown>(
  props: SelectMultipleInputProps<T>
) => {
  const {
    onChange,
    options,
    className,
    value,
    autoSuggest,
    noPlaceholder,
    placeholder,
    title,
    uniqueFieldId,
  } = props;

  //console.log({ value, extraOptions: extra.options });
  const defaultOption: Item<T | null> = {
    label: title || "Choose a value",
    value: "",
  };

  const optionsLeft = [defaultOption]
    .concat(options)
    .filter((x) => !value.find((i) => x.value === i.value));
  return (
    <Div className="flex flex-row flex-wrap">
      {value.map((item, index) => (
        <Button
          onClick={() => {
            const newValue = value.filter((x) => x.value !== item.value);
            onChange(newValue);
          }}
          key={`selected${uniqueFieldId}${index}`}
          className={`mr-3 px-3 py-2 rounded-md border border-gray-400`}
        >
          <P className="text-xs">
            {item.label} <Span textClassName="text-red-500 text-xs">(x)</Span>
          </P>
        </Button>
      ))}

      {optionsLeft.length > 1 ? (
        <Select
          placeholder={placeholder}
          noPlaceholder={noPlaceholder}
          autoSuggest={autoSuggest}
          className={className || UI.selectInput}
          title={title || ""}
          options={optionsLeft}
          onChange={(selected) => {
            // console.log({ selected });
            if (selected) {
              const newValue = [...value];

              newValue.push(selected);

              // console.log({ value, newValue });
              onChange(newValue);
            }
          }}
        />
      ) : null}
    </Div>
  );
};
