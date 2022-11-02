# React with native modal

react-with-native-modal (ui-es5 operation)



# Outline

## Docs

- [README](#readme)

## Functions

- [ModalProvider](#ModalProvider)
- [Modal](#Modal)
- [useModalState](#useModalState)
- [useModal](#useModal)

## Variables

- [ModalContext](#modalcontext)
- [ModalProvider](#modalprovider)
- [{ Provider }](#provider)
- [useModalState](#usemodalstate)
- [useModal](#usemodal)



# Docs

## README

### Modal

#### `NB: Experimental package!`

#### Setup

1. Install

```bash
yarn add react-with-native-modal
```

2. Wrap your whole app in the ModalProvider

```tsx
import { ModalProvider } from "react-with-native-modal";

// and

<ModalProvider>
  <YourApp />
</ModalProvider>;
```


#### Usage

Whenever you need a modal, use this hook:

```tsx
import { useModal } from "react-with-native-modal";

// and

const { handleModal } = useModal();

// and then

<Button onClick={() => handleModal(Element | string)}>Show a modal</Button>;
```


# Functions

## ModalProvider

### Parameters (1)

#### Parameter 1: { children }: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| children  | object |  |



## Modal

## useModalState

### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| showModal  | boolean |  |
| handleModal  | object |  |
| modalContent (optional) | string |  |
| title  | string |  |



## useModal

### Returns: object

Properties: 

 | Name | Type | Description |
|---|---|---|
| modalContent (optional) | string |  |
| handleModal  | object |  |
| showModal  | boolean |  |
| title (optional) | string |  |


# Variables

## ModalContext (exported const)

## ModalProvider (exported const)

## { Provider } (unexported const)

## useModalState (unexported const)

## useModal (exported const)

