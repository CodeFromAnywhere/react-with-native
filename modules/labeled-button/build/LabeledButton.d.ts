/// <reference types="react" />
export declare type LabeledButtonType = {
    icon?: any;
    emoji?: string;
    onClick: () => void;
    title: string;
    component?: () => JSX.Element;
    isActive?: boolean;
    size?: "small";
    /**
     * if false, button should be filtered out
     */
    isEnabled?: boolean;
};
export declare const LabeledButton: (button: LabeledButtonType, index: number) => JSX.Element;
//# sourceMappingURL=LabeledButton.d.ts.map