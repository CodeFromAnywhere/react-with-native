import * as React from "react";
import { useState } from "react";
import { Div, Label, Toggle } from "react-with-native";
import Template from "../template";

const ToggleScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleState = () => setIsEnabled(!isEnabled);
  return (
    <Template
      component={
        <Div
          className={`flex w-60 justify-center items-center p-4 ${
            isEnabled ? "bg-green-600" : "bg-red-600"
          }`}
        >
          <Toggle id="toggle" checked={isEnabled} onChange={toggleState} />
          <Label className="p-4 text-3xl text-white" htmlFor="toggle">
            {isEnabled ? "on" : "off"}
          </Label>
        </Div>
      }
      title={"Toggle"}
      instalation={INSTALATION}
      imports={IMPORTS}
      usage={USAGE}
    />
  );
};

const INSTALATION = `
yarn add react-with-native`;

const IMPORTS = `
import { Toggle } from "react-with-native";`;

const USAGE = `
<Toggle
  id="toggle"
  checked={isEnabled}
  onChange={ toggleState }
/>
<Label
  className="text-3xl text-white p-14"
  htmlFor="toggle"
>
  {isEnabled ? "on":"off"}
</Label>`;

export default ToggleScreen;
