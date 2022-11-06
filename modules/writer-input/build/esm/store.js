import { createStore } from "react-with-native-store";
export var writerInitialValues = {
    writerView: "view",
    subtextConfig: {},
    subwordConfig: {},
};
export var useStore = createStore(writerInitialValues).useStore;
