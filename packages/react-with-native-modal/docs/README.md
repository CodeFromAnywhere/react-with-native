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
