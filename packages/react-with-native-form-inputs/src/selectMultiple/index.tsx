import { PluginComponent, PluginInputType } from "react-with-native-form";
import UI from "react-with-native-ui";
import Select, { Item } from "react-with-native-select";
import { Button, Div, P, Span } from "react-with-native";

export const SelectMultipleInput: PluginComponent<SelectMultipleInputType> = ({
  value,
  extra,
  onChange,
  uniqueFieldId,
}) => {
  //console.log({ value, extraOptions: extra.options });
  const optionsLeft = [{ label: "Choose a value", value: "" }]
    .concat(extra.options)
    .filter((x) => !value.includes(x));
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
          <P>
            {item.label} <Span textClassName="text-red-500">(x)</Span>
          </P>
        </Button>
      ))}

      {optionsLeft.length > 1 ? (
        <Select
          className={UI.selectInput}
          title={extra.title || ""}
          options={optionsLeft}
          onChange={(selected) => {
            console.log({ selected });
            if (selected) {
              const newValue = value;

              newValue.push(selected);

              console.log({ value, newValue });
              onChange(newValue);
            }
          }}
        />
      ) : null}
    </Div>
  );
};

SelectMultipleInput.defaultInitialValue = [];

export class SelectMultipleInputType implements PluginInputType {
  value!: Item<string>[];
  config?: {
    errorClassName?: string;
    extraClassName?: string;
    replaceClassName?: string;
  };
  extra!: {
    title?: string;
    options: Item<string>[];
  };
}

export default SelectMultipleInput;
