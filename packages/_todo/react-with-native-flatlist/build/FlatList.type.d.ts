import { FlatListProps as FlatListPropsNative } from "react-native";
declare type GenericFlatListProps<TItem = any> = Pick<FlatListPropsNative<TItem>, "ItemSeparatorComponent" | "ListHeaderComponent" | "ListFooterComponent" | "renderItem" | "data" | "ListEmptyComponent" | "extraData" | "horizontal" | "inverted" | "numColumns" | "keyExtractor" | "onEndReached" | "onRefresh" | "refreshing">;
declare type NativeOnlyFlatListProps<TItem = any> = Omit<FlatListPropsNative<TItem>, keyof GenericFlatListProps>;
export declare type FlatListProps<TItem = any> = GenericFlatListProps<TItem> & {
    native?: NativeOnlyFlatListProps;
};
export {};
//# sourceMappingURL=FlatList.type.d.ts.map