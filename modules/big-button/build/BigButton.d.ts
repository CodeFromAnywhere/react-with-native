/// <reference types="react" />
export declare type BigButton = {
    icon?: any;
    emoji?: string;
    onClick: () => void;
    title: string;
    component?: () => JSX.Element;
    isActive?: boolean;
    isLoading?: boolean;
    stylePreset?: "cancel";
};
export declare const BigButton: (button: BigButton) => JSX.Element;
//# sourceMappingURL=BigButton.d.ts.map