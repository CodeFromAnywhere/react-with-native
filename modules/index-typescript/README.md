# Index typescript

index-typescript (`OperationClassification` node-cjs)



# Api reference

## findCommentTypes()

returns all types that are found as start of a line in the comment (capitalised, with a ":" behind)


| Input      |    |    |
| ---------- | -- | -- |
| commentWithoutFrontmatter | string |  |
| **Output** | {  }[]   |    |



## getIndexId()

| Input      |    |    |
| ---------- | -- | -- |
| filePath | string |  |,| name | string |  |
| **Output** |    |    |



## getNumberOfLines()

| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** |    |    |



## 📄 findCommentTypes (exported const)

returns all types that are found as start of a line in the comment (capitalised, with a ":" behind)


## 📄 getIndexId (exported const)

## 📄 getNumberOfLines (exported const)

# CLI

<details><summary>Show CLI information (2)</summary>
    
  # cli()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 cli (unexported const)

  </details>

# Tests

<details><summary>Show test information(2)</summary>
    
  # test()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 test (unexported const)

  </details>

# Internal

<details><summary>Show internal (58)</summary>
    
  # findAndUpsertTsInterfaces()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## generateSchema()

If existing schema is not stale, just require it.
Otherwise, generate it for a file

NB: The `createGenerator` function finds also imported TsInterfaces, which leads to duplicate TsInterfaces. With pushing the interfaces to the slug filename, this is no problem though, there should not be any duplication!


| Input      |    |    |
| ---------- | -- | -- |
| filePath | string |  |,| morphInterfaceInfo | `MorphInterfaceInfo`[] |  |,| namedAbsoluteImportNames | string[] |  |
| **Output** |    |    |



## getAllComments()

gets all leading comments and trailing comments raw text, put together, separated with newlines


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }[]   |    |



## getDbStorageMethod()

Gets db storage method for indexation

1) Frontmatter overrules everything
2) Special extensions are looked at


| Input      |    |    |
| ---------- | -- | -- |
| config | { typeName: string, <br />frontmatter: `Frontmatter`, <br />extensions?: string[], <br /> } |  |
| **Output** |    |    |



## getFrontmatterDbStorageMethod()

if isDbModel is specifically set to false, this will return null (which means this should overwrite other things)


| Input      |    |    |
| ---------- | -- | -- |
| parameters | {  } |  |
| **Output** |    |    |



## getFrontmatterFunctionParameters()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { runEveryPeriod: {  }, <br />isApiExposed: boolean, <br /> }   |    |



## getMaxIndentationDepth()

gets the maximum indentation depth of any piece of code

does this simply by splitting up the piece of code into lines and checking the indentation of every line, finding the highest one.

assumes an indentation contains 2 spaces.


| Input      |    |    |
| ---------- | -- | -- |
| functionText | string |  |
| **Output** |    |    |



## getMinMaxValidation()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## getParamSchema()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getParametersFromInterfaces()

| Input      |    |    |
| ---------- | -- | -- |
| functionName | string |  |,| interfaces | `Creation<TsInterface>`[] | NB: we need ALL interfaces here across the project because there may be others that were not found in the interfaces in the file, but only in the functions. |
| **Output** | {  }[]   |    |



## getPossibleRefs()

| Input      |    |    |
| ---------- | -- | -- |
| interfaces | `Creation<TsInterface>`[] |  |
| **Output** | { name: string, <br />schema: {  }, <br /> }[]   |    |



## getSizeSummary()

takes a string and simply returns the amount of characters, the amount of lines and the amount of bytes

TODO: this is not the right place for this function


| Input      |    |    |
| ---------- | -- | -- |
| string | string |  |
| **Output** | { numberOfFiles?: number, <br />characters: number, <br />lines: number, <br />bytes: number, <br />linesPerFile: number, <br />charactersPerLine: number, <br />bytesPerCharacter: number, <br /> }   |    |



## getSpecialExtensionDbStorageMethod()

returns undefined if there is not a special extension. if there is, it returns the dbStorageMethod


