export declare const useUrl: <T extends "path" | "id" | "type" | "slug" | "name">(queryKey: T) => {
    path: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
    name: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
    type: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
    slug: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
    id: [string | undefined, (newValue: string | undefined) => Promise<boolean>];
}[T];
//# sourceMappingURL=useUrl.d.ts.map