import * as React from "react";
import { Div, Button } from "react-with-native";

const ButtonScreen = () => {
  const handleModal = () => {
    alert("I'm a RWN button");
  };
  const title = "Button";
  return (
    <Div className={"flex absolute inset-0 justify-center items-center"}>
      <Button
        onClick={handleModal}
        className="text-red-500"
        native={{ title, onPress: handleModal, color: "red" }}
      >
        {title}
      </Button>
      <Button
        onClick={handleModal}
        className="text-green-500"
        native={{ title, onPress: handleModal, color: "green" }}
      >
        {title}
      </Button>
      <Button 
        onClick={handleModal} 
        className="text-blue-500" 
        native={{ title, onPress: handleModal }}
      >
        {title}
      </Button>
    </Div>
  );
};

export default ButtonScreen;
