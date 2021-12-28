import * as React from "react";
import { Div,Pressable,Text } from "react-with-native";
import Select from "react-with-native-select";
import { Item } from "react-with-native-select/src/types";

const options: Item<string>[] = [
  {
    value: "SDSSDS",
    label: "ASSSS",
  },
];


const SelectScreen = (props:any) => {
const [item,setItem]=React.useState(options[0]);


const selectOption = (item) => {
  alert(`You select the ${item.label}`);
  setItem(item)
};
console.log(props);

  return (
    <Div className={"flex absolute inset-0 justify-center items-center"}>
      <Select
        title={"Select smh"}
        options={options}
        onChange={selectOption}
        value={item}
      >
        {({onClick,value,className})=>{
          return (<Pressable onClick={onClick} native={{onPress:()=>{
            //@ts-ignore
            onClick()
          }}}><Text>button. you selected {value.label}</Text></Pressable>)
        }}
      </Select>
    </Div>
  );
};

export default SelectScreen;
