# Mail

mail (`OperationClassification` node-cjs)



# Api reference

## sendMail()

Sends email(s) using sendgrid

Ensure your OS config is there


| Input      |    |    |
| ---------- | -- | -- |
| mailData | {  } |  |,| isMultiple (optional) | boolean |  |
| **Output** |    |    |



## 📄 sendMail (exported const)

Sends email(s) using sendgrid

Ensure your OS config is there

# Internal

<details><summary>Show internal (1)</summary>
    
  # 🔹 MailDataFromOptional

From is optional for sending an email because it will be filled in by the OsConfig default.





Properties: 

 | Name | Type | Description |
|---|---|---|
| from (optional) | string |  |
| to (optional) | object |  |
| cc (optional) | object |  |
| bcc (optional) | object |  |
| replyTo (optional) | object |  |
| sendAt (optional) | number |  |
| subject (optional) | string |  |
| text (optional) | string |  |
| html (optional) | string |  |
| content (optional) | object |  |
| templateId (optional) | string |  |
| personalizations (optional) | array |  |
| attachments (optional) | array |  |
| ipPoolName (optional) | string |  |
| batchId (optional) | string |  |
| sections (optional) | object |  |
| headers (optional) | object |  |
| categories (optional) | array |  |
| category (optional) | string |  |
| customArgs (optional) | object |  |
| asm (optional) | object |  |
| mailSettings (optional) | object |  |
| trackingSettings (optional) | object |  |
| substitutions (optional) | object |  |
| substitutionWrappers (optional) | array |  |
| isMultiple (optional) | boolean |  |
| dynamicTemplateData (optional) | object |  |
| hideWarnings (optional) | boolean |  |
| replyToList (optional) | object |  |

  </details>

