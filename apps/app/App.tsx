import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StoreProvider, Pages } from "ui";
import { TailwindProvider } from "tailwind-rn";
import { AlertProvider } from "react-with-native-alert";
import { ModalProvider } from "react-with-native-modal";

import utilities from "./tailwind.json";
const Stack = createNativeStackNavigator();

import { registerRootComponent } from "expo";

import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TailwindProvider utilities={utilities}>
        <StoreProvider>
          <AlertProvider>
            <ModalProvider>
              <NavigationContainer>
                <Stack.Navigator initialRouteName="menu">
                  {Object.keys(Pages).map((page) => {
                    // @ts-ignore
                    const component = Pages[page];
                    //@ts-ignore
                    const options: ScreenOptions = component.options;
                    return (
                      <Stack.Screen
                        key={`page${page}`}
                        name={page}
                        component={component}
                        options={options}
                      />
                    );
                  })}
                </Stack.Navigator>
              </NavigationContainer>
            </ModalProvider>
          </AlertProvider>
        </StoreProvider>
      </TailwindProvider>
    </QueryClientProvider>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
