var _a;
import { createStore } from "react-with-native-store";
export var writerInitialValues = {
    writerView: "view",
    subtextConfig: {},
    subwordConfig: {},
};
export var useStore = (_a = createStore(writerInitialValues), _a.useStore), StoreProvider = _a.StoreProvider;
