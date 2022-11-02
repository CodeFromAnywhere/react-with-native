/**
 * TODO: this is great. now also get the operationName. If the operationName appears in the config, for debug, show the log, otherwise don't show
 */
export declare const getCallerFileName: () => string | undefined;
/**
 * if true, also shows debug messages
 */
export declare const DEBUG = false;
/**
how should it look and feel?
 */
export declare type LogType = "debug" | "error" | "warning" | "success" | "important" | "default";
/**
 * TODO: Should parse a title from markdown
 */
export declare const parseTitle: (markdown: string) => {
    title: string;
    rest: string;
};
/**
 * Log a message with a special type
 */
export declare const log: (message: string, config?: LogConfig, data?: any) => void;
export declare type LogConfig = {
    /**
     * The title of this log. If not given, a title will still be parsed from your message by taking the first sentence.
     */
    title?: string;
    /**
     * how it should look and feel for the user
     */
    type?: LogType;
    /**
     * Overwrite the global log config
     */
    customConfig?: GlobalLogConfig;
};
/**
 * a logging configuration object that you can set using a file in the root of your operation or project.
 */
export declare type GlobalLogConfig = {
    showDebug?: boolean;
    showDefault?: boolean;
    sayTitles?: boolean;
    /**
     * Folder where logs can be stored. If i can access the caller location this can be the operation db.
     */
    logFolder?: string;
};
export declare type ProjectLogConfig = {
    config: GlobalLogConfig;
    operationConfig: {
        [key: string]: OperationLogConfig;
    };
};
export declare type OperationLogConfig = {
    config: GlobalLogConfig;
    fileConfig?: {
        [srcRelativeFilePath: string]: GlobalLogConfig;
    };
    functionConfig?: {
        [functionName: string]: GlobalLogConfig;
    };
};
//# sourceMappingURL=general.d.ts.map