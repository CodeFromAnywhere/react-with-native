/**
 A `FormContainer` is a simple container that can wrap your `SimplifiedSchemaForm` to give it a button that also sends when hitting enter on your keyboard. To achieve this, a `<form>` is created in this component.

 Besides this, you can also add some texts, but styling is not possible to change for this component at this point (except for the form className). If you want a completely different style, it's probably better to build it yourself.

 NB: TODO: There is a bug now where onSubmit gets called too often. Not sure how to fix this. Because of this, I'll simply remove the onSubmit action in the onsubmit for now, and prevent the default.
 */
export declare const FormContainer: (props: {
    className?: string | undefined;
    onSubmit: () => void;
    title?: string | undefined;
    isLoading?: boolean | undefined;
    submitButtonText?: string | undefined;
    children?: any;
}) => JSX.Element;
//# sourceMappingURL=FormContainer.d.ts.map