export declare type ContextEvent = {
    clientX: number;
    clientY: number;
    screenX: number;
    screenY: number;
    id: string | undefined;
};
export declare type ContextMenuItem = {
    getIsEnabled?: (id: string | undefined) => boolean;
    onClick: (id: string | undefined) => any | Promise<any>;
    getTitle: (id: string | undefined) => string;
};
//# sourceMappingURL=types.d.ts.map