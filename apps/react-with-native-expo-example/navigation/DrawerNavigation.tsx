import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";
import {
  TextScreen,
  ButtonScreen,
  ImageScreen,
  PressableScreen,
  ToggleScreen,
  InputScreen,
  H2Screen,
  LabelScreen,
  StrongScreen,
  DivScreen,
  ActivityIndicatorScreen,
} from "react-with-native-shared-example";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="text" component={TextScreen} />
      <Drawer.Screen name="h2" component={H2Screen} />
      <Drawer.Screen name="div" component={DivScreen} />
      <Drawer.Screen name="label" component={LabelScreen} />
      <Drawer.Screen name="strong" component={StrongScreen} />
      <Drawer.Screen name="button" component={ButtonScreen} />
      {/* <Drawer.Screen name="image" component={ImageScreen} /> */}
      <Drawer.Screen name="pressable" component={PressableScreen} />
      <Drawer.Screen name="toggle" component={ToggleScreen} />
      <Drawer.Screen name="input" component={InputScreen} />
      <Drawer.Screen
        name="activityIndicator"
        component={ActivityIndicatorScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
