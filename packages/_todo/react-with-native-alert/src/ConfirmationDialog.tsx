import React from "react";
import Button from "../components/Button";

type ConfirmConfig = {
  title?: string;
  message?: string;
  confirmText?: string;
};
type DialogConfig = ConfirmConfig & {
  actionCallback?: (confirm: boolean) => void;
};

export const ConfirmationDialogContext = React.createContext<{
  openDialog?: ({
    title,
    message,
    actionCallback,
    confirmText,
  }: DialogConfig) => void;
}>({});

export const ConfirmationDialog = ({
  open,
  title,
  message,
  onConfirm,
  confirmText,
  onDismiss,
}: {
  open: boolean;
  title?: string;
  message?: string;
  confirmText?: string;
  onConfirm: () => void;
  onDismiss: () => void;
}) => {
  //
  return open ? (
    <div
      className={`fixed z-50 flex justify-center items-center top-0 bottom-0 left-0 right-0 scrollbar-hide`}
    >
      <div
        className={`z-50 px-4 w-96 shadow-2xl py-10 flex flex-col justify-around items-center bg-white rounded-xl`}
      >
        <div>
          <p>
            <strong>{title}</strong>
          </p>
        </div>
        <div className={`py-10`}>
          <p>{message}</p>
        </div>

        <div className="flex w-full px-10">
          <Button
            title={confirmText || "Ok"}
            onClick={onConfirm}
            color="red"
            extraClassName={`mr-4 w-full`}
          />
          <Button
            title="Cancel"
            onClick={onDismiss}
            color="green"
            extraClassName={`ml-4 w-full`}
          />
        </div>
      </div>
      <div
        className={`fixed z-40 flex top-0 left-0 right-0 bottom-0 backdrop-blur-sm flex-1 bg-gray-300 bg-opacity-60`}
        onClick={onDismiss}
      >
        &nbsp;
      </div>
    </div>
  ) : null;
};

export const ConfirmationDialogProvider = ({ children }: { children: any }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogConfig, setDialogConfig] = React.useState<DialogConfig>({});

  const openDialog = ({
    title,
    message,
    actionCallback,
    confirmText,
  }: DialogConfig) => {
    setDialogOpen(true);
    setDialogConfig({ title, message, actionCallback, confirmText });
    document.body.classList.add("stop-scrolling");
  };

  const resetDialog = () => {
    setDialogOpen(false);
    setDialogConfig({});
    document.body.classList.remove("stop-scrolling");
  };

  const onConfirm = () => {
    resetDialog();
    dialogConfig.actionCallback?.(true);
  };

  const onDismiss = () => {
    resetDialog();
    dialogConfig.actionCallback?.(false);
  };

  return (
    <ConfirmationDialogContext.Provider value={{ openDialog }}>
      {children}

      <ConfirmationDialog
        open={dialogOpen}
        title={dialogConfig.title}
        message={dialogConfig.message}
        onConfirm={onConfirm}
        onDismiss={onDismiss}
        confirmText={dialogConfig.confirmText}
      />
    </ConfirmationDialogContext.Provider>
  );
};

export const useConfirmationDialog = () => {
  const { openDialog } = React.useContext(ConfirmationDialogContext);

  const getConfirmation = (options: DialogConfig) =>
    new Promise((res) => {
      openDialog?.({ actionCallback: res, ...options });
    });

  return { getConfirmation };
};
