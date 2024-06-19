import { IS_BROWSER } from "https://deno.land/x/fresh@1.6.8/runtime.ts";
import { DialogProps, withDialog } from "../components/withDialog.tsx";
import IoPaperPlaneOutline from "react-icons/io5/IoPaperPlaneOutline.ts";
import { FunctionComponent } from "preact";
import { SendMailForm } from "./SendMailForm.tsx";

const SendMailButton: FunctionComponent<DialogProps> = ({ open }) => {
  return !IS_BROWSER ? (
    <></>
  ) : (
    <button
      className="fixed right-5 bottom-5 rounded-full shadow-lg flex items-center bg-gradient-to-br from-green-400 to-blue-500"
      onClick={open}
    >
      <IoPaperPlaneOutline className="m-2 w-8 h-8 text-white" />
    </button>
  );
};

export const SendMailComponent = withDialog(SendMailForm, SendMailButton);
