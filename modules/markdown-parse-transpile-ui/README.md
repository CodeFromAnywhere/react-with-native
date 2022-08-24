# Markdown parse transpile ui

markdown-parse-transpile-ui (undefined operation)

Size: undefined LOC, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: none

# Outline

## Functions

- [renderMarkdownContent](#renderMarkdownContent)
- [renderMarkdownTitle](#renderMarkdownTitle)
- [renderMarkdownChunk](#renderMarkdownChunk)
- [renderMarkdownParse](#renderMarkdownParse)
- [renderFrontMatter](#renderFrontMatter)



# Functions

## renderMarkdownContent

Max. indexation depth: 6, 

renders a markdown striing (without frontmatter)

## Returns: unknown

### Arguments

#### content: string







#### config (optional): object





Properties: 

 | Name | Type | Description |
|---|---|---|
| big (optional) | boolean |  |


## renderMarkdownTitle

Max. indexation depth: 3, 

renders a markdown title (level should be 1 for h1 and 6 for h6)

## Returns: unknown

### Arguments

#### title: string







#### level: number







## renderMarkdownChunk

Max. indexation depth: 3, 

renders a MarkdownChunk interface

## Returns: unknown

### Arguments

#### chunk: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| level  | number | 0 is a paragraph 1-6 is h1 until h6 |
| content (optional) | string |  |
| title (optional) | string | NB: title can also be an empty string ("") |
| children (optional) | array | all content until the next title. it's either a content array if there's any titles found, or a string[] if it's paragraphs |


## renderMarkdownParse

Max. indexation depth: 3, 

renders the MardkownParse interface (including frontmatter)

## Returns: unknown

### Arguments

#### markdownParse: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string | if available, this can be the filename of the markdown in this markdownparse. Can be used for things like merging |
| parameters  | object | TODO: either make a special category crud for the category model would be nice maybe (especially a backend that makes sure all references stay updated would be epic) |
| content (optional) | array | structured content based on h1, h2, h3, etc (paragraphs, recursive) |
| raw  | string | raw markdown without frontmatter |


## renderFrontMatter

Max. indexation depth: 6, 

Renders markdown frontmatter parameters (and optionally a spacer)

## Returns: unknown

### Arguments

#### parameters: object



```md
TODO: either make a special category crud for the category model would be nice maybe (especially a backend that makes sure all references stay updated would be epic)
```


Properties: 

 | Name | Type | Description |
|---|---|---|



#### config (optional): object





Properties: 

 | Name | Type | Description |
|---|---|---|
| renderSpacer (optional) | boolean |  |


