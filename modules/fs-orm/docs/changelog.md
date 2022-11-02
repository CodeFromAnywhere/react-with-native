# September 30, 2022

✅ Make it possible to have nested folders in `db/[model]` folders in case of markdown.

✅ Ensure slugs are slugified, so it doesn't break in windows.

✅ Make `MarkdownModelType` have a slug and name by default, which are calculated from the filename, and should not be in the frontmatter. If they are not set by the user during creation through the db it should generate a random ID.

✅ Fix `upsert`. It should not create files in `[operation]/db` with empty arrays! It should also delete them if it notices the array is empty when updating.

✅ Fix that set is only setting items in files that already existed. Should also set new items in new files. This also broke update (files were removed if filename needed to be changed)

✅ Ensure the location for nested folders in db models doesn't change when editing, and the location is found back with `CategoryStack` on the markdown-model type.

- ✅ edit model types to add `categoryStack` to different models
- ✅ `get` should add `categoryStack` for `jsonSingle` and `markdown`
- ✅ `set` and `upsert` should use `categoryStack` to determine the location for `jsonSingle` and `markdown`
- ✅ Test all of the above!
