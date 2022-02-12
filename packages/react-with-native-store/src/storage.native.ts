import AsyncStorage from "@react-native-async-storage/async-storage";
export const getItem = async (key: string) => {
  console.log("reading key ", key);
  try {
    const item = await AsyncStorage.getItem(key);
    const value = item ? JSON.parse(item) : undefined;
    console.log(`we got ${item}`);
    return value;
  } catch (e) {
    // error reading value
    console.warn(
      `Something went wrong with asyncStorage from useStore (key ${key})`,
      e
    );
  }
};

export const setItem = async (key: string, value: any) => {
  console.log("AsyncStorage setting item");
  const stringValue = JSON.stringify(value);
  try {
    await AsyncStorage.setItem(key, stringValue, (error) => {
      console.warn(
        `asyncStorage.setItem ${JSON.stringify({
          key,
          stringValue,
          error,
        })}`
      );
    });
    console.log(`we set ${key} to ${stringValue}`);
  } catch (e) {
    // saving error
    console.warn(
      `Something went wrong with asyncStorage from useStore (key ${key})`,
      e
    );
  }
};
