import { FlatList as FlatListNative } from "react-native";
import { FlatListProps } from "./type";

type FlatListType = <TItem = any>(props: FlatListProps<TItem>) => Element;

const FlatList: FlatListType = (props) => {
  const { native, ...other } = props;
  return <FlatListNative {...other} {...native} />;
};
export default FlatList;
