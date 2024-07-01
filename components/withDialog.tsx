import { useState, useRef } from "preact/hooks";
import { FunctionComponent } from "preact";
import IoClose from "react-icons/io5/IoClose.ts";
export interface DialogProps {
  open: () => void;
  close: () => void;
}

export const withDialog = (
  WrappedComponent: FunctionComponent<DialogProps>,
  TriggerComponent: FunctionComponent<DialogProps>
) => {
  // deno-lint-ignore no-explicit-any
  return (props: any) => {
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const [open, setOpen] = useState(false);

    const closeDialog = () => {
      dialogRef.current?.close();
      setOpen(false);
      document.body.style.overflow = "";
    };

    const openDialog = () => {
      setOpen(true);
      document.body.style.overflow = "hidden";
    };

    return (
      <>
        <dialog ref={dialogRef} open={open} className="relative z-10">
          <div className="fixed transform inset-0 bg-gray-500 bg-opacity-75" />
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full  justify-center sm:p-4 text-center sm:items-center">
              <button
                className="absolute top-4 sm:top-2 right-2 z-10 flex items-center justify-center sm:text-white"
                onClick={closeDialog}
              >
                <IoClose className="w-8 h-8" />
                <span className="sr-only">Close</span>
              </button>
              <div className="relative transform overflow-hidden sm:rounded-lg bg-white text-left w-full sm:w-auto shadow-xl">
                <WrappedComponent
                  {...props}
                  open={openDialog}
                  close={closeDialog}
                />
              </div>
            </div>
          </div>
        </dialog>
        <TriggerComponent {...props} open={openDialog} />
      </>
    );
  };
};
