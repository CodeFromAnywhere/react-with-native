export declare type TextEditingContext = {
    wordAtPosition: string;
};
/**
 * Gets the current word you are typing from a text and the cursor position.
 *
 * Takes into account multiple word separators: tabs, newlines, and spaces.
 */
export declare const getContext: (editorDetails: {
    text: string;
    positionIndex: number;
}) => TextEditingContext;
//# sourceMappingURL=getContext.d.ts.map