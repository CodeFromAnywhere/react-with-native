# Text or binary

text-or-binary (undefined operation)


## ❌ No description set yet

Please set a description for this operation in OPERATION.md

This is a js operation. This means you cannot use any react or node, it's pure typescript, compiled to javascript, and can be used anywhere.




# Outline

## Functions

- [getChunkBegin](#getChunkBegin)
- [getChunkEnd](#getChunkEnd)
- [getEncoding](#getEncoding)
- [isBinary](#isBinary)
- [isFirstByteOf2ByteChar](#isFirstByteOf2ByteChar)
- [isFirstByteOf3ByteChar](#isFirstByteOf3ByteChar)
- [isFirstByteOf4ByteChar](#isFirstByteOf4ByteChar)
- [isLaterByteOfUtf8](#isLaterByteOfUtf8)
- [isText](#isText)

## Interfaces

- [EncodingOpts](#encodingopts)

## Variables

- [binaryExtensions](#binaryextensions)
- [textExtensions](#textextensions)



# Functions

## getChunkBegin

### Returns: object

### Parameters (2)

#### Parameter 2: chunkBegin: number

## getChunkEnd

### Returns: object

### Parameters (2)

#### Parameter 2: chunkEnd: number

## getEncoding

/**
 * Get the encoding of a buffer.
 * Checks the start, middle, and end of the buffer for characters that are unrecognized within UTF8 encoding.
 * History has shown that inspection at all three locations is necessary.
 * @returns Will be `null` if `buffer` was not provided. Otherwise will be either `'utf8'` or `'binary'`
 */


### Returns: string(Enum: ul | utf8 | binary)

### Parameters (2)

#### Parameter 1: buffer: object

#### Parameter 2: opts (optional): object

Properties: 

 | Name | Type | Description |
|---|---|---|
| chunkLength (optional) | number |  |
| chunkBegin (optional) | number |  |



## isBinary

/**
 * Determine if the filename and/or buffer is binary.
 * Determined by extension checks first (if filename is available), otherwise if unknown extension or no filename, will perform a slower buffer encoding detection.
 * This order is done, as extension checks are quicker, and also because encoding checks cannot guarantee accuracy for chars between utf8 and utf16.
 * The extension checks are performed using the resources https://github.com/bevry/textextensions and https://github.com/bevry/binaryextensions
 * @param filename The filename for the file/buffer if available
 * @param buffer The buffer for the file if available
 * @returns Will be `null` if neither `filename` nor `buffer` were provided. Otherwise will be a boolean value with the detection result.
 */


### Returns: object

### Parameters (2)

#### Parameter 1: filename (optional): string

#### Parameter 2: buffer (optional): object

## isFirstByteOf2ByteChar

### Returns: object

### Parameters (1)

#### Parameter 1: byte: number

## isFirstByteOf3ByteChar

### Returns: object

### Parameters (1)

#### Parameter 1: byte: number

## isFirstByteOf4ByteChar

### Returns: object

### Parameters (1)

#### Parameter 1: byte: number

## isLaterByteOfUtf8

### Returns: object

### Parameters (1)

#### Parameter 1: byte: number

## isText

/**
 * Determine if the filename and/or buffer is text.
 * Determined by extension checks first (if filename is available), otherwise if unknown extension or no filename, will perform a slower buffer encoding detection.
 * This order is done, as extension checks are quicker, and also because encoding checks cannot guarantee accuracy for chars between utf8 and utf16.
 * The extension checks are performed using the resources https://github.com/bevry/textextensions and https://github.com/bevry/binaryextensions
 * @param filename The filename for the file/buffer if available
 * @param buffer The buffer for the file if available
 * @returns Will be `null` if neither `filename` nor `buffer` were provided. Otherwise will be a boolean value with the detection result.
 */


### Returns: object

### Parameters (2)

#### Parameter 1: filename (optional): string

#### Parameter 2: buffer (optional): object

# Interfaces

## EncodingOpts

Properties: 

 | Name | Type | Description |
|---|---|---|
| chunkLength (optional) | number |  |
| chunkBegin (optional) | number |  |


# Variables

## binaryExtensions (exported const)

List of binary file extensions


## textExtensions (exported const)

List of text file extensions

