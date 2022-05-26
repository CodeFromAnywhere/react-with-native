import { useRef } from "react";
import { Item, SelectProps } from "./types";
import { Button, Div, Text } from "react-with-native";
import { Alert } from "react-native";
import { getRealValue } from "./util";
import ActionSheet from "react-native-actionsheet";

const Select = <T extends unknown>({
  options,
  onChange,
  value,
  title,
  className,
  children,
  selectFirstOption,
  ios,
}: SelectProps<T>) => {
  const realValue = getRealValue({ value, selectFirstOption, options, title });
  const refActionSheet = useRef<ActionSheet>(null);

  const onClick = () => {
    //show ActionSheet
    if (refActionSheet.current) {
      refActionSheet.current.show();
    }
  };

  const buttonTitle = value?.label || title || "Select a value";

  return (
    <Div className={className}>
      {children ? (
        children({ onClick, className, value: realValue })
      ) : (
        <Button onClick={onClick}>
          <Text>{buttonTitle}</Text>
          <ActionSheet
            ref={refActionSheet}
            title={buttonTitle}
            options={[...options.map((o) => o.label), "Cancel"]}
            //position in options array that contains the label we will use
            //for a "cancelling" the select menu (aka ActionSheet)
            cancelButtonIndex={options.length}
            //position in options array that contains the label we will use
            //for a destructive button: for example, "remove" (to remove an option from the list)
            //this button will have a red tint.
            destructiveButtonIndex={-1}
            onPress={(index: number) => {
              const selected = options[index];
              onChange?.(selected);
            }}
          />
        </Button>
      )}
    </Div>
  );
};

export default Select;
