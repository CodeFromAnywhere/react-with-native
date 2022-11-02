/**
 * KISS; fuck grammar
 *
 * If we are going to apply grammar here, it becomes impossible to create typescript rules that can detect and convert plural/singular parameter names.
 *
 * To pluralize any word we simply attach an "s" at the end
 */
export declare const pluralize: (parameterName: string) => string;
/**
 * Removes the 's' if it is found at the end of the parameter name
 */
export declare const singularize: (parameterName: string) => string;
export declare const isPlural: (parameterName: string) => boolean;
export declare const isSingular: (parameterName: string) => boolean;
//# sourceMappingURL=pluralize.d.ts.map