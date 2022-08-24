export declare function useNavigation(): {
    addListener: () => void;
    canGoBack: () => boolean;
    dispatch: () => void;
    getParent: () => void;
    getState: () => void;
    goBack: () => void;
    isFocused: () => void;
    removeListener: () => void;
    reset: () => void;
    setOptions: () => void;
    setParams: () => void;
    navigate: (screen: string, params?: {
        [key: string]: any;
    } | undefined) => void;
};
//# sourceMappingURL=useNavigation.d.ts.map