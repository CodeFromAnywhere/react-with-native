# Simplified schema form

simplified-schema-form (ui-es5 operation)

component that generates a form using react-with-native and a `SimplifiedSchema`. Can obtain any JSON object from the user.




# Api reference

## <SimplifiedSchemaForm />

Recursive component that renders a form for a SimplifiedSchema


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 SimplifiedSchemaForm (exported const)

Recursive component that renders a form for a SimplifiedSchema


## <FormContainer />

A `FormContainer` is a simple container that can wrap your `SimplifiedSchemaForm` to give it a button that also sends when hitting enter on your keyboard. To achieve this, a `<form>` is created in this component.

Besides this, you can also add some texts, but styling is not possible to change for this component at this point (except for the form className). If you want a completely different style, it's probably better to build it yourself.

NB: TODO: There is a bug now where onSubmit gets called too often. Not sure how to fix this. Because of this, I'll simply remove the onSubmit action in the onsubmit for now, and prevent the default.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## useReferencableModelData()

Hook to retreive `ReferencableModelData` to supply to `SimplifiedSchemaForm`.

Underwater, this calculates all referencableModelNames for a schema, and then it fetches the `ReferencableItem`[] for every one of those models, using `react-query` `useQuery` hooks

NB: be careful, not to change the simplifiedSchema after using this hook for the first time. This will change the amount of hooks and this can break react!

(it will give `Error: Rendered more hooks than during the previous render`)


| Input      |    |    |
| ---------- | -- | -- |
| simplifiedSchema | `SimplifiedSchema` |  |
| **Output** | {  }   |    |



## 📄 FormContainer (exported const)

A `FormContainer` is a simple container that can wrap your `SimplifiedSchemaForm` to give it a button that also sends when hitting enter on your keyboard. To achieve this, a `<form>` is created in this component.

Besides this, you can also add some texts, but styling is not possible to change for this component at this point (except for the form className). If you want a completely different style, it's probably better to build it yourself.

NB: TODO: There is a bug now where onSubmit gets called too often. Not sure how to fix this. Because of this, I'll simply remove the onSubmit action in the onsubmit for now, and prevent the default.


## 📄 useReferencableModelData (exported const)

Hook to retreive `ReferencableModelData` to supply to `SimplifiedSchemaForm`.

Underwater, this calculates all referencableModelNames for a schema, and then it fetches the `ReferencableItem`[] for every one of those models, using `react-query` `useQuery` hooks

NB: be careful, not to change the simplifiedSchema after using this hook for the first time. This will change the amount of hooks and this can break react!

(it will give `Error: Rendered more hooks than during the previous render`)

# Internal

<details><summary>Show internal (13)</summary>
  
  # <ArrayForm />

Component to render a parameter that holds an array

This is simply a wrapper around another `SimplifiedSchemaForm` where the `onChange` and `values` are slightly different

This component renders a `SimplifiedSchemaForm` for every item in the array, and adds buttons to insert/remove new items.


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## getReferencedModelDataItem()

| Input      |    |    |
| ---------- | -- | -- |
| parameterName | string |  |,| referencedModelData (optional) | `ReferencableModelData` |  |
| **Output** |    |    |



## <ObjectForm />

Component to render a parameter that holds an object

This is simply a wrapper around another SimplifiedSchemaForm where the onChange and values are slightly different


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## <ReferenceInput />

This component renders an input to select an item to reference from another model (or multiple)


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## renderParameterTitle()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 🔹 ReferencedModelDataItem

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



## 🔹 ReferenceItem

Properties: 

 | Name | Type | Description |
|---|---|---|
| id  | string |  |
| slug (optional) | string |  |
| name (optional) | string |  |
| categoryStackCalculated (optional) | array |  |



## 🔹 ReferenceItemsObject

Properties: 

 | Name | Type | Description |
|---|---|---|
| data (optional) | array |  |
| isLoading (optional) | boolean |  |



## 📄 ArrayForm (exported const)

Component to render a parameter that holds an array

This is simply a wrapper around another `SimplifiedSchemaForm` where the `onChange` and `values` are slightly different

This component renders a `SimplifiedSchemaForm` for every item in the array, and adds buttons to insert/remove new items.


## 📄 getReferencedModelDataItem (exported const)

## 📄 ObjectForm (exported const)

Component to render a parameter that holds an object

This is simply a wrapper around another SimplifiedSchemaForm where the onChange and values are slightly different


## 📄 ReferenceInput (exported const)

This component renders an input to select an item to reference from another model (or multiple)


## 📄 renderParameterTitle (exported const)

  </details>

