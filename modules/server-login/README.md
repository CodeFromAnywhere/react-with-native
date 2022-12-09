# Server login

server-login (`OperationClassification` node-cjs)

This operation exposes rudimentary functions to set cookies from the backend. We require cookies in order to authenticate a user for GET requests. Cookies are sent to the server for every request and are a safer way, because they are not part of the URL that can be found in the browser history.

This thing is far from finished, see `todo/` for what needs to be done.




# Api reference

## isValidPassword()

| Input      |    |    |
| ---------- | -- | -- |
| password | string |  |
| **Output** | {  }   |    |



## 📄 isValidPassword (exported const)

# Internal

<details><summary>Show internal (39)</summary>
    
  # addAuthenticationMethod()

sends an email or sms, or already confirms in case of emailPassword

core function for `addPersonAuthenticationMethod` and `addDeviceAuthenticatedMethod`


| Input      |    |    |
| ---------- | -- | -- |
| method | `AuthenticationMethodMethod` |  |,| handle | string |  |,| shouldBeUnique (optional) | boolean | TODO: check if it's unique before sending an email. This is needed in case you are a person trying to add a method, because then there might be another person with the same handle. |,| credential (optional) | string |  |
| **Output** |    |    |



## addDeviceAuthenticationMethodConfirm()

adds an `authenticatedMethod` to `Device` after the OTP is correct

For now, only handles methods `phoneNumber` and `email`

TODO: extrahere the core into `addAuthenticationMethodConfirm` and use it in this one and make also `addPersonAuthenticationMethodConfirm`


| Input      |    |    |
| ---------- | -- | -- |
| deviceId | string | device id |,| method | `AuthenticationMethodMethod` |  |,| otp | number | one time password |
| **Output** |    |    |



## addDeviceAuthenticationMethodWithContext()

returns new function context with added authenticationmethod


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| method | `AuthenticationMethodMethod` |  |,| handle | string |  |,| credential (optional) | string |  |
| **Output** |    |    |



## addPersonAuthenticationMethodWithContext()

| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| method | `AuthenticationMethodMethod` |  |,| handle | string | most of the time, this is a username, but can also be phone number or email or so |,| credential (optional) | string |  |
| **Output** |    |    |



## findAuthenticatedPersonWithHandle()

Check if the handle is already taken by some person in the system


| Input      |    |    |
| ---------- | -- | -- |
| method | `AuthenticationMethodMethod` |  |,| handle | string |  |
| **Output** |    |    |



## findLoggedinPersonsWithContext()

This finds all persons you should be logged in as according to all your device's Authentication Methods.

Does not update your device to add the found persons.


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |
| **Output** |    |    |



## getMeWithContext()

Get all relevant information about yourself, including all persons that are attached to you.

NB: probably need to omit some fields later, but for now it's fine


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |
| **Output** | { authorizations?: { isProjectWide?: boolean, <br />authorizedOperationName?: string, <br />tsFunctionId?: string, <br />tsVariableId?: string, <br />tsInterfaceId?: string, <br />datasetId?: string, <br />authorizedProjectRelativePath?: string, <br />canExecute?: boolean, <br />canWriteCreate?: boolean, <br />canWriteUpdate?: boolean, <br />canWriteDelete?: boolean, <br />canRead?: boolean, <br />canSearch?: boolean, <br /> }[], <br />device: {  }, <br />groups?: {  }[], <br /> }   |    |



## getPublicPerson()

| Input      |    |    |
| ---------- | -- | -- |
| id (optional) | string |  |
| **Output** |    |    |



## getPublicPersons()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** |    |    |



## isPhoneNumber()

TODO: Implement this


| Input      |    |    |
| ---------- | -- | -- |
| phoneNumber | string |  |
| **Output** | {  }   |    |



## loginWithContext()

attaches the `Device` with `authToken` to a `Person` once all required authenticationMethods are provided. If not, it needs to return the required authenticationMethods so the user can attach those to the device until loggin is successful.


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |
| **Output** |    |    |



## loginWithPasswordWithContext()

Login with username and password

1. Adds an username/password combo as auth-method to the device,
2. Checks the persons to match the auth
3. In case of match, moves the method to the person and connects the device


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| username | string |  |,| password | string |  |
| **Output** |    |    |



## logoutWithContext()

