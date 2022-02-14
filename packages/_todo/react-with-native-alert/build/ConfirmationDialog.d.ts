import React from "react";
declare type ConfirmConfig = {
    title?: string;
    message?: string;
    confirmText?: string;
};
declare type DialogConfig = ConfirmConfig & {
    actionCallback?: (confirm: boolean) => void;
};
export declare const ConfirmationDialogContext: React.Context<{
    openDialog?: (({ title, message, actionCallback, confirmText, }: DialogConfig) => void) | undefined;
}>;
export declare const ConfirmationDialog: ({ open, title, message, onConfirm, confirmText, onDismiss, }: {
    open: boolean;
    title?: string | undefined;
    message?: string | undefined;
    confirmText?: string | undefined;
    onConfirm: () => void;
    onDismiss: () => void;
}) => JSX.Element | null;
export declare const ConfirmationDialogProvider: ({ children }: {
    children: any;
}) => JSX.Element;
export declare const useConfirmationDialog: () => {
    getConfirmation: (options: DialogConfig) => Promise<unknown>;
};
export {};
//# sourceMappingURL=ConfirmationDialog.d.ts.map