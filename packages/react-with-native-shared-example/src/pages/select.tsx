import * as React from "react";
import { Pressable, Text } from "react-with-native";
import Select from "react-with-native-select";
import { Item } from "react-with-native-select/src/types";
import Template from "../template";

const options: Item<string>[] = [
  {
    value: "SDSSDS",
    label: "ASSSS",
  },
];

const SelectScreen = (props: any) => {
  const [item, setItem] = React.useState(options[0]);

  console.log(props);

  const selectOption = ({item}:{item:Item<string>}) => {
    alert(`You select the ${item.label}`);
    setItem(item)
  };

  return (
    <Template
      component={
        <Select
          title={"Select smh"}
          options={options}
          onChange={() => (selectOption)}
          value={item}
        >
          {({ onClick, value, className }) => {
            return (
              <Pressable
                onClick={() => onClick}
                native={{
                  onPress: () => {
                    //@ts-ignore
                    onClick();
                  },
                }}
              >
                <Text>button. you selected {value.label}</Text>
              </Pressable>
            );
          }}
        </Select>
      }
      title={"Select"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native react-with-native-select`;

const IMPORTS = `
import Select from "react-with-native-select";
import { Pressable, Text } from "react-with-native";
import { Item } from "react-with-native-select/src/types";`;

const USAGE = `

const options: Item<string>[] = [
  {
    value: "SDSSDS",
    label: "ASSSS",
  },
];

const [item, setItem] = React.useState(options[0]);

<Select
  title={"Select smh"}
  options={options}
  onChange={(item) => {
    alert(\`You select the \${item?.label}\`);
    setItem(item)
  }}
  value={item}
>
  {({onClick,value,className})=>{
    return (<Pressable onClick={onClick} native={{onPress:()=>{
      //@ts-ignore
      onClick()
    }}}><Text>button. you selected {value.label}</Text></Pressable>)
  }}
</Select>`;

export default SelectScreen;
