import { MarkdownModelType } from "model-types";
/**
 * ---
 * operationRelativePath: OPERATION.md
 * isOperationIndex: true
 * ---
 *
 * Anything configurable about the operation.
 *
 * Of course we could make this live in operation.json or as a prop in package.json, but it would be better to make it work with a markdown file.
 *
 * Let's try to use OPERATION.md


IDEA: should I refactor `PackageJson`, `OperationConfig`, and `OperationIndex` and try to put it all inside of `package.json`? Maybe that's much better!

- ensure `package.json` files have the schema setup so it's much easier to edit. Finish the schema generation setup for fs-orm models.
- put `OperationConfig` and `OperationIndex` inside of the `operation` key
- to ensure you can still write the description in a markdown file, but also edit it in the `PackageJson` form, add key `operation.description` but also state that, if available, will be taken indexed from `OPERATION.md`
- all keys in `OperationIndex` should be renamed to `xyzIndexed` and this should become a new convention in the form (hide those)
- document the `xyzCalculated` and `xyzIndexed` conventions somewhere, and everything else too
- ensure @Guilherme adds the `PackageJson`-CRUD to the `operation-ui` (GitHub integration, NPM integration, dependency info, stats, deployment information, and more)

 */
export interface OperationConfig extends MarkdownModelType {
    /**
     *
     * Sometimes you are using function in a UI, which cannot be inferred with imports because they are used indirectly via an api. Here you can specify which operations on the backend are needed for an operation (ui mostly)
     *
     * This array is simply a list of operation names needed for this operation that are not imported.
     *
     * NB: No need to specify things here that you also import in this operation, because these are already automatically detected.
     *
     */
    indirectDependencies?: string[];
    /**
     * IDEA: this could be super useful for generating the permissions! if you simply fill this in (or can we even find all object access automatically? that would be sick, i've seen people do it before...) then we can say something like this:
     *
     * all functions in this UI require permission "xyz"
     *
     * this is an interesting idea because setting permissions is kindof annoying...
     *
     * But I guess it's not that bad to also hardcode the authorised groups on top of a function , so this is probably not needed... in the end, you still need to define this, it's just as annoying...
     */
    indirectFunctions?: string[];
    /**
     * A list of authors
     *
     * Should be used to create bundle AUTHORS.md
     */
    authors?: string[];
    /**
     * A list of contributors
     *
     * Can be used to create bundle CONTRIBUTORS.md
     */
    contributors?: string[];
    /**
     * one-line explanation of what the operation does (no markdown)
     */
    shortDescriptionText?: string;
    /**
     * Any descriptions in markdown format
     *
     * - Markdown description of what the operation does.
     * - Installation instructions, if it is possible
     * - Usage instructions (with example), if available
     *
     * This is the main content of the markdown file
     */
    markdown: string;
    /**
     * TODO:
     */
    paymentPlanId?: string;
    /**
     * For ui-es5 and ui-esm, it should be noted which platforms are supported
     */
    uiSupport?: {
        android?: boolean;
        ios?: boolean;
        web?: boolean;
        /**
         * optionally, let others know why they are not supported yet or what good alternatives are in case they are not supported in certain platforms
         */
        description?: string;
    };
}
//# sourceMappingURL=OperationConfig.d.ts.map