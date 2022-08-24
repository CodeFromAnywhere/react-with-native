import { PluginComponent } from "react-with-native-form";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { DatetimeInputType } from "./types";
import { Text, Button } from "react-native";
import React, { useState } from "react";

export const DatetimeInput: PluginComponent<DatetimeInputType> = ({
  extra,
  value,
  onChange,
  ...props
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const newExtra: DatetimeInputType["extra"] = { ...extra, type: "dateTime" };
  // isDatePickerVisible,
  // handleConfirm,
  // hideDatePicker,
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    console.warn("A date has been picked: ", date);
    setDate(date);
    onChange(date);
    hideDatePicker();
  };
  return (
    <>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {/* <Text>Selected date: </Text> */}
      <Text>
        {date && date.toDateString() + ` ` + date.toLocaleTimeString()}
      </Text>
      <Button title="Pick a different Date" onPress={showDatePicker} />
    </>
  );
};
DatetimeInput.defaultInitialValue = new Date();
