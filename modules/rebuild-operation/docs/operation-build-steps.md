Rebuilding an operation consists of these steps

# Install

Installing is done using `yarn --offline`
If installing fails, it's because packages are missing. Usually this can be solved by using `yarn` with internet.
If installing fails, the script should exit. Also out of `nodemon` **(TODO)**

# Create imports/exports index

This indexes the imports and exports. We can detect here if the imports can be resolved.

Incorrect dependency: a dependency has no `build` folder OR a dependency has no (or empty) `index` file.
When this happens, we can rebuildOperation for that dependency and wait for that to succeed before we continue.

If a dependency is not exporting the thing we need (anymore) or we did something else wrong ourselves, the mistake needs to be fixed on our end. However, this cannot be detected in this step, it will be detected when creating the build errors index.

Be warned. If there is a circular dependency, it could become an infinite loop. For that we are passing a `stack` history as an argument to `rebuildOperation` and make sure it doesn't try to `rebuildOperation` for something in the stack.

# Create build errors index

This uses `ts-morph` to find build-errors and puts them in `index/build-errors`.
If there are build-errors, we shouldn't continue.

# Create other indexes

This creates other indexes in the `index/` folder.
If this fails for any reason, we can't continue and it should be waited for until something changed.

# Lint operation

There are many things we are assuming now, but if we lint it, we can just provide errors whenever something is not up to par with our standards. We probably need our files indexed for some lints, so this would be the best stage to lint.

# Create index ts file

This accumulates all exports from other files and re-exports it as the main entry, but ignores test and cli files.

# Create build folder

It can still fail if the above step fails, but normally shouldn't.

# Create `operation-index.json`

If everything succeded, we can store the `updatedAt` time into our `operation-index.json` here
