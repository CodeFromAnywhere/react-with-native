# Short markdown parser js

short-markdown-parser-js (`OperationClassification` node-cjs)



# Api reference

## markdownParseToShortMarkdown()

| Input      |    |    |
| ---------- | -- | -- |
| markdownParse | `MarkdownParse` |  |
| **Output** | { audioWithViewsArray: { audioPath?: {  }, <br />audioKey?: string, <br />audioDurationMs?: number, <br />viewEmbeds: { audioKey?: string, <br />title?: string, <br />viewPath?: string, <br />spokenText?: string, <br />durationMs?: number, <br /> }[], <br /> }[], <br />backgroundMusicTrack?: { relativeAudioFilePath: string, <br />durationMs?: number, <br />startMs?: number, <br /> }[], <br /> }   |    |



## 📄 markdownParseToShortMarkdown (exported const)

# Internal

<details><summary>Show internal (4)</summary>
    
  # findAudioWithViewsArray()




| Input      |    |    |
| ---------- | -- | -- |
| content | string |  |,| index | number |  |,| title (optional) | string |  |
| **Output** | { audioPath?: {  }, <br />audioKey?: string, <br />audioDurationMs?: number, <br />viewEmbeds: { audioKey?: string, <br />title?: string, <br />viewPath?: string, <br />spokenText?: string, <br />durationMs?: number, <br /> }[], <br /> }[]   |    |



## shortMarkdownToMarkdownParse()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 findAudioWithViewsArray (exported const)

## 📄 shortMarkdownToMarkdownParse (exported const)

  </details>

