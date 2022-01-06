///// doesnt work (module not found) <reference path="../node_modules/@types/react-native/index.d.ts" />
import type { AlertStatic } from "react-native";
import Portal from "./Portal";
import { Dialog as HeadlessUiDialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Div, P } from "react-with-native";

type Parameters<T> = T extends (...args: infer T) => any ? T : never;

type AlertPropsArray = Parameters<AlertStatic["alert"]>;

export const Alert = ({
  props: [title, message, buttons, options],
}: {
  props: AlertPropsArray;
}) => {
  return (
    <div id={"__alertprovider"}>
      <Transition appear show={true} as={Fragment}>
        <HeadlessUiDialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => null}
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
                <P>{message}</P>
                {buttons?.map((button) => {
                  return <Div>{button.text}</Div>;
                })}
              </Div>
            </Transition.Child>
          </div>
        </HeadlessUiDialog>
      </Transition>
    </div>
  );
};

export const alert: AlertStatic["alert"] = (...args) => {
  return (
    <Portal>
      <Alert props={args} />
    </Portal>
  );
};

export default alert;
