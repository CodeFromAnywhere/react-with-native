import { nestedMenuStoreInitialValues } from "nested-menu";
import { createStore } from "react-with-native-store";

export const { useStore, StoreProvider } = createStore({
  ...nestedMenuStoreInitialValues,
});
