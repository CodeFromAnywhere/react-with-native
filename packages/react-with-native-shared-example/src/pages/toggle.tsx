import * as React from "react";
import { useState } from "react";
import { Div, Label, Toggle } from 'react-with-native';

const ToggleScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleState = () => setIsEnabled(!isEnabled);
  return (
    <Div className={`flex absolute inset-0 justify-center items-center ${isEnabled ? "bg-green-600" : "bg-red-600"}`}>
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
        </Label>
    </Div>
  );
}

export default ToggleScreen;