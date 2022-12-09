# Say

say (`OperationClassification` node-cjs)

Operation that contains multiple functions that wrap the `say` cli on MacOS to let the device speak out text.

Can later be extended to wrap other clis or even api's.

Should also be extended to work on multiple operating systems.




# Api reference

## sayLanguage()

| Input      |    |    |
| ---------- | -- | -- |
| message | string |  |,| language | `SayLanguageEnum` |  |
| **Output** |    |    |



## textToMp3()

| Input      |    |    |
| ---------- | -- | -- |
| options | { filePath?: string, <br />message?: string, <br />speechRate?: number, <br />voice?: string, <br />audioDevice?: string, <br />showProgress?: boolean, <br />interactive?: string, <br />fileFormat?: string, <br />dataFormat?: string, <br />bitRate?: number, <br />quality?: number, <br /> } |  |,| absoluteOutputFilePath | string | Absolute path to the mp3 |
| **Output** |    |    |



## 🔹 SayLanguageEnum

## 📄 sayLanguage (exported const)

## 📄 textToMp3 (exported const)

# CLI

<details><summary>Show CLI information (2)</summary>
    
  # main()




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## 📄 main (unexported const)

  </details>

# Internal

<details><summary>Show internal (8)</summary>
    
  # sayDutch()




| Input      |    |    |
| ---------- | -- | -- |
| message | string |  |
| **Output** |    |    |



## sayNepali()

| Input      |    |    |
| ---------- | -- | -- |
| message | string |  |
| **Output** |    |    |



## saySomething()

TODO: do research what else is out there

say [-v voice] [-r rate] [-o outfile [aud
io format options] | -n name:port | -a device] [-f f
ile | string ...]

DESCRIPTION
This tool uses the Speech Synthesis manager
to convert input text to audible speech and
either play it through the sound output
device chosen in System Preferences or save
it to an AIFF file.


for usage, see `man say`


| Input      |    |    |
| ---------- | -- | -- |
| input | {  } |  |
| **Output** |    |    |



## 🔹 SayOptions

Properties: 

 | Name | Type | Description |
|---|---|---|
| filePath (optional) | string |  |
| message (optional) | string |  |
| speechRate (optional) | number |  |
| voice (optional) | string |  |
| outputFilePath (optional) | string |  |
| audioDevice (optional) | string |  |
| showProgress (optional) | boolean |  |
| interactive (optional) | string |  |
| fileFormat (optional) | string |  |
| dataFormat (optional) | string |  |
| bitRate (optional) | number |  |
| quality (optional) | number |  |



## 📄 sayDutch (exported const)

## 📄 sayNepali (exported const)

## 📄 saySomething (exported const)

TODO: do research what else is out there

say [-v voice] [-r rate] [-o outfile [aud
io format options] | -n name:port | -a device] [-f f
ile | string ...]

DESCRIPTION
This tool uses the Speech Synthesis manager
to convert input text to audible speech and
either play it through the sound output
device chosen in System Preferences or save
it to an AIFF file.


for usage, see `man say`


## 📄 test (exported const)

  </details>

