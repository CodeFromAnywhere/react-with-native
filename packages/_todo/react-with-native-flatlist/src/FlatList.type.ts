import { FlatListProps as FlatListPropsNative } from "react-native";

type GenericFlatListProps<TItem = any> = Pick<
  FlatListPropsNative<TItem>,
  | "ItemSeparatorComponent"
  | "ListHeaderComponent"
  | "ListFooterComponent"
  | "renderItem"
  | "data"
  | "ListEmptyComponent"
  | "extraData"
  | "horizontal"
  | "inverted"
  | "numColumns"
  | "keyExtractor"
  | "onEndReached"
  | "onRefresh"
  | "refreshing"
>;

type NativeOnlyFlatListProps<TItem = any> = Omit<
  FlatListPropsNative<TItem>,
  keyof GenericFlatListProps
>;

export type FlatListProps<TItem = any> = GenericFlatListProps<TItem> & {
  native?: NativeOnlyFlatListProps;
};
