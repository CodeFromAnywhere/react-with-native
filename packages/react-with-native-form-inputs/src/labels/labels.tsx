import { PluginComponent, PluginInputType } from "react-with-native-form";
import { UI } from "react-with-native-ui";
import { Button, Div, Input, P, Span } from "react-with-native";
import { useState } from "react";

export const LabelsInput: PluginComponent<LabelsInputType> = ({
  value,
  extra,
  onChange,
  uniqueFieldId,
}) => {
  const [textValue, setTextValue] = useState("");

  const processText = (text: string) => {
    if (text.endsWith(",")) {
      const newValue = value;
      const trimmedText = text.slice(0, text.length - 1).trim();
      if (!value.includes(trimmedText)) {
        value.push(trimmedText);
      }
      onChange(newValue);
      setTextValue("");
    } else {
      setTextValue(text);
    }
  };

  return (
    <Div className="flex flex-row flex-wrap">
      {value.map((text, index) => (
        <Button
          onClick={() => {
            const newValue = value.filter((x) => x !== text);
            onChange(newValue);
          }}
          key={`selected${uniqueFieldId}${index}`}
          className={`mr-3 px-3 py-2 rounded-md border border-gray-400`}
        >
          <P>
            {text} <Span textClassName="text-red-500">(x)</Span>
          </P>
        </Button>
      ))}

      <Input
        className={`${UI.bareInput} py-3`}
        onChange={({ target: { value: text } }) => processText(text)}
        value={textValue}
        native={{ onChangeText: processText }}
      />
    </Div>
  );
};

LabelsInput.defaultInitialValue = [];

export class LabelsInputType implements PluginInputType {
  value!: string[];
  config?: {
    errorClassName?: string;
    extraClassName?: string;
    replaceClassName?: string;
  };
  extra!: {};
}
