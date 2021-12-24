import AsyncStorage from "@react-native-async-storage/async-storage";
export const getItem = async (key: string) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
  } catch (e) {
    // error reading value
    console.warn(
      `Something went wrong with asyncStorage from useStore (key ${key})`,
      e
    );
  }
};

export const setItem = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
    console.warn(
      `Something went wrong with asyncStorage from useStore (key ${key})`,
      e
    );
  }
};
