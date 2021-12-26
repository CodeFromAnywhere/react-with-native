import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./navigation/DrawerNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
