# Webpage types

webpage-types (`OperationClassification` cjs)



# Api reference

## 🔹 NestedWebPage

Only used for menu, so can be undefined because it shouldn't be available





Properties: 

 | Name | Type | Description |
|---|---|---|
| queryPath  | string |  |
| searchTerms (optional) | array |  |
| target (optional) | string |  |
| isMenuHidden (optional) | boolean |  |
| menuTitleAugmentation (optional) | string |  |
| menuTitleTooltip (optional) | string |  |
| menuTitle (optional) | string |  |
| pageData  | null |  |
| children (optional) | array |  |



## 🔹 ReaderWebPage

specifically always a markdown page





Properties: 

 | Name | Type | Description |
|---|---|---|
| queryPath  | string |  |
| searchTerms (optional) | array |  |
| target (optional) | string |  |
| isMenuHidden (optional) | boolean |  |
| menuTitleAugmentation (optional) | string |  |
| menuTitleTooltip (optional) | string |  |
| menuTitle (optional) | string |  |
| pageData  | object |  |



## 🔹 CustomWebPage

different kinds of WebPages





Properties: 

 | Name | Type | Description |
|---|---|---|
| queryPath  | string |  |
| searchTerms (optional) | array |  |
| target (optional) | string |  |
| isMenuHidden (optional) | boolean |  |
| menuTitleAugmentation (optional) | string |  |
| menuTitleTooltip (optional) | string |  |
| menuTitle (optional) | string |  |
| pageData  | null |  |



## 🔹 WriterWebPage

Properties: 

 | Name | Type | Description |
|---|---|---|
| queryPath  | string |  |
| searchTerms (optional) | array |  |
| target (optional) | string |  |
| isMenuHidden (optional) | boolean |  |
| menuTitleAugmentation (optional) | string |  |
| menuTitleTooltip (optional) | string |  |
| menuTitle (optional) | string |  |
| pageData  | object |  |



## crudPageToWebPages()

| Input      |    |    |
| ---------- | -- | -- |
| pageData | `CrudPage` |  |
| **Output** | { queryPath: string, <br />searchTerms?: string[], <br />target: {  }, <br />isMenuHidden?: boolean, <br />menuTitleAugmentation?: string, <br />menuTitleTooltip?: string, <br />menuTitle?: string, <br />pageData: {  }, <br /> }[]   |    |



## functionFormPageToWebPage()

| Input      |    |    |
| ---------- | -- | -- |
| pageData | `FunctionFormPage` |  |
| **Output** | { queryPath: string, <br />searchTerms?: string[], <br />target: {  }, <br />isMenuHidden?: boolean, <br />menuTitleAugmentation?: string, <br />menuTitleTooltip?: string, <br />menuTitle?: string, <br />pageData: {  }, <br /> }   |    |



## 🔹 CrudPage

Data needed to make a `WebPage`<CrudPage>





Properties: 

 | Name | Type | Description |
|---|---|---|
| modelName  | string |  |
| datasetSlugs (optional) | array |  |
| canCreate (optional) | boolean |  |
| canRead (optional) | boolean |  |
| canUpdate (optional) | boolean |  |
| canDelete (optional) | boolean |  |
| itemActionFunctionNames (optional) | array |  |
| pageActionFunctionNames (optional) | array |  |



## 🔹 FilePage

Properties: 

 | Name | Type | Description |
|---|---|---|
| projectRelativeFilePath  | string |  |
| internalLinkWord (optional) | string |  |
| imagePath (optional) | string |  |
| shortDescription (optional) | string |  |
| introDescription (optional) | string |  |



## 🔹 FileWebPage

Properties: 

 | Name | Type | Description |
|---|---|---|
| queryPath  | string |  |
| searchTerms (optional) | array |  |
| target (optional) | string |  |
| isMenuHidden (optional) | boolean |  |
| menuTitleAugmentation (optional) | string |  |
| menuTitleTooltip (optional) | string |  |
| menuTitle (optional) | string |  |
| pageData  | object |  |



## 🔹 FunctionFormPage

Data needed to make a `WebPage`<FunctionFormPage>





Properties: 

 | Name | Type | Description |
|---|---|---|
| functionName  | string |  |
| actionWithResult (optional) | string |  |
| routeOnIsSuccessful (optional) | string |  |
| customTitle (optional) | string |  |
| isMenuHidden (optional) | boolean |  |



## 📄 crudPageToWebPages (exported const)

## 📄 functionFormPageToWebPage (exported const)