Uses cookies (https://serverjs.io/documentation/reply/#cookie-) to logout

Needed for having `authToken` with GET as well in a safe manner (e.g. for images)


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| rememberAuthentication (optional) | boolean |  |
| **Output** |    |    |



## removeDeviceAuthenticationMethodWithContext()

removes an `authenticatedMethod` from `Device`

Usually the authentication methods are an attempt to login into a new account, so if you remove something it doesnt have impact on the accounts you already logged into, because these authentications are not stored on the device but on the person.

We can therefore remove it without much validation


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| method | `AuthenticationMethodMethod` |  |
| **Output** |    |    |



## removePersonAuthenticationMethodWithContext()

removes an `authenticationMethod` from `Person` from currentPerson from authenticated device


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| method | `AuthenticationMethodMethod` |  |
| **Output** |    |    |



## signupWithContext()

Creates a new `Person` for a `Device`. Adds that person to the `Device`.

- Can only be done with at least one authenticationMethod
- Can only be done if authentication is not applied on an existing person already.
- Function is wrappable


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| personData | `SignupPersonData` | Data required for creating a `Person`. Can be filled in by the user partly, but also partly automatically |
| **Output** |    |    |



## signupWithPasswordWithContext()

For now only username/pass is supported due to direct verification

This function makes an authenticationmethod for the device and then signs up by creating a person for it and attaching it to the device.


| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| fullName | string |  |,| username | string |  |,| pictureImage (optional) | `BackendAsset` |  |,| password | string |  |,| repeatPassword | string |  |
| **Output** |    |    |



## switchCurrentPersonWithContext()

| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| newCurentPersonId | string |  |
| **Output** |    |    |



## updateMeWithContext()

| Input      |    |    |
| ---------- | -- | -- |
| functionContext | `FunctionContext` |  |,| details | `PersonProfileDetails` |  |
| **Output** |    |    |



## 🔹 SignupPersonData

Properties: 

 | Name | Type | Description |
|---|---|---|
| authorizations (optional) | array |  |
| credit (optional) | number |  |
| dataEntries (optional) | array |  |
| interestSlugs (optional) | array |  |
| media (optional) | array |  |
| name  | string |  |
| slug  | string |  |
| pictureImage (optional) | object |  |
| groupSlugs (optional) | array |  |
| requiredAuthenticationMethods (optional) | array |  |
| amountAuthenticationMethodsRequired (optional) | number |  |



## 📄 addAuthenticationMethod (exported const)

sends an email or sms, or already confirms in case of emailPassword

core function for `addPersonAuthenticationMethod` and `addDeviceAuthenticatedMethod`


## 📄 addDeviceAuthenticationMethodConfirm (exported const)

adds an `authenticatedMethod` to `Device` after the OTP is correct

For now, only handles methods `phoneNumber` and `email`

TODO: extrahere the core into `addAuthenticationMethodConfirm` and use it in this one and make also `addPersonAuthenticationMethodConfirm`


## 📄 addDeviceAuthenticationMethodWithContext (exported const)

returns new function context with added authenticationmethod


## 📄 addPersonAuthenticationMethodWithContext (exported const)

## 📄 findAuthenticatedPersonWithHandle (exported const)

Check if the handle is already taken by some person in the system


## 📄 findLoggedinPersonsWithContext (exported const)

This finds all persons you should be logged in as according to all your device's Authentication Methods.

Does not update your device to add the found persons.


## 📄 getMeWithContext (exported const)

Get all relevant information about yourself, including all persons that are attached to you.

NB: probably need to omit some fields later, but for now it's fine


## 📄 getPublicPerson (exported const)

## 📄 getPublicPersons (exported const)

## 📄 isPhoneNumber (exported const)

TODO: Implement this


## 📄 loginWithContext (exported const)

attaches the `Device` with `authToken` to a `Person` once all required authenticationMethods are provided. If not, it needs to return the required authenticationMethods so the user can attach those to the device until loggin is successful.


## 📄 loginWithPasswordWithContext (exported const)

Login with username and password

1. Adds an username/password combo as auth-method to the device,
2. Checks the persons to match the auth
3. In case of match, moves the method to the person and connects the device


## 📄 logoutWithContext (exported const)

Uses cookies (https://serverjs.io/documentation/reply/#cookie-) to logout

Needed for having `authToken` with GET as well in a safe manner (e.g. for images)


## 📄 removeDeviceAuthenticationMethodWithContext (exported const)

removes an `authenticatedMethod` from `Device`

Usually the authentication methods are an attempt to login into a new account, so if you remove something it doesnt have impact on the accounts you already logged into, because these authentications are not stored on the device but on the person.

We can therefore remove it without much validation


## 📄 removePersonAuthenticationMethodWithContext (exported const)

removes an `authenticationMethod` from `Person` from currentPerson from authenticated device


## 📄 signupWithContext (exported const)

Creates a new `Person` for a `Device`. Adds that person to the `Device`.

- Can only be done with at least one authenticationMethod
- Can only be done if authentication is not applied on an existing person already.
- Function is wrappable


## 📄 signupWithPasswordWithContext (exported const)

For now only username/pass is supported due to direct verification

This function makes an authenticationmethod for the device and then signs up by creating a person for it and attaching it to the device.


## 📄 switchCurrentPersonWithContext (exported const)

## 📄 updateMeWithContext (exported const)

  </details>

