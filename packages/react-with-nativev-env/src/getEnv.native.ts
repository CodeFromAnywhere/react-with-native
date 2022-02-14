import Constants from "expo-constants";

export const getEnv = (key: string) => {
  return Constants.manifest?.extra?.[key];
};
