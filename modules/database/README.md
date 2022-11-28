# Database

database (`OperationClassification` node-cjs)

Operation that can be used within any typerepo to interact with the `fs-orm` (typebase) database. Relies on `sdk-db` (where your models should be summarized)




# Api reference

## 📄 db (exported const)

## getMergedQueryConfig()

| Input      |    |    |
| ---------- | -- | -- |
| modelName | SelfSprintReview / TodoFile / TodoOffer / AuthorizationModel / Device / Group / PageVisit / PaymentCoupon / PaymentEvent / PaymentPlan / PaymentSubscription / PeerMessage / Person / Persona / PersonInformation / PersonInformationValue / PersonPlatformConnection / Platform / RecurringReminder / Interest / MediaChannel / MediaCredentail / MediaPost / Postable / BundleConfig / Dataset / FunctionExecution / Operation / SocialMediaCallToAction / TsBuildError / TsComment / TsConfig / TsExport / TsFunction / TsImport / TsInterface / TsLintWarning / TsVariable / TypescriptFile / WebMarkdownFile / WebsiteCallToAction / Address / Area / City / Country / Location / KvmdWord / MarkdownWord / NepaliEnglishTranslationMatrix / Statement / TokiPonaMatrix / Translation / Word / WordCategory / WordCombination / WordMatrix / SlugModelType / AppDeveloper / Assignment / Bag / Calendar / Deliverable / Diary / Feeling / FeelingLog / Folder / Host / Inventory / Item / ItemCategory / KvmdShortcut / Label / Light / Listing / LoginCredential / Material / MessagePreset / PersonalCarbonFootprintProfile / ProgressReport / Question / Reservation / Resource / Shit / ShitLog / ShoppingList / Shortcut / Student / Student2 / TaskError / Trackable / User / UserCredential / Artist / PlayCategory / PlayItem / PlayList / PlaySchedule / RelationModelType / JeepType / LocationType / OperationConfig / OperationIndex / PackageJson / Activity / CompanyRequirement / CompanySize / CompanyType / Company / ContactInformation / Contribution / EsgMetric / ProductCategory / Product / ProofState / Proof / SustainabilityPlan / ValueChainPhase |  |,| customQueryConfig (optional) | `CustomQueryConfig` |  |
| **Output** |    |    |



## 📄 getMergedQueryConfig (exported const)

# CLI

<details><summary>Show CLI information (8)</summary>
    
  # getCli()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## removeCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## updateCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## upsertCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 getCli (exported const)

## 📄 removeCli (exported const)

## 📄 updateCli (exported const)

## 📄 upsertCli (exported const)

  </details>

# Tests

<details><summary>Show test information(14)</summary>
    
  # get()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## main()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## migration()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## set()

Can set a markdown item into a subfolder in the db model folder


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## testPerformance()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## test()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## upsert()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 get (unexported const)

## 📄 main (unexported const)

## 📄 migration (unexported const)

## 📄 set (unexported const)

Can set a markdown item into a subfolder in the db model folder


## 📄 testPerformance (exported const)

## 📄 test (unexported const)

## 📄 upsert (unexported const)

  </details>

# Internal

<details><summary>Show internal (33)</summary>
    
  # generateCsvInstance()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## generateJsonSingleInstance()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## generateKvmdInstance()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## generateMarkdownInstance()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## generateSlugTestModel()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## getCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## randomName()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |



## removeCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## runModelEndToEndTest()

NB: we can't do a maketest because this thing relies on logging and we don't want to auto-run it


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## testOperationModels()

Test if it can find all `OperationIndex`, `OperationConfig`, `PackageJson`, `TsConfig`


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## testPerformance()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## updateCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## upsertCli()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 🔸 CsvTestModel

csv model









Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| description  | string |  |
| age  | number |  |



## 🔸 DefaultTestModel

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| name  | string |  |
| description  | string |  |
| markdown  | string |  |
| special  | boolean |  |



## 🔸 KvmdTestModel

keyValueMarkdown model









Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| categoryStackCalculated  | array |  |
| isHeaderCalculated  | boolean |  |



## 🔸 MarkdownTestModel

markdown model









Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| markdown  | string |  |
| categoryStackCalculated  | array |  |
| stringA  | string |  |
| stringB  | string |  |
| stringC  | string |  |
| age  | number |  |
| yes  | boolean |  |
| canBeNull  | string |  |
| canBeUndefined (optional) | string |  |



## 🔸 SlugTestModel

jsonMultiple model









Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| categoryStackCalculated (optional) | array |  |
| description  | string |  |
| markdown  | string |  |
| special  | boolean |  |



## 🔹 TestModels

Properties: 

 | Name | Type | Description |
|---|---|---|
| CsvTestModel  | object |  |
| KeyValueMarkdownTestModel  | object |  |
| MarkdownTestModel  | object |  |
| JsonMultipleTestModel  | object |  |
| DefaultTestModel  | object |  |
| TsConfig  | object |  |



## 📄 generateCsvInstance (exported const)

## 📄 generateJsonSingleInstance (exported const)

## 📄 generateKvmdInstance (exported const)

## 📄 generateMarkdownInstance (exported const)

## 📄 generateSlugTestModel (exported const)

## 📄 getCli (exported const)

## 📄 randomName (exported const)

## 📄 removeCli (exported const)

## 📄 runModelEndToEndTest (exported const)

NB: we can't do a maketest because this thing relies on logging and we don't want to auto-run it


## 📄 testDb (exported const)

a db is created with models from all different db storage methods


## 📄 testOperationModels (exported const)

Test if it can find all `OperationIndex`, `OperationConfig`, `PackageJson`, `TsConfig`


## 📄 testPerformance (exported const)

## 📄 updateCli (exported const)

## 📄 upsertCli (exported const)

  </details>

