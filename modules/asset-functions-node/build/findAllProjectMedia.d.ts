export declare const mediaExtensions: string[];
/**
Media:`.png`, `.mp4`, `.mp3`, `.zip`, `.pdf`

- finds all media in all `db` folders. Can be anywhere, so an explore will probably be best.
- finds all media in every operation in any folder except for `node_modules`, `db`, `src`, `build`, `.[anything]`. (so mostly in `todo`, `docs` and `assets`)
- find all media in every other folder that is not an operation

Return all of this as project relative path array

 */
export declare const findAllProjectMedia: (searchQuery?: string, returnType?: "projectRelative" | "absolute") => Promise<string[]>;
//# sourceMappingURL=findAllProjectMedia.d.ts.map