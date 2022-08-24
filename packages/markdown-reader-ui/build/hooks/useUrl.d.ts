export declare const useUrl: <T extends "type" | "id" | "path" | "typeIndexType" | "hasCommentTypes" | "interfaceIsDbModel" | "name" | "slug" | "index" | "model">(queryKey: T) => {
    typeIndexType: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
    hasCommentTypes: [string[], (newValue: string[] | undefined) => Promise<boolean>];
    interfaceIsDbModel: [boolean, (newValue: boolean | undefined) => Promise<boolean>];
    path: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
    name: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
    type: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
    slug: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
    id: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
    index: [number | undefined, (newValue: number | undefined) => Promise<boolean>];
    model: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
}[T];
//# sourceMappingURL=useUrl.d.ts.map