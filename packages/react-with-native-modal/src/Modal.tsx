import * as React from "react";
import { useState, useContext } from "react";
import { Div, Button } from "react-with-native";

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

export function Modal() {
  const [inside, setInside] = useState(false);
  let { modalContent, title, handleModal, showModal } =
    useContext(ModalContext);

  if (showModal) {
    return (
      <>
        <Div
          onClick={() => !inside && handleModal(null)}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
        >
          <Div
            onMouseEnter={() => setInside(true)}
            onMouseLeave={() => setInside(false)}
            className="relative w-auto max-w-3xl mx-auto my-6 lg:w-10/12 lg:h-10/12"
          >
            {/*content*/}
            <Div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              {/*header*/}
              <Div className="flex items-start justify-between p-5 border-b border-gray-200 border-solid rounded-t">
                <h3 className="text-3xl font-semibold">{title}</h3>
                <Button
                  className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                  onClick={() => handleModal(null)}
                >
                  <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                    x
                  </span>
                </Button>
              </Div>
              {/*body*/}
              <Div className="relative flex-auto p-6">
                <p className="my-4 text-lg leading-relaxed text-gray-500">
                  {modalContent}
                </p>
              </Div>
              {/*footer*/}
              <Div className="flex items-center justify-end p-6 border-t border-gray-200 border-solid">
                <Button
                  className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                  onClick={() => handleModal(null)}
                >
                  Close...
                </Button>
              </Div>
            </Div>
          </Div>
        </Div>
        <Div className="fixed inset-0 z-40 bg-black opacity-50"></Div>
      </>
    );
  } else return null;
}
