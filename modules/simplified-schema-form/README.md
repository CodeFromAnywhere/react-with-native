# Simplified schema form

simplified-schema-form (ui-es5 operation)

component that generates a form using react-with-native and a `SimplifiedSchema`. Can obtain any JSON object from the user.




# Outline

## Functions

- [ArrayForm](#ArrayForm)
- [FormContainer](#FormContainer)
- [getReferencedModelDataItem](#getReferencedModelDataItem)
- [ObjectForm](#ObjectForm)
- [ReferenceInput](#ReferenceInput)
- [renderParameterTitle](#renderParameterTitle)
- [SimplifiedSchemaForm](#SimplifiedSchemaForm)
- [useReferencableModelData](#useReferencableModelData)

## Interfaces

- [CategoryStack](#categorystack)
- [ReferencedModelDataItem](#referencedmodeldataitem)
- [ReferenceItem](#referenceitem)
- [ReferenceItemsObject](#referenceitemsobject)
- [ReferenceParameterInfo](#referenceparameterinfo)
- [SimplifiedSchema](#simplifiedschema)

## Variables

- [ArrayForm](#arrayform)
- [AssetInput](#assetinput)
- [FormContainer](#formcontainer)
- [getReferencedModelDataItem](#getreferencedmodeldataitem)
- [ObjectForm](#objectform)
- [ReferenceInput](#referenceinput)
- [renderParameterTitle](#renderparametertitle)
- [SimplifiedSchemaForm](#simplifiedschemaform)
- [useReferencableModelData](#usereferencablemodeldata)



# Functions

## ArrayForm

Component to render a parameter that holds an array

This is simply a wrapper around another `SimplifiedSchemaForm` where the `onChange` and `values` are slightly different

This component renders a `SimplifiedSchemaForm` for every item in the array, and adds buttons to insert/remove new items.




## FormContainer

A `FormContainer` is a simple container that can wrap your `SimplifiedSchemaForm` to give it a button that also sends when hitting enter on your keyboard. To achieve this, a `<form>` is created in this component.

Besides this, you can also add some texts, but styling is not possible to change for this component at this point (except for the form className). If you want a completely different style, it's probably better to build it yourself.

NB: TODO: There is a bug now where onSubmit gets called too often. Not sure how to fix this. Because of this, I'll simply remove the onSubmit action in the onsubmit for now, and prevent the default.




## getReferencedModelDataItem

### Parameters (2)

#### Parameter 1: parameterName: string

## ObjectForm

Component to render a parameter that holds an object

This is simply a wrapper around another SimplifiedSchemaForm where the onChange and values are slightly different




## ReferenceInput

This component renders an input to select an item to reference from another model (or multiple)




## renderParameterTitle

## SimplifiedSchemaForm

Recursive component that renders a form for a SimplifiedSchema




## useReferencableModelData

Hook to retreive `ReferencableModelData` to supply to `SimplifiedSchemaForm`.

Underwater, this calculates all referencableModelNames for a schema, and then it fetches the `ReferencableItem`[] for every one of those models, using `react-query` `useQuery` hooks

NB: be careful, not to change the simplifiedSchema after using this hook for the first time. This will change the amount of hooks and this can break react!

(it will give `Error: Rendered more hooks than during the previous render`)


### Returns: object

### Parameters (1)

#### Parameter 1: simplifiedSchema: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| todo (optional) | string |  |
| discussion (optional) | string |  |
| idea (optional) | string |  |
| later (optional) | string |  |
| nb (optional) | string |  |
| title (optional) | string |  |
| section (optional) | string |  |
| description (optional) | string |  |
| circularRefName (optional) | string |  |
| enum (optional) | array |  |
| properties (optional) | array |  |
| items (optional) | array |  |
| fullComment (optional) | string |  |


# Interfaces

## CategoryStack

- null: string






## ReferencedModelDataItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| data (optional) | array |  |
| isLoading (optional) | boolean |  |
| parameterName  | string |  |
| dataParameterName (optional) | string |  |
| descriptor (optional) | string |  |
| keyInModel (optional) | string |  |
| interfaceName (optional) | string |  |
| isReferenceMultipleParameter  | boolean |  |
| isReferenceSingleParameter  | boolean |  |
| isReferenceParameter  | boolean |  |



## ReferenceItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| slug (optional) | string |  |
| name (optional) | string |  |
| categoryStackCalculated (optional) | array |  |



## ReferenceItemsObject

Properties: 

 | Name | Type | Description |
|---|---|---|
| data (optional) | array |  |
| isLoading (optional) | boolean |  |



## ReferenceParameterInfo

Properties: 

 | Name | Type | Description |
|---|---|---|
| parameterName  | string |  |
| dataParameterName (optional) | string |  |
| descriptor (optional) | string |  |
| keyInModel (optional) | string |  |
| interfaceName (optional) | string |  |
| isReferenceMultipleParameter  | boolean |  |
| isReferenceSingleParameter  | boolean |  |
| isReferenceParameter  | boolean |  |



## SimplifiedSchema

JSONSchema7 derivative that has the following capabilities and and characteristics...

- does not include objects in objects that are also referenced to using xxxSlug or xxxId
- recursively finds the references and expands them, unless the references are circular
- easier to read
- has all the information we need
- is able to generate an object with values in the exact format the function needs it
- is able to easily generate a form





Properties: 

 | Name | Type | Description |
|---|---|---|
| todo (optional) | string |  |
| discussion (optional) | string |  |
| idea (optional) | string |  |
| later (optional) | string |  |
| nb (optional) | string |  |
| title (optional) | string |  |
| section (optional) | string |  |
| description (optional) | string |  |
| type  | string |  |
| circularRefName (optional) | string |  |
| enum (optional) | array |  |
| properties (optional) | array |  |
| items (optional) | array |  |
| fullComment (optional) | string |  |


# Variables

## ArrayForm (exported const)

Component to render a parameter that holds an array

This is simply a wrapper around another `SimplifiedSchemaForm` where the `onChange` and `values` are slightly different

This component renders a `SimplifiedSchemaForm` for every item in the array, and adds buttons to insert/remove new items.


## AssetInput (unexported const)

## FormContainer (exported const)

A `FormContainer` is a simple container that can wrap your `SimplifiedSchemaForm` to give it a button that also sends when hitting enter on your keyboard. To achieve this, a `<form>` is created in this component.

Besides this, you can also add some texts, but styling is not possible to change for this component at this point (except for the form className). If you want a completely different style, it's probably better to build it yourself.

NB: TODO: There is a bug now where onSubmit gets called too often. Not sure how to fix this. Because of this, I'll simply remove the onSubmit action in the onsubmit for now, and prevent the default.


## getReferencedModelDataItem (exported const)

## ObjectForm (exported const)

Component to render a parameter that holds an object

This is simply a wrapper around another SimplifiedSchemaForm where the onChange and values are slightly different


## ReferenceInput (exported const)

This component renders an input to select an item to reference from another model (or multiple)


## renderParameterTitle (exported const)

## SimplifiedSchemaForm (exported const)

Recursive component that renders a form for a SimplifiedSchema


## useReferencableModelData (exported const)

Hook to retreive `ReferencableModelData` to supply to `SimplifiedSchemaForm`.

Underwater, this calculates all referencableModelNames for a schema, and then it fetches the `ReferencableItem`[] for every one of those models, using `react-query` `useQuery` hooks

NB: be careful, not to change the simplifiedSchema after using this hook for the first time. This will change the amount of hooks and this can break react!

(it will give `Error: Rendered more hooks than during the previous render`)

