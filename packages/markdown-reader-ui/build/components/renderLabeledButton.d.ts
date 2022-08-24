/// <reference types="react" />
export declare type LabeledButton = {
    icon?: any;
    emoji?: string;
    onClick: () => void;
    title: string;
    component?: () => JSX.Element;
    isActive?: boolean;
    size?: "small";
};
export declare const renderLabeledButton: (button: LabeledButton) => JSX.Element;
//# sourceMappingURL=renderLabeledButton.d.ts.map