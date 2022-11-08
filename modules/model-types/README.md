# Model types

model-types (js operation)



# Api reference

## generateId()

24 characters of the alphabet provides 9E33 combinations, wont be possible to brute-force in centuries, even if there are billions of entries


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `String`   |    |



## 📄 generateId (exported const)

24 characters of the alphabet provides 9E33 combinations, wont be possible to brute-force in centuries, even if there are billions of entries


## 🔹 DefaultModelType

Use this model by default





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



## 🔹 KeyValueMarkdownModelType

handy model type for storing stuff in a KeyValue Markdown file.
empty lines are omitted

all you need to specify in the kvmd is the key and the value, separated by ":"

NB: there can be a `parent_modelNameSlug` key exposed that should refer to the parent slug





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



## 🔹 Slug

use this for any identifier that's not an Id-type. Usually this is a kebab-case version of a written text, but it can also be a file path, for example.








## 🔸 SlugModelType

jsonMultiple model



use this model for things with a name that have an unique slug that can be used to identify the model





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



## generateRandomString()

| Input      |    |    |
| ---------- | -- | -- |
| length | number |  |
| **Output** | `String`   |    |



## 🔹 AugmentedAnyModelType

Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |



## 🔹 Id

Should be an unique string
By default, you can use `generateId()` to generate a random string of 16 characters.
If you wish, you can also use any other string, as long as you are sure it's unique.


## Background Info

azAZ09 characters are easy to copy and provide 62 characters.
the goal of an id is to be unique.

the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.

the change of duplicate ids gets bigger once you make them shorter
the change of finding an existing id gets bigger once you make them shorter

An Id with 12 characters would provide 3.22e21 combinations.

What is the change of duplicate ids? This depends on the amount of identifyable items in the data
What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.

Why make an id short? I don't know if there's an important reason.

All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.

An id would look like this:

```
{
"id": "sk2EcW9AkZpksk2EcW9AkZpk"
}
```

Looks good to me!
Don't think about it and just keep it simple.
We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this.








## 🔹 Language

all currently supported languages








## 🔹 Markdown

a string that is known to contain markdown.








## 🔹 MarkdownModelType

Handy model type for storing stuff in a Markdown file.

1 markdown file will represent 1 MarkdownModelType extended instance

another option could be to parse the markdown file, but to KISS we are going to just return markdown with the full markdown content

TODO: see how this relates to MarkdownFile. Make this very clear!





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



## 📄 generateRandomString (exported const)

## 🔹 CategoryStack

- null: string






## 🔹 ModelLocation

Parameters that tell you about the location an instance of a model.
Models can be tied to an operation. They always have a `projectRelativePath`, and if they are tied to an operation, also an `operationRelativePath`.





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |



## 🔹 DbFileLocation

Object used to hand over all information about the location of a db-file in a structured way





Properties: 

 | Name | Type | Description |
|---|---|---|
| absolutePath  | string |  |
| modelName  | string |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |



## 🔹 KeyValueMarkdownParse

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameters  | object |  |
| data  | array |  |



## 🔹 AnyModelType

Parameters that every model will always have.

NB: TimeTypes (createdAt, updatedAt, etc.) are not always included because the kvmd-model doesn't have them.

NB: RelationTypes are also not always included for the same reason





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |



## 🔹 CsvModelType

Use this model for things you want to store in CSV format

TODO: add support for numbers, booleans, null, undefined





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



## 🔹 Json

## 🔹 TsIndexModelType

identifier of any index type interface





Properties: 

 | Name | Type | Description |
|---|---|---|
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| operationRelativeTypescriptFilePath  | string |  |



## isEmail()

| Input      |    |    |
| ---------- | -- | -- |
| email | string |  |
| **Output** |    |    |



## 🔹 CategoryModelType

TODO: make this be able to hold more than just the KV. If that's not really needed just throw this away...

Simple recursive data structure for hierarchical categories. Should be used to make any category model

Make sure, when extending this, to provide a reference `xxxSlug` and its content `xxx` as optional parameters to its parent categories.

E.g. for a `CountryCategory`, you should provide `countryCategorySlug` and `countryCategory`





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



## 🔹 Text

text can be in multiple formats.
most texts in data are probably just text
but they can also contain markdown
----
if there is a data model with just a single text and it is clear from the name of the model what it should be, better call it either text or markdown.








## markdownModelTypeToMarkdownString()

| Input      |    |    |
| ---------- | -- | -- |
| markdownModelType | `Storing<MarkdownModelType>` |  |
| **Output** | `String`   |    |



## 🔹 KvmdLine

all things that can be parsed from a single line





Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| value (optional) | string |  |
| comment  | string |  |



## 🔹 PhoneNumber

country code without +








## 📄 markdownModelTypeToMarkdownString (exported const)

# Internal

<details><summary>Show internal (16)</summary>
  
  # generatePassword()

/**
 * generates a password. By default, uses a length of 14
 */


| Input      |    |    |
| ---------- | -- | -- |
| passwordLength (optional) | number |  |
| **Output** | `String`   |    |



## generateTime()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | {  }   |    |



## 🔹 CreatedAt

## 🔹 CreatedFirstAt

in some cases, data can be created before it was created in our system. In this case, use CreatedFirstAt if this information is important.








## 🔹 DeletedAt

## 🔹 Email

## 🔹 Index

used for md files. index is the line








## 🔹 RelationType

This probably doesn't work, but it would be great if it would. This way I'd like to say that any model can have keys that end with "Id". These keys should always refer to Ids from other models.
Also, if a model has a key like this, it is inferred that there is also a key without the Id suffix which does or doesn't cointain the actual model specified by the id.

If this cannot be done in typescript, it can be convention, and we can create a linter for this.

Wooh!

```
const relations: RelationType = {
helloId: "hoi",
byeId: "bye",
};
```

The above seems to be working fine, so it IS possible!

TODO: think about it... should the name of the parameter be dependent on the strategy of how the model is stored? Maybe just call it all id, right? We can also make the index a string by just prepending a string to it.








## 🔹 ShouldNotBeStored

Parameters that should not be stored into the database








## 🔹 SlugModelProperties

Properties: 

 | Name | Type | Description |
|---|---|---|
| slug  | string |  |
| name  | string |  |
| language  | string |  |



## 🔹 Time

Time

Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time.
I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.

It is the amount of ms since 1970.

I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.

Therefore, let's store all time values in the format Date.now()








## 🔹 TimeTypes

TimeTypes is often extended with modelTypes.





Properties: 

 | Name | Type | Description |
|---|---|---|
| createdAt  | number |  |
| updatedAt  | number |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |



## 🔹 UpdatedAt

## 🔹 Url

valid url, can be validated








## 📄 generateTime (exported const)

## 📄 languages (exported const)

keys are the iso codes which will be saved in the db, the values are values which can be shown to the user in any UI
  </details>

