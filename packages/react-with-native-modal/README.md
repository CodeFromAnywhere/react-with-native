# react-with-native-modal

### Setup

Install

```
yarn add react-with-native-modal

# or

npm install react-with-native-modal
```

### Wrap your whole app in the ModalProvider

```
import { ModalProvider } from "react-with-native-modal";

# and

<ModalProvider><YourApp /></ModalProvider>
```

### Whenever you need a modal, use this hook:

```
import { useModal } from "react-with-native-modal";

# and

const { handleModal } = useModal();

# and then

<button onClick={() => handleModal(Element | string)}>Show a modal</button>
```
