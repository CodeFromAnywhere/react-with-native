import * as React from "react";
import { useState, useContext } from "react";
import { Div, Button, P, H2, Span } from "react-with-native";
import { Modal as RNModal } from "react-native";

type HandleModal = (newModal: ModalContent, title?: string) => void;
type ModalContent = JSX.Element | string | null;

type ModalType = {
  modalContent: ModalContent;
  handleModal: HandleModal;
  showModal: boolean;
  title?: string;
};

export const ModalContext = React.createContext<ModalType>({
  handleModal: () => null,
  modalContent: null,
  showModal: false,
});

const { Provider } = ModalContext;

export const useModal = () => useContext(ModalContext);

const useModalState = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>(null);
  const [title, setTitle] = useState("");

  const handleModal: HandleModal = (
    content: ModalContent = null,
    title?: string
  ) => {
    setShowModal(!showModal);
    if (content) {
      setModalContent(content);
    }
    if (title) {
      setTitle(title);
    }
  };

  return { showModal, handleModal, modalContent, title };
};

export const ModalProvider = ({ children }: { children: any }) => {
  let { showModal, handleModal, modalContent, title } = useModalState();
  return (
    <Provider value={{ showModal, handleModal, modalContent, title }}>
      <Modal />
      {children}
    </Provider>
  );
};

export default function Modal() {
  let { modalContent, title, handleModal, showModal } =
    useContext(ModalContext);

  return (
    <RNModal visible={showModal} transparent animationType="slide">
      <Div className="flex-1 w-full justify-center items-center">
        <Div className="p-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          <H2 className="text-2xl font-semibold p-2">{title}</H2>
          <Div>{modalContent}</Div>
          <Button
            className="flex items-center justify-end p-5 border-t border-gray-200 border-solid rounded-b"
            onClick={() => handleModal(null)}
          >
            Close
          </Button>
        </Div>
      </Div>
    </RNModal>
  );
}
