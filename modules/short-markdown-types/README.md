# Short markdown types

short-markdown-types (`OperationClassification` cjs)



# Api reference

## 🔹 ShortMarkdown

Properties: 

 | Name | Type | Description |
|---|---|---|
| audioWithViewsArray  | array |  |
| backgroundMusicTrack (optional) | array |  |



## 🔹 AudioWithViews

Properties: 

 | Name | Type | Description |
|---|---|---|
| audioPath  | string |  |
| audioKey (optional) | string |  |
| audioDurationMs (optional) | number |  |
| viewEmbeds  | array |  |



## 🔹 ViewEmbed

Properties: 

 | Name | Type | Description |
|---|---|---|
| audioKey (optional) | string |  |
| title (optional) | string |  |
| viewPath (optional) | string |  |
| spokenText (optional) | string |  |
| durationMs (optional) | number |  |


# Internal

<details><summary>Show internal (2)</summary>
    
  # 🔹 AudioTrackItem







Properties: 

 | Name | Type | Description |
|---|---|---|
| relativeAudioFilePath  | string |  |
| durationMs (optional) | number |  |
| startMs (optional) | number |  |



## 🔹 ShortMarkdownSlide

Duration is required, and either title or viewPath must be there





Properties: 

 | Name | Type | Description |
|---|---|---|
| title (optional) | string |  |
| viewPath (optional) | string |  |
| durationMs  | number |  |
| startMs (optional) | number |  |
| subtitle (optional) | string |  |

  </details>

