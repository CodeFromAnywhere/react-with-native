Typebase makes it possible to create different model-types which can have different storage methods.

More information about the different model-types can be found here:

- `DefaultModelType` (uses `DbStorageMethod` `jsonMultiple` by default)
- `SlugModelType` (uses `DbStorageMethod` `jsonMultiple` by default)
- `KeyValueMarkdownModelType` (uses `DbStorageMethod` `keyValueMarkdown` by default)
- `MarkdownModelType` (uses `DbStorageMethod` `markdown` by default)
- `CsvModelType` (uses `DbStorageMethod` `csv` by default)
- `TsIndexModelType` (uses `DbStorageMethod` `jsonMultiple` by default)

More information about the different storage methods can be found here: `DbStorageMethod`.

Every model type has a default `DbStorageMethod` but can be overwritten using the `modelQueryConfig`.
