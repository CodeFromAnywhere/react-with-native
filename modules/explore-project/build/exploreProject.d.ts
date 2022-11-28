import { FolderExploration } from "code-types";
/**
  TODO: still needs to be cleaned up. It's a huge function now with many useful components. Split it up!

  - explores all files and folders until it finds a package.json.

  all items in the explore tree are clickable in the ui, and lead to different pages
  -  a folder leads to a summary of what the folder holds
  -  a operation leads to a summary of the operation
  -  a ts file leads to all functions, variables, and interfaces in that file
  -  a function, variable, or interface leads to specific pages for those things. the data, if available, is attached to the interfaces.
  - a md file leads to the editing user interface (with context) of that file
  - a json file leads to a CRUD for it...

  ## Performance
  In the end the data it generates should stay up to date, so it's important this exploration happens fast enough. The data involved is simply walking the filesystem once (a small subset of it) and opening some index files (fun)

  ## Ideas for later
  LATER: some more things that would be useful:

  - watching all files that are also explored for changes using some watcher
  - if something changes, recalculating that part and pushing it to the UI, making the thing going over the line small so it'll be super fast, even over slow internet.

  however, this is premature optimisation. on my m1, locally, it's probably fine to just recalculate every second ^^ and send a couple megabytes over the line.
  */
export declare const exploreProject: (config?: {
    bundleId?: string | undefined;
} | undefined) => Promise<FolderExploration[] | undefined>;
//# sourceMappingURL=exploreProject.d.ts.map