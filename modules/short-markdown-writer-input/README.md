# Short markdown writer input

short-markdown-writer-input (`OperationClassification` undefined)



# Api reference

# Internal

<details><summary>Show internal (8)</summary>
    
  # `<ShortMarkdownPlayer />`




| Input      |    |    |
| ---------- | -- | -- |
| props | { shortMarkdown?: `ShortMarkdown`, <br />projectRelativeFilePath?: string, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## `<ShortMarkdownSlide />`

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## `<ShortStudio />`

the newer one, eventually to replace `ContextTextArea`
<SmartContentEditableDivInput
writerType={writerType}
value={value}
onChange={onChange}
markdownParseRenderConfig={markdownParseRenderConfig}
/>


| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## useMultiAudio()

- Implement a component that preloads all audios for the `ShortMarkdown` and lets you play one with a callback (look at https://stackoverflow.com/questions/47686345/playing-sound-in-react-js)
- If slide has audio belonging to it, find it and play it. Start at certain point, depending on which part you are at.
- Select the correct audio for every slide, and get the API url for it. Load it in into an `<audio>` element once you go to the slide.


| Input      |    |    |
| ---------- | -- | -- |
| urls | string[] |  |
| **Output** | { players: { url: string, <br />playing: boolean, <br /> }[], <br />toggle: {  }, <br /> }   |    |



## 📄 ShortMarkdownPlayer (exported const)

## 📄 ShortMarkdownSlide (exported const)

## 📄 ShortStudio (exported const)

the newer one, eventually to replace `ContextTextArea`
<SmartContentEditableDivInput
writerType={writerType}
value={value}
onChange={onChange}
markdownParseRenderConfig={markdownParseRenderConfig}
/>


## 📄 useMultiAudio (exported const)

- Implement a component that preloads all audios for the `ShortMarkdown` and lets you play one with a callback (look at https://stackoverflow.com/questions/47686345/playing-sound-in-react-js)
- If slide has audio belonging to it, find it and play it. Start at certain point, depending on which part you are at.
- Select the correct audio for every slide, and get the API url for it. Load it in into an `<audio>` element once you go to the slide.
  </details>

