export declare const dbStorageMethodsConst: readonly ["jsonMultiple", "jsonSingle", "markdown", "keyValueMarkdown", "csv"];
export declare const dbStorageMethods: string[];
/**
 
 The following strategies are available to store the data.

 - **jsonMultiple *(default)***: stores the data in a json file which is an array of this data structure. This file will be located in `db/[pluralized-kebab-case-model-name].json`

 - **jsonSingle**: stores the data in a json file which is of this data structure (single object) These files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].json`

 - **markdown**: stores the data in a markdown file. Takes "markdown" parameter as the main markdown. The other parameters are stored as front-matter. This these files will be located in `db/[pluralized-kebab-case-model-name]/[instance-slug-or-id].md`

 - **keyValueMarkdown**: stores the data in key value markdown format. This file will be located in `db/[pluralized-kebab-case-model-name].md`

 - **csv**: stores the data in a csv file (only possible for flat object datastructures). This file will be located in `db/[pluralized-kebab-case-model-name].csv`

 ## Definitions:

- [pluralized-kebab-case-model-name]: e.g. `StudentUser` becomes `student-users`
- [instance-slug-or-id]: For all models with a slug parameter, the filename will be that slug of that instance. Otherwise, `id` will be used
 */
export declare type DbStorageMethod = typeof dbStorageMethodsConst[number];
//# sourceMappingURL=DbStorageMethod.d.ts.map