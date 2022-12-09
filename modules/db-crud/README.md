# Db crud

db-crud (`OperationClassification` ui-cjs)



# Api reference

## 📄 dbCrudInitialValues (exported const)

## `<DbPage />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 DbPage (exported const)

# Internal

<details><summary>Show internal (43)</summary>
    
  # `<CrudGrid />`




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<CrudTable />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<CrudTimeline />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<CrudTree />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<DatasetForm />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { modelName: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## getPropertiesDataParameterNames()

| Input      |    |    |
| ---------- | -- | -- |
| properties | `SchemaProperty`[] |  |
| **Output** |    |    |



## `<IndexInstanceContainer />`

container for any index instance that needs to be rendered in the explore page


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<ModelComponent />`

In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows


| Input      |    |    |
| ---------- | -- | -- |
| props | { modelName?: string, <br />highlight: `Highlight`, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## openWhatsapp()

| Input      |    |    |
| ---------- | -- | -- |
| {
  phone,
  text,
} | { phone: string, <br />text: string, <br /> } |  |
| **Output** |    |    |



## `<SearchBar />`

| Input      |    |    |
| ---------- | -- | -- |
| props | { initialValue?: string, <br />placeholder?: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## shimmer()

| Input      |    |    |
| ---------- | -- | -- |
| w | number |  |,| h | number |  |
| **Output** | `String`   |    |



## `<SimplifiedSchemaFormDebug />`

| Input      |    |    |
| ---------- | -- | -- |
| {
  parameters,
  values,
} | { parameters?: `FunctionParameter`[], <br />values: {  }[], <br /> } |  |
| **Output** | `JSX.Element`   |    |



## sortToItem()

| Input      |    |    |
| ---------- | -- | -- |
| sort | `DatasetSort` |  |
| **Output** | { value: string, <br />label: string, <br />data: {  }, <br /> }   |    |



## `<SpaceCard />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## toBase64()

| Input      |    |    |
| ---------- | -- | -- |
| str | string |  |
| **Output** |    |    |



## `<UpsertForm />`

TODO: Provide all the fetched data with `hasMore` and `fetchAll` to the `SimplifiedJsonForm`


| Input      |    |    |
| ---------- | -- | -- |
| props | { simplifiedSchema: `SimplifiedSchema`, <br />instance: {  }, <br />referencableModelNames?: string[], <br />modelName: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<UpsertPage />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## useInfiniteGetDbModel()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## useModelFromUrl()

takes the model from the url


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## useUrl()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 🔹 DbCrudStore

Properties: 

 | Name | Type | Description |
|---|---|---|
| db-crud.datasetConfig  | object |  |
| db-crud.search  | string |  |



## 📄 CrudGrid (exported const)

## 📄 CrudTable (exported const)

## 📄 CrudTimeline (exported const)

## 📄 CrudTree (exported const)

## 📄 DatasetForm (exported const)

## 📄 defaultLimit (exported const)

## 📄 getPropertiesDataParameterNames (exported const)

## 📄 IndexInstanceContainer (exported const)

container for any index instance that needs to be rendered in the explore page


## 📄 ModelComponent (exported const)

In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows


## 📄 openWhatsapp (exported const)

## 📄 SearchBar (exported const)

## 📄 shimmer (exported const)

## 📄 SimplifiedSchemaFormDebug (exported const)

## 📄 sortToItem (exported const)

## 📄 SpaceCard (exported const)

## 📄 { StoreProvider, useStore } (exported const)

## 📄 toBase64 (exported const)

## 📄 UpsertForm (exported const)

TODO: Provide all the fetched data with `hasMore` and `fetchAll` to the `SimplifiedJsonForm`


## 📄 UpsertPage (exported const)

## 📄 useInfiniteGetDbModel (exported const)

## 📄 useModelFromUrl (exported const)

takes the model from the url


## 📄 useUrl (exported const)

  </details>