| Input      |    |    |
| ---------- | -- | -- |
| extensions (optional) | string[] |  |
| **Output** |    |    |



## getTsStatements()

Gets functions and variables from a tsmorph sourcefile


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getTypeInfo()

takes a ts morph type and returns all info about it

if available, a schema should be provided about the type because it's hard to infer it (probably buggy)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { typeDefinition?: {  }, <br />simplifiedSchema?: {  }, <br />isObject: boolean, <br />isArray: boolean, <br />isPrimitive: boolean, <br />isEnum: boolean, <br />isEnumLiteral: boolean, <br />typeCoverage: number, <br />rawType: string, <br /> }   |    |



## getValidatedOperationPathParse()

| Input      |    |    |
| ---------- | -- | -- |
| filePath | string |  |
| **Output** |    |    |



## hasDefinition()

| Input      |    |    |
| ---------- | -- | -- |
| maybeInterface | `MaybeInteface` |  |
| **Output** | {  }   |    |



## hasTypescriptFileChanged()

| Input      |    |    |
| ---------- | -- | -- |
| eventName | `WatchEventType` |  |,| path | string |  |
| **Output** | {  }   |    |



## indexImportsExportsForFilePath()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## indexTypescriptFilePath()

Index a single typescript file


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## indexTypescriptFile()

| Input      |    |    |
| ---------- | -- | -- |
| project | `Project` |  |,| file | `CompleteOperationPathParse` |  |,| projectRoot | string |  |
| **Output** |    |    |



## indexTypescript()

