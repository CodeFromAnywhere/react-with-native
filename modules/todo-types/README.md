# Todo types

todo-types (`OperationClassification` cjs)


## todo-types

types related to the upcoming `todo-ui`

This is a js operation. This means you cannot use any react or node, it's pure typescript, compiled to javascript, and can be used anywhere.




# Api reference

## 🔹 TodoPagesConfig

Properties: 

 | Name | Type | Description |
|---|---|---|
| recency (optional) | string |  |
| personId (optional) | string |  |
| categoryStack (optional) | array |  |
| priority (optional) | string |  |
| subExtension (optional) | string |  |
| sort (optional) | string |  |



## 📄 todoPagesConfigRecencys (exported const)

## 🔸 TodoFile

markdown model



Any markdown file in the todo folder should become this model





Properties: 

 | Name | Type | Description |
|---|---|---|
| priority (optional) | string |  |
| isHiddenForFreelancer (optional) | boolean |  |
| isClaimable (optional) | boolean |  |
| doNowPrice (optional) | number |  |
| deadlineAt (optional) | number |  |
| codeRequired_operationSlugs  | array |  |
| todoOffersCalculated (optional) | array |  |
| owner_personId (optional) | string |  |
| categoryStackCalculated  | array |  |
| isPreset (optional) | boolean |  |
| isPostable (optional) | boolean |  |
| isCodestory (optional) | boolean |  |
| tsInterfaceIds (optional) | array |  |
| tsFunctionIds (optional) | array |  |
| bundleConfigSlugs (optional) | array |  |
| operationIds (optional) | array |  |
| reference_assets (optional) | array |  |
| headerImage (optional) | object |  |
| headerTitle (optional) | string |  |
| headerBig (optional) | boolean |  |
| headerSubTitle (optional) | string |  |
| header_markdownCallToActionSlugs (optional) | array |  |
| markdownCallToActionSlugs (optional) | array |  |
| shop_itemIds (optional) | array |  |
| author_personSlugs (optional) | array |  |
| interestSlugs (optional) | array |  |
| price (optional) | number |  |
| isDraft (optional) | boolean |  |
| updatedAt  | number |  |
| createdAt  | number |  |
| privacy  | string |  |
| language  | string |  |
| isLanguageCustom (optional) | boolean |  |
| deletedAt  | number |  |
| createdFirstAt  | number |  |
| operationName  | null |  |
| projectRelativePath  | string |  |
| operationRelativePath (optional) | string |  |
| id  | string |  |
| name  | string |  |
| slug  | string |  |
| markdown  | string |  |


# Internal

<details><summary>Show internal (9)</summary>
    
  # 🔹 ReviewSummary







Properties: 

 | Name | Type | Description |
|---|---|---|
| scoreYourselfSlider  | number |  |
| scoreYourselfDescription  | string |  |
| coderOfTheWeekVote_personId  | string |  |
| coderOfTheWeekVoteDescription  | string |  |



## 🔸 SelfSprintReview

jsonSingle model





GOAL:

- provide a good way for freelancers and students to self-assess
- structure the data to provide tools for self-analysis

TODO: PREREQUISITE:

- auth layer
- p2p
- create a **model-agnostic-ui** that renders this type of models nicely (many checkmarks, some sliders, some descriptions). can simply be converted into text for the most part
- make the DB crud component
- which also allows extra columns
- which also has an option to use the **model-agnostic-ui**
- add `Dataset`s support to DB crud
- make sure the form shows nicely
- slider component and convention
- show description by ensuring that, if the trimmed description is an empty string, it shows everything on all lines after, until the next variable
- monetisation

THOUGHTS:

- this was just one hour of work, and it kind of is a product (given I make all the general purpose prerequisites). I can make it a bundle that devs can install and BOOM! you got a SaaS... just charge 1$ per entry xD
- think about other things that can be assessed, can/should they be automated too? not only for teams, also for intimate groups of people to assess private things, also for yourself completely
- if I have more things like this, which are basically scoring sheets, I can easily reuse the statistics part of the UI that I make for this

TODO: CUSTOM:

- make a `ui-web` operation that has just this crud (or add to the Todo UI)
- add nice flow for showing the "coder of the week"
- add a column to share an item on social media if it's your own (may be super reusable too)
- later add things like summaries, history, comparisons, insights (but do it as generic as possible)
- later provide more auto-filled datapoints (xyzIndexed) for different things
- later let user auto-share things with the marketstack xD





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
| personId  | string |  |
| codeQuality  | object |  |
| timeManagement  | object |  |
| networking  | object |  |
| entrepreneurship  | object |  |
| clientCommunication  | object |  |
| problemsDescription  | string |  |
| solutionsDescription  | string |  |
| proudOfDescription  | string |  |
| scoreYourselfSlider  | number |  |
| scoreYourselfDescription  | string |  |
| coderOfTheWeekVote_personId  | string |  |
| coderOfTheWeekVoteDescription  | string |  |



## 🔹 SpecialKvmdModelType

Should be a model that can be taken from the database like kvmd, but for parsing, it needs its own parse methods (from and to json)

These methods can be given in the configuration of `createDb`.

These methods can be found.





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



## 🔹 Todo

The `Todo` KVMD model parses a `TodoFile` to find individual todos, their status, category, and more structured metadata.

Can be chosen to be used for a `TodoFile` to create an alternative UI

`TodoFile`s can be parsed to find this datastructure

Will be great for insights.





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
| title (optional) | string |  |
| deadlineAt (optional) | number |  |
| todo  | string |  |
| status  | string |  |
| isBlocked  | boolean |  |
| isCritical  | boolean |  |
| isInternetRequired  | boolean |  |
| assigned_personId (optional) | string |  |
| duration (optional) | number |  |
| durationTimeIndicator  | string |  |



## 🔹 TodoFileProperties

Properties: 

 | Name | Type | Description |
|---|---|---|
| priority (optional) | string |  |
| isHiddenForFreelancer (optional) | boolean |  |
| isClaimable (optional) | boolean |  |
| doNowPrice (optional) | number |  |
| deadlineAt (optional) | number |  |
| codeRequired_operationSlugs  | array |  |
| todoOffersCalculated (optional) | array |  |
| owner_personId (optional) | string |  |
| categoryStackCalculated  | array |  |



## 🔸 TodoOffer

jsonMultiple model



Freelancers can offer their services for a todofile





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
| offerPrice  | number |  |
| personId  | string |  |
| todoFileId  | string |  |
| isPaid (optional) | boolean |  |
| status  | string |  |
| assets  | array |  |
| offeredTodoFileMarkdown  | string |  |
| editableTodoFileMarkdown  | string |  |



## 🔹 TodoOfferStatus

Status of an offer to do some todolist

- `offered`: offer placed, has not been accepted yet. freelancer can still edit offer or remove it
- `rejected`: offer can be rejected by admin (before accepting)
- `canceled`: freelancer and admin can cancel an previously accepted offer
- `accepted`: offer is accepted by admin
- `todo`: freelancer has said it still needs to be done
- `doing` freelancer has said it's in progress
- `done` freelancer said it's done
- `approved` approved by admin, offer should become archived








## 🔹 TodoPriority

## 📄 todoPagesConfigRecencysConst (exported const)

  </details>

