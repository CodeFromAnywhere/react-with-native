# Markdown parse js

markdown-parse-js (node operation)

Size: 360 LOC, 2128 data characters, 
 
Imported dependencies:

- From Core Libraries: none
- From Packages: none
- From Operations: FrontMatter, makeTest, MarkdownParse, makeTest, MarkdownChunk, makeTest, MarkdownParse, MarkdownParse, FrontMatter, mergeObjectsArray, makeTest, parsePrimitive, MarkdownChunk, makeTest, makeTest

# Outline

## Functions

- [frontmatterParseToString](#frontmatterParseToString)
- [markdownParseToMarkdownString](#markdownParseToMarkdownString)
- [mdContentParseRecursively](#mdContentParseRecursively)
- [mdToJsonParse](#mdToJsonParse)
- [parseFrontmatterMarkdownString](#parseFrontmatterMarkdownString)
- [parseMdToChunks](#parseMdToChunks)
- [removeHeaderPrefix](#removeHeaderPrefix)



# Functions

## frontmatterParseToString

Max. indexation depth: 2, 



### Returns: string







### Arguments

#### frontmatter: object





Properties: 

 | Name | Type | Description |
|---|---|---|



## markdownParseToMarkdownString

Max. indexation depth: 1, 



### Returns: string







### Arguments

#### markdownParse: object





Properties: 

 | Name | Type | Description |
|---|---|---|
| fileName (optional) | string | if available, this can be the filename of the markdown in this markdownparse. Can be used for things like merging |
| parameters  | object |  |
| content (optional) | array | structured content based on h1, h2, h3, etc (paragraphs, recursive) |
| raw  | string | raw markdown without frontmatter |


## mdContentParseRecursively

Max. indexation depth: 5, 

recursively parses a string containing markdown (without frontmatter) into a MarkdownChunk[]

Improve:
- include the comment-type (TODO/NB/etc), both on a chunk level and on root level
- parse paragraphs further around the assets

## Returns: unknown

### Arguments

#### markdownString: string







#### level: number







## mdToJsonParse

Max. indexation depth: 2, 

makes a markdown parse from a markdown string

TODO: `markdownStringToMarkdownParse` is a better name

## Returns: unknown

### Arguments

#### markdownString: string







#### fileName (optional): string







## parseFrontmatterMarkdownString

Max. indexation depth: 3, 

splits a markdown string into its frontmatter object and the raw content (without frontmatter)

## Returns: unknown

### Arguments

#### markdownWithFrontmatter: string







## parseMdToChunks

Max. indexation depth: 6, 

should get chunks recursively. first just look for every h1 line. everything after the h1 line is the children  until there's another h1 line, then do this recursivley for h2, h3, etc.

## Returns: unknown

### Arguments

#### markdownString: string







#### level: number







## removeHeaderPrefix

Max. indexation depth: 4, 

removes header prefix (##### etc) and trims whats behind that

## Returns: unknown

### Arguments

#### string: string







