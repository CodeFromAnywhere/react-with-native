# Database

database (node operation)

Operation that can be used within any typerepo to interact with the `fs-orm` (typebase) database. Relies on `sdk-db` (where your models should be summarized)




# Outline

## Functions

- [generateCsvInstance](#generateCsvInstance)
- [generateJsonSingleInstance](#generateJsonSingleInstance)
- [generateKvmdInstance](#generateKvmdInstance)
- [generateMarkdownInstance](#generateMarkdownInstance)
- [generateSlugTestModel](#generateSlugTestModel)
- [getCli](#getCli)
- [getMergedQueryConfig](#getMergedQueryConfig)
- [randomName](#randomName)
- [removeCli](#removeCli)
- [runModelEndToEndTest](#runModelEndToEndTest)
- [testOperationModels](#testOperationModels)
- [updateCli](#updateCli)
- [upsertCli](#upsertCli)

## Variables

- [db](#db)
- [generateCsvInstance](#generatecsvinstance)
- [generateJsonSingleInstance](#generatejsonsingleinstance)
- [generateKvmdInstance](#generatekvmdinstance)
- [generateMarkdownInstance](#generatemarkdowninstance)
- [generateSlugTestModel](#generateslugtestmodel)
- [getCli](#getcli)
- [getMergedQueryConfig](#getmergedqueryconfig)
- [randomName](#randomname)
- [removeCli](#removecli)
- [runModelEndToEndTest](#runmodelendtoendtest)
- [testDb](#testdb)
- [testOperationModels](#testoperationmodels)
- [updateCli](#updatecli)
- [upsertCli](#upsertcli)



# Functions

## generateCsvInstance()

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



## getMergedQueryConfig()

| Input      |    |    |
| ---------- | -- | -- |
| modelName | Todo / Peer / PeerMessage / Platform / Message / MessageChannel / MessagePreset / Person / PersonInformation / PersonInformationValue / Postable / SocialMediaCredentail / SocialMediaPost / UserPersonPlatformConnection / BundleConfig / MarkdownFileConfig / OperationConfig / OperationIndex / PackageJson / SocialMediaCallToAction / TsBuildError / TsComment / TsConfig / TsExport / TsFunction / TsImport / TsInterface / TsLintWarning / TsVariable / WebsiteCallToAction / Address / Area / City / Country / Location / KvmdWord / MarkdownWord / NepaliEnglishTranslationMatrix / Statement / TokiPonaMatrix / Translation / Word / WordCategory / WordMatrix / SlugModelType / AppDeveloper / Assignment / Bag / Calendar / DataPoint / Deliverable / Diary / Feeling / FeelingLog / Folder / Host / Inventory / Item / ItemCategory / KvmdShortcut / Label / Light / Listing / LoginCredential / Material / ProgressReport / Question / Reservation / Resource / Shit / ShitLog / ShoppingList / Shortcut / Student / Student2 / TaskError / Thing / TodoFile / Trackable / User / UserCredential / JeepType / LocationType / Activity / CompanyRequirement / CompanySize / CompanyType / Company / ContactInformation / Contribution / EsgMetric / ProductCategory / Product / ProofState / Proof / SustainabilityPlan / ValueChainPhase |  |,| customQueryConfig (optional) | `CustomQueryConfig` |  |
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


# Variables

## 📄 db (exported const)

## 📄 generateCsvInstance (exported const)

## 📄 generateJsonSingleInstance (exported const)

## 📄 generateKvmdInstance (exported const)

## 📄 generateMarkdownInstance (exported const)

## 📄 generateSlugTestModel (exported const)

## 📄 getCli (exported const)

## 📄 getMergedQueryConfig (exported const)

## 📄 randomName (exported const)

## 📄 removeCli (exported const)

## 📄 runModelEndToEndTest (exported const)

NB: we can't do a maketest because this thing relies on logging and we don't want to auto-run it


## 📄 testDb (exported const)

a db is created with models from all different db storage methods


## 📄 testOperationModels (exported const)

Test if it can find all `OperationIndex`, `OperationConfig`, `PackageJson`, `TsConfig`


## 📄 updateCli (exported const)

## 📄 upsertCli (exported const)

