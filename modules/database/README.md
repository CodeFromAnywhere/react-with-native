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
- [getRanomAge](#getRanomAge)
- [get](#get)
- [main](#main)
- [migration](#migration)
- [randomName](#randomName)
- [removeCli](#removeCli)
- [runModelEndToEndTest](#runModelEndToEndTest)
- [set](#set)
- [testOperationModels](#testOperationModels)
- [test](#test)
- [updateCli](#updateCli)
- [upsertCli](#upsertCli)
- [upsert](#upsert)

## Interfaces

- [CustomQueryConfig](#customqueryconfig)

## Variables

- [dbConfig](#dbconfig)
- [db](#db)
- [generateCsvInstance](#generatecsvinstance)
- [generateJsonSingleInstance](#generatejsonsingleinstance)
- [generateKvmdInstance](#generatekvmdinstance)
- [generateMarkdownInstance](#generatemarkdowninstance)
- [generateSlugTestModel](#generateslugtestmodel)
- [getCli](#getcli)
- [getMergedQueryConfig](#getmergedqueryconfig)
- [getRanomAge](#getranomage)
- [get](#get)
- [main](#main)
- [migration](#migration)
- [randomName](#randomname)
- [removeCli](#removecli)
- [runModelEndToEndTest](#runmodelendtoendtest)
- [set](#set)
- [testDb](#testdb)
- [testOperationModels](#testoperationmodels)
- [test](#test)
- [updateCli](#updatecli)
- [upsertCli](#upsertcli)
- [upsert](#upsert)



# Functions

## generateCsvInstance

## generateJsonSingleInstance

## generateKvmdInstance

## generateMarkdownInstance

## generateSlugTestModel

## getCli

## getMergedQueryConfig

### Parameters (2)

#### Parameter 1: modelName: string(Enum: Todo | Peer | PeerMessage | Platform | Message | MessageChannel | MessagePreset | Person | PersonInformation | PersonInformationValue | Postable | SocialMediaCredentail | SocialMediaPost | UserPersonPlatformConnection | BundleConfig | MarkdownFileConfig | OperationConfig | OperationIndex | PackageJson | SocialMediaCallToAction | TsBuildError | TsComment | TsConfig | TsExport | TsFunction | TsImport | TsInterface | TsLintWarning | TsVariable | WebsiteCallToAction | Address | Area | City | Country | Location | KvmdWord | MarkdownWord | NepaliEnglishTranslationMatrix | Statement | TokiPonaMatrix | Translation | Word | WordCategory | WordMatrix | SlugModelType | AppDeveloper | Assignment | Bag | Calendar | DataPoint | Deliverable | Diary | Feeling | FeelingLog | Folder | Host | Inventory | Item | ItemCategory | KvmdShortcut | Label | Light | Listing | LoginCredential | Material | ProgressReport | Question | Reservation | Resource | Shit | ShitLog | ShoppingList | Shortcut | Student | Student2 | TaskError | Thing | TodoFile | Trackable | User | UserCredential | JeepType | LocationType | Activity | CompanyRequirement | CompanySize | CompanyType | Company | ContactInformation | Contribution | EsgMetric | ProductCategory | Product | ProofState | Proof | SustainabilityPlan | ValueChainPhase)

#### Parameter 2: customQueryConfig (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| operationName (optional) | string |  |



## getRanomAge

## get

## main

## migration

## randomName

## removeCli

## runModelEndToEndTest

NB: we can't do a maketest because this thing relies on logging and we don't want to auto-run it




## set

Can set a markdown item into a subfolder in the db model folder




## testOperationModels

Test if it can find all `OperationIndex`, `OperationConfig`, `PackageJson`, `TsConfig`




## test

## updateCli

## upsertCli

## upsert

# Interfaces

## CustomQueryConfig

NB: the dbStorageMethod cannot be specified here because this is a static configuration per db-model and cannot be specified on a per-query basis.

Also you can't specify projectRelativePath and operationRelativePath. It should not be needed, you should specify the db storage locations in the createDb config.





Properties: 

 | Name | Type | Description |
|---|---|---|
| manualProjectRoot (optional) | string |  |
| operationName (optional) | string |  |


# Variables

## dbConfig (unexported const)

## db (exported const)

## generateCsvInstance (exported const)

## generateJsonSingleInstance (exported const)

## generateKvmdInstance (exported const)

## generateMarkdownInstance (exported const)

## generateSlugTestModel (exported const)

## getCli (exported const)

## getMergedQueryConfig (exported const)

## getRanomAge (unexported const)

## get (unexported const)

## main (unexported const)

## migration (unexported const)

## randomName (exported const)

## removeCli (exported const)

## runModelEndToEndTest (exported const)

NB: we can't do a maketest because this thing relies on logging and we don't want to auto-run it


## set (unexported const)

Can set a markdown item into a subfolder in the db model folder


## testDb (exported const)

a db is created with models from all different db storage methods


## testOperationModels (exported const)

Test if it can find all `OperationIndex`, `OperationConfig`, `PackageJson`, `TsConfig`


## test (unexported const)

## updateCli (exported const)

## upsertCli (exported const)

## upsert (unexported const)

