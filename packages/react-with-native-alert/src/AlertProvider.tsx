import { useState } from "react";
import { AlertStatic } from "react-native";
import { AlertContext } from "./Alert";
import { AlertState } from "./types";
import { Dialog as HeadlessUiDialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Div, P } from "react-with-native";

export const AlertProvider = ({ children }: { children: any }) => {
  // console.log("normal alertprovider");
  const [alertState, setAlertState] = useState<AlertState[]>([]);

  const firstAlert: AlertState | undefined = alertState[0];

  // console.log({ firstAlert, alertState });
  const alert: AlertStatic["alert"] = (title, message, buttons, options) => {
    const newState = { title, message, buttons, options };
    const newAlertState = alertState.concat([newState]);

    // console.log("push alert state", { newState, alertState, newAlertState });
    setAlertState(newAlertState);
  };

  const renderAlert = (firstAlert: AlertState | undefined) => {
    if (!firstAlert) {
      // console.log("HMMMM");
      return null;
    }

    // console.log("Should render alert");

    const { title, buttons, message, options } = firstAlert;

    const value = undefined; //TODO: make it possible to fill in value here (prompt-alert)

    return (
      <div className="absolute w-screen h-screen inset-0">
        <Transition appear show={true} as={Fragment}>
          <HeadlessUiDialog
            as="div"
            className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm"
            onClose={() => {
              if (options?.cancelable === false) return;

              options?.onDismiss?.();

              setAlertState(alertState.slice(1));
            }}
          >
            <div className="min-h-screen px-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <HeadlessUiDialog.Overlay className="fixed inset-0" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="inline-block h-screen align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Div
                  className={
                    "inline-block w-full max-w-lg p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
                  }
                >
                  {title ? (
                    <HeadlessUiDialog.Title
                      as="h3"
                      className={"text-lg font-medium leading-6 text-gray-900"}
                    >
                      {title}
                    </HeadlessUiDialog.Title>
                  ) : null}
                  <P className="py-6">{message}</P>
                  <Div className="flex flex-row gap-4">
                    {buttons?.map((button, index) => {
                      const buttonColor =
                        button.style === "cancel"
                          ? "bg-gray-300 hover:bg-gray-400"
                          : button.style === "destructive"
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-blue-500 hover:bg-blue-600";
                      return (
                        <Div
                          onClick={() => {
                            button.onPress?.(value);
                            setAlertState(alertState.slice(1));
                          }}
                          key={`button${index}`}
                          className={`cursor-pointer py-2 ${buttonColor} rounded-md flex flex-1 items-center justify-center`}
                        >
                          {button.text}
                        </Div>
                      );
                    })}
                  </Div>
                </Div>
              </Transition.Child>
            </div>
          </HeadlessUiDialog>
        </Transition>
      </div>
    );
  };

  return (
    <AlertContext.Provider value={alert}>
      {renderAlert(firstAlert)}
      {children}
    </AlertContext.Provider>
  );
};
