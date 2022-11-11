# React with native modal

react-with-native-modal (`OperationClassification` ui-es5)



# Docs

<details><summary>README.md</summary>
    
  # Modal

## `NB: Experimental package!`

## Setup

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

## Usage

Whenever you need a modal, use this hook:

```tsx
import { useModal } from "react-with-native-modal";

// and

const { handleModal } = useModal();

// and then

<Button onClick={() => handleModal(Element | string)}>Show a modal</Button>;
```

  </details>

# Api reference

## `<ModalProvider />`

| Input      |    |    |
| ---------- | -- | -- |
| { children } | { children: {  }, <br /> } |  |
| **Output** | `JSX.Element`   |    |



## 📄 ModalProvider (exported const)

## useModal()

| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | { modalContent?: ul / trin / SX.Elemen, <br />handleModal: {  }, <br />showModal: boolean, <br />title?: string, <br /> }   |    |



## 📄 useModal (exported const)

# Internal

<details><summary>Show internal (2)</summary>
    
  # `<Modal />`




| Input      |    |    |
| ---------- | -- | -- |
| - | | |
| **Output** | `JSX.Element`   |    |



## 📄 ModalContext (exported const)

  </details>

