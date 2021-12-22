import { useRouter } from "next/router";
import { NavigationProp } from "@react-navigation/native";

function useNavigation() {
  const router = useRouter();

  return {
    addListener: () => {},
    canGoBack: () => true,
    dispatch: () => {},
    getParent: () => {},
    getState: () => {},
    goBack: () => {
      router.back();
    },
    isFocused: () => {},
    removeListener: () => {},
    reset: () => {},
    setOptions: () => {},
    setParams: () => {},

    navigate: (screen: string, params?: { [key: string]: any }) => {
      router.push(screen, { query: params });
    },
  };
}
export default useNavigation;
