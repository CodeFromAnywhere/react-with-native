/**
 * Executes a command without showing the result, unless the command fails, then it will log the output.,
 */
export declare const executeCommandQuietUnlessFail: (config: {
    command: string;
    cwd?: string | undefined;
    /**
     * if given, will show what is happening and a checkmark if it succeeds
     */
    description?: string | undefined;
}) => boolean;
//# sourceMappingURL=executeCommandQuietUnlessFail.d.ts.map