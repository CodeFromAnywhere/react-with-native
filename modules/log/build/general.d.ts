#!/usr/bin/env node
/**
 * how should it look and feel?
 */
export declare type LogType = "error" | "warning" | "success" | "important" | "default";
export declare const log: (message: string, config?: {
    /**
     * how it should look and feel for the user
     */
    type?: LogType;
    /**
     * TODO: needs to be implemented... this could make the errors disappear when some global config is turned off
     */
    debugOnly?: boolean;
}) => void;
//# sourceMappingURL=general.d.ts.map