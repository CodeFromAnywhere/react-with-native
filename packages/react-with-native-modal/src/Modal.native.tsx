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
      {children}
      <Modal />
    </Provider>
  );
};

export function Modal() {
  let { modalContent, title, handleModal, showModal } =
    useContext(ModalContext);

  return (
    <RNModal visible={showModal} transparent animationType="slide">
      <Div className="flex flex-1">
        <Div className="flex flex-col flex-1 m-2 p-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          <Div className="flex flex-row justify-between items-center">
            <H2 className="text-2xl font-semibold p-2">{title}</H2>
            <Button
              className="flex items-center justify-end p-4"
              textClassName="font-bold text-2xl"
              onClick={() => handleModal(null)}
            >
              X
            </Button>
          </Div>
          <Div>{modalContent}</Div>
        </Div>
      </Div>
    </RNModal>
  );
}
