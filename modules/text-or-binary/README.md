# Text or binary

text-or-binary (js operation)


## 🗳 text or binary?

This operation provides handy functions to check whether the contents of a file are of a text or binary format...

This is a js operation. This means you cannot use any react or node, it's pure typescript, compiled to javascript, and can be used anywhere.




# Api reference

## isText()

/**
 * Determine if the filename and/or buffer is text.
 * Determined by extension checks first (if filename is available), otherwise if unknown extension or no filename, will perform a slower buffer encoding detection.
 * This order is done, as extension checks are quicker, and also because encoding checks cannot guarantee accuracy for chars between utf8 and utf16.
 * The extension checks are performed using the resources https://github.com/bevry/textextensions and https://github.com/bevry/binaryextensions
 * @param filename The filename for the file/buffer if available
 * @param buffer The buffer for the file if available
 * @returns Will be `null` if neither `filename` nor `buffer` were provided. Otherwise will be a boolean value with the detection result.
 */


| Input      |    |    |
| ---------- | -- | -- |
| filename (optional) | string | The filename for the file/buffer if available |,| buffer (optional) | {  } | The buffer for the file if available |
| **Output** | {  }   |    |


