/**
 * Part of the asset that should be sent to the backend. The rest should frontend-only
 *
 * Some values are stored, some are not
 */
export interface BackendAsset {
    /**
     * Stored value
     *
     * Alt text for the asset
     */
    alt?: string;
    /**
     * Stored value
     *
     * Relative path, relative to the location the asset is defined in.
     *
     * Only available if the asset was already processed by a backend. Before backend processing, only `temporaryDestination` is available.
     *
     * Changing the `relativePath` shouldn't do anything, it can only be changed by backend processing by giving a new `temporaryDestination`, or by changing the `name`.
     */
    relativePath?: string;
    /**
     * Not stored
     *
     * Not given by the backend data, but can be SENT to the backend.
     *
     * Should not be stored, but if you change this value and send it to the backend, it should rename the file and thus the relativePath stored should change.
     *
     * NB: I'm not sure how to solve having multiple references to a single file. If this occurs, which is hard to prevent if allowing manual editing of data, it may be hard to prevent dead links if someone changes the name of a file that is also refered to in other places. In this case, it would be ideal if all references also would be renamed, but it may be hard to find them. Even if we solve this, it's still possible to get dead links if someone renames the file (or removes it) manually. This should be taken into account, and may not break anything!
     */
    name?: string;
    /**
     * Not stored
     *
     * Filename after uploading in the temporary folder. should still be moved to its final location
     *
     * Only available straight after uploading. After the function processes the asset, this is removed and a `relativePath` is created.
     */
    temporaryDestination?: string;
    /**
     * Not stored
     *
     * Needs to be there before calling `processAsset`. Should be augmented to the backendAsset in the frontend, before sending it to the backend.
     *
     * Location of the place where the asset is referenced
     *
     * - markdown file (or folder where it is located)
     * - typescript file (or folder where it is located)
     * - database file (or folder where it is located)
     */
    projectRelativeReferencingFilePath?: string;
    /**
     * Not stored
     *
     * Needs to be there before calling `processAsset`. Should be augmented to the backendAsset in the frontend, before sending it to the backend.
     *
     * Model that the asset is related to
     */
    modelName?: string;
    /**
     * NOT STORED
     *
     * Can be available in case it's an asset from an external source URL for example within md.
     *
     * Also can be set in case it's a static asset from a next project
     */
    absoluteUrl?: string;
}
//# sourceMappingURL=BackendAsset.d.ts.map