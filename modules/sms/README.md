# Sms

sms (`OperationClassification` node-cjs)



# Api reference

## sendSms()

Send sms

Requires OS Config to have Twilio sid and auth token.

Reqruired options: `to` and `body`

`to` is not required, but will overwrite the one you specified in your `OsConfig`


| Input      |    |    |
| ---------- | -- | -- |
| options | { addressRetention?: string, <br />applicationSid?: string, <br />attempt?: number, <br />body?: string, <br />contentRetention?: string, <br />contentSid?: string, <br />contentVariables?: string, <br />forceDelivery?: boolean, <br />from?: string, <br />maxPrice?: number, <br />mediaUrl?: {  }, <br />messagingServiceSid?: string, <br />persistentAction?: {  }, <br />provideFeedback?: boolean, <br />scheduleType?: string, <br />sendAsMms?: boolean, <br />sendAt?: string, <br />shortenUrls?: boolean, <br />smartEncoded?: boolean, <br />statusCallback?: string, <br />to: string, <br />validityPeriod?: number, <br /> } | Options to pass to create |
| **Output** |    |    |



## 📄 sendSms (exported const)

Send sms

Requires OS Config to have Twilio sid and auth token.

Reqruired options: `to` and `body`

`to` is not required, but will overwrite the one you specified in your `OsConfig`

