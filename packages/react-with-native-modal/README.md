# React with native modal

react-with-native-modal (ui-es5 operation)



# Outline

## Docs

- [README](#readme)

## Functions

- [ModalProvider](#ModalProvider)
- [Modal](#Modal)
- [useModal](#useModal)

## Variables

- [ModalContext](#modalcontext)
- [ModalProvider](#modalprovider)
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

## <ModalProvider />

| Input      |    |    |
| ---------- | -- | -- |
| { children } | { children: {  }, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## <Modal />

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## useModal()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { modalContent?: ul / trin / SX.Elemen, <br />handleModal: {  }, <br />showModal: boolean, <br />title?: string, <br /> }   |    |


# Variables

## 📄 ModalContext (exported const)

## 📄 ModalProvider (exported const)

## 📄 useModal (exported const)

