import React from "react";
import { Button, Nav } from "react-with-native";
const NavScreen = () => {
  return (
    <div>
      <p>hello world</p>
      <Nav background="red" height={8} padding={"0 2rem"}>
        <p>hello mom</p>
        <Button>Click me</Button>
      </Nav>
    </div>
  );
};

export default NavScreen;
