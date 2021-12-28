import * as React from "react";
import { Div } from "react-with-native";
import Select from "react-with-native-select";
import { Item } from "react-with-native-select/src/types";

const options: Item<string>[] = [
  {
    value: "",
    label: "",
  },
];

const selectOption = () => {
  alert("I'm a RWN button");
};

const SelectScreen = (props:any) => {
console.log(props);

  return (
    <Div className={"flex absolute inset-0 justify-center items-center"}>
      <Select
        title={"Select smh"}
        options={options}
        onChange={selectOption}
      />
    </Div>
  );
};

export default SelectScreen;
