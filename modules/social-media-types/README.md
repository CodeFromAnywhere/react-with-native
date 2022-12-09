# Social media types

social-media-types (`OperationClassification` cjs)



# Api reference

## 🔹 SocialMediaPostTypeReturnType

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccess  | boolean |  |
| message  | string |  |
| postUrl (optional) | string |  |



## 🔹 SocialMediaPostTypeReturnType

Properties: 

 | Name | Type | Description |
|---|---|---|
| isSuccess  | boolean |  |
| message  | string |  |
| postUrl (optional) | string |  |



## 🔸 Interest

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
| parent_interestSlug  | string |  |



## 🔸 MediaCredential

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
| mediaType  | string |  |
| email (optional) | string |  |
| password  | string |  |
| username (optional) | string |  |
| phoneNumber (optional) | string |  |



## 🔹 MediaPlatformEnum

## 🔸 MediaPost

markdown model



Post/message on any medium.





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
| mediaPlatform  | string |  |
| posted_messageChannelId (optional) | string |  |
| isVerified (optional) | boolean |  |
| isPostable  | boolean |  |
| unpostableReason (optional) | string |  |
| isPosted (optional) | boolean |  |
| postedUrl (optional) | string |  |
| channelOrGroupName (optional) | string |  |
| webMarkdownFile_projectRelativePath (optional) | string |  |
| parsedTitleCalculated (optional) | string |  |
| parsedContentCalculated (optional) | string |  |
| parsedAssetCalculated (optional) | object |  |
| postedDetailsIndexed (optional) | object |  |



## 🔸 MediaChannel

jsonMultiple model



channel where messages can be posted to

examples:
- facebook group
- slack channel
- whatsapp pm
- facebook pm





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
| platformSlug  | string |  |
| platformChannelId  | string |  |
| url (optional) | string |  |
| name  | string |  |
| slug  | string |  |
| description (optional) | string |  |
| personId (optional) | string |  |
| isGroup (optional) | boolean |  |
| member_personIds (optional) | array |  |
| interestSlugs (optional) | array |  |
| locationSlug (optional) | string |  |
| language  | string |  |
| mediaCredentialId (optional) | string |  |
| myLastPostAt  | number |  |


