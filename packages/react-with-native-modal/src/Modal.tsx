import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

type ModalContent = Element | string | null;
type ModalType = {
  modalContent: ModalContent;
  handleModal: (newModal: ModalContent) => void;
  showModal: boolean;
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
  const [modalContent, setModalContent] = useState<ModalContent>(
    "I'm the Modal Content"
  );

  const handleModal = (content: ModalContent = null) => {
    setShowModal(!showModal);
    if (content) {
      setModalContent(content);
    }
  };

  return { showModal, handleModal, modalContent };
};

export const ModalProvider = ({ children }: { children: any }) => {
  let { showModal, handleModal, modalContent } = useModalState();
  return (
    <Provider value={{ showModal, handleModal, modalContent }}>
      <Modal />
      {children}
    </Provider>
  );
};

export default function Modal() {
  let { modalContent, handleModal, showModal } = useContext(ModalContext);

  if (showModal) {
    return ReactDOM.createPortal(
      <div
        className="fixed top-0 left-0 flex items-center justify-center w-full h-screen"
        style={{ background: "rgba(0,0,0,0.8)" }}
      >
        <div className="relative flex flex-col items-start p-5 text-lg text-gray-800 bg-white rounded shadow-lg">
          <button
            className="absolute top-0 right-0 self-end w-8 h-8 mb-3 -mt-12 font-bold text-red-700 bg-white rounded-full"
            onClick={() => handleModal(null)}
          >
            &times;
          </button>
          <p>{modalContent}</p>
        </div>
      </div>,
      document.querySelector("#modal")!
    );
  } else return null;
  //   return (
  //     <>
  //       <button
  //         className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-lg focus:outline-none"
  //         type="button"
  //         onClick={() => handleModal(true)}
  //       >
  //         Open regular modal
  //       </button>
  //       {showModal ? (
  //         <>
  //           <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
  //             <div className="relative w-auto max-w-3xl mx-auto my-6">
  //               {/*content*/}
  //               <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
  //                 {/*header*/}
  //                 <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
  //                   <h3 className="text-3xl font-semibold">Modal Title</h3>
  //                   <button
  //                     className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
  //                     onClick={() => setShowModal(false)}
  //                   >
  //                     <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
  //                       ×
  //                     </span>
  //                   </button>
  //                 </div>
  //                 {/*body*/}
  //                 <div className="relative flex-auto p-6">
  //                   <p className="my-4 text-lg leading-relaxed text-blueGray-500">
  //                     I always felt like I could do anything. That’s the main
  //                     thing people are controlled by! Thoughts- their perception
  //                     of themselves! They're slowed down by their perception of
  //                     themselves. If you're taught you can’t do anything, you
  //                     won’t do anything. I was taught I could do everything.
  //                   </p>
  //                 </div>
  //                 {/*footer*/}
  //                 <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-blueGray-200">
  //                   <button
  //                     className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
  //                     type="button"
  //                     onClick={() => setShowModal(false)}
  //                   >
  //                     Close
  //                   </button>
  //                   <button
  //                     className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
  //                     type="button"
  //                     onClick={() => setShowModal(false)}
  //                   >
  //                     Save Changes
  //                   </button>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //           <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
  //         </>
  //       ) : null}
  //     </>
  //   );
}