Creates a typescript file index in 3 steps
1) Introspects the file
2) Calculates all needed information about it
3) Saves the result to /db/******.json in the operation root

NB: Build errors are done separately as this is done operation-wide, everything else is done for each file

NB: I don't think this is super efficient, because the project is taken to just index a single file. It's probably better to pass the project and the sourcefile in here, right?

TODO: if a typescript file starst with a comment before any statements (but possibly after the `#!/usr/bin/env xyz` statement), this should be indexed as the main file comment... This can be shown when opening the file in the admin... It should also check if there is an associated md file for that in src, so that can also be added in the index.


| Input      |    |    |
| ---------- | -- | -- |
| props | { showLogging?: boolean, <br />filePaths: string[], <br />manualProjectRoot: string, <br /> } |  |
| **Output** |    |    |



## isPrimitive()

export const getDefinitions = () => definitions;

export const getClass = (name) => allClasses[name];


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## makeTsComment()

this is actually a fundamental part of the OS. How should comments be structured?

I think, in general, that we should make it look as much as possible at markdown, because it should always be able to have markdown anyway.


| Input      |    |    |
| ---------- | -- | -- |
| config | { operationRelativeTypescriptFilePath: string, <br />commentRange: `CommentRange`, <br />statementName?: string, <br />rawStatement: string, <br />fileContent: string, <br /> } |  |
| **Output** |    |    |



## removeTypescriptIndex()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## schemaToTsInterface()

make a tsInterface from a schema generated from the file


| Input      |    |    |
| ---------- | -- | -- |
| filePath | string |  |,| typeName | string |  |,| schema | `Schema` |  |,| morphInterfaceInfo (optional) | `MorphInterfaceInfo` |  |
| **Output** |    |    |



## tryCreateSchema()

Try because sometimes generateSchema fails


| Input      |    |    |
| ---------- | -- | -- |
| config | `Config` |  |
| **Output** | { schema?: {  }, <br />error?: string, <br /> }   |    |



## typeToSchema()

calculates the schema of a type

this is great for types inside of parameters of variables that are not declared separately, however, it's probably not as good as vega's json schema generator... therefore, it would be great to always prefer vega's way above this.

NB: this method throws sometimes if it can't find some stuff, so make sure to try/catch it.

TODO: Test and improve this one


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 🔹 CompleteOperationPathParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| filePath  | string |  |
| relativeOperationBasePathFromProjectRoot  | string |  |
| operationRelativeTypescriptFilePath  | string |  |
| srcFileId  | string |  |
| operationName (optional) | string |  |
| operationFolderName  | string |  |
| relativePathFromProjectRoot  | string |  |



## 🔹 MorphInterfaceInfo

Properties: 

 | Name | Type | Description |
|---|---|---|
| raw  | string |  |
| name  | string |  |
| description (optional) | string |  |
| extensions  | array |  |
| isExported  | boolean |  |
| hasGeneric  | boolean |  |



## 📄 findAndUpsertTsInterfaces (exported const)

## 📄 generateSchema (exported const)

If existing schema is not stale, just require it.
Otherwise, generate it for a file

NB: The `createGenerator` function finds also imported TsInterfaces, which leads to duplicate TsInterfaces. With pushing the interfaces to the slug filename, this is no problem though, there should not be any duplication!


## 📄 getAllComments (exported const)

gets all leading comments and trailing comments raw text, put together, separated with newlines


## 📄 getDbStorageMethod (exported const)

Gets db storage method for indexation

1) Frontmatter overrules everything
2) Special extensions are looked at


## 📄 getFrontmatterDbStorageMethod (exported const)

if isDbModel is specifically set to false, this will return null (which means this should overwrite other things)


## 📄 getFrontmatterFunctionParameters (exported const)

## 📄 getMaxIndentationDepth (exported const)

gets the maximum indentation depth of any piece of code

does this simply by splitting up the piece of code into lines and checking the indentation of every line, finding the highest one.

assumes an indentation contains 2 spaces.


## 📄 getMinMaxValidation (exported const)

## 📄 getParamSchema (exported const)

## 📄 getParametersFromInterfaces (exported const)

## 📄 getPossibleRefs (exported const)

## 📄 getSizeSummary (exported const)

takes a string and simply returns the amount of characters, the amount of lines and the amount of bytes

TODO: this is not the right place for this function


## 📄 getSpecialExtensionDbStorageMethod (exported const)

returns undefined if there is not a special extension. if there is, it returns the dbStorageMethod


## 📄 getTsStatements (exported const)

Gets functions and variables from a tsmorph sourcefile


## 📄 getTypeInfo (exported const)

takes a ts morph type and returns all info about it

if available, a schema should be provided about the type because it's hard to infer it (probably buggy)


## 📄 getValidatedOperationPathParse (exported const)

## 📄 hasTypescriptFileChanged (exported const)

## 📄 indexImportsExportsForFilePath (exported const)

## 📄 indexTypescriptFilePath (exported const)

Index a single typescript file


## 📄 indexTypescriptFile (exported const)

## 📄 indexTypescript (exported const)

Creates a typescript file index in 3 steps
1) Introspects the file
2) Calculates all needed information about it
3) Saves the result to /db/******.json in the operation root

NB: Build errors are done separately as this is done operation-wide, everything else is done for each file

NB: I don't think this is super efficient, because the project is taken to just index a single file. It's probably better to pass the project and the sourcefile in here, right?

TODO: if a typescript file starst with a comment before any statements (but possibly after the `#!/usr/bin/env xyz` statement), this should be indexed as the main file comment... This can be shown when opening the file in the admin... It should also check if there is an associated md file for that in src, so that can also be added in the index.


## 📄 isPrimitive (exported const)

## 📄 makeTsComment (exported const)

this is actually a fundamental part of the OS. How should comments be structured?

I think, in general, that we should make it look as much as possible at markdown, because it should always be able to have markdown anyway.


## 📄 removeTypescriptIndex (exported const)

## 📄 schemaToTsInterface (exported const)

make a tsInterface from a schema generated from the file


## 📄 symbols (exported const)

## 📄 tryCreateSchema (exported const)

Try because sometimes generateSchema fails


## 📄 typeToSchema (exported const)

calculates the schema of a type

this is great for types inside of parameters of variables that are not declared separately, however, it's probably not as good as vega's json schema generator... therefore, it would be great to always prefer vega's way above this.

NB: this method throws sometimes if it can't find some stuff, so make sure to try/catch it.

TODO: Test and improve this one
  </details>

