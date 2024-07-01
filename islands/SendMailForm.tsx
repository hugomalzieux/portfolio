import { IS_BROWSER } from "$fresh/runtime.ts";
import { DialogProps } from "../components/withDialog.tsx";
import { Button } from "../components/Button.tsx";
import { FunctionComponent } from "preact";
import { useRef, useState } from "preact/hooks";

const MAIL_REGEXP = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$";

export const SendMailForm: FunctionComponent<DialogProps> = ({ close }) => {
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState(false);
  const mailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  const sendMail = async () => {
    setSending(true);
    setFormError(false);

    const mailValue = mailRef?.current?.value.trim();
    const messageValue = messageRef?.current?.value.trim();

    const isFormValid =
      !!mailValue?.length &&
      !!messageValue?.length &&
      new RegExp(MAIL_REGEXP).test(mailValue) &&
      messageValue.length < 500;

    if (isFormValid) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sender: mailValue,
          message: messageValue,
        }),
      };
      await fetch("/api/mail", requestOptions);
      close();
      if (mailRef.current && messageRef.current) {
        mailRef.current.value = "";
        messageRef.current.value = "";
      }
    } else {
      setFormError(true);
    }
    setSending(false);
  };

  return !IS_BROWSER ? (
    <></>
  ) : (
    <div className="flex flex-col m-4 gap-4">
      <h3 className="text-lg font-bold">Contact &#128236;</h3>
      <p className="text-sm font-medium ">
        Leave me a message if you want to contact, I will be glad to have a chat
        with you
      </p>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        ref={mailRef}
        title="mail"
        type="mail"
        placeholder="john@doe.fr"
      />

      <textarea
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        ref={messageRef}
        title="message"
        placeholder="Hello, my name is John ..."
        max="300"
      />
      {formError && (
        <div className={`flex flex-col`}>
          <span className={`text-sm font-semibold text-red-700`}>
            Something's wrong:
          </span>
          <ul className={`list-disc text-xs text-red-700 flex flex-col pl-4`}>
            <li>Make sure your email address is correct.</li>
            <li>Fields have to be fields.</li>
            <li>Your message have to be less than 500 characters.</li>
          </ul>
        </div>
      )}
      <Button
        class="flex items-center gap-2 self-end"
        disabled={sending}
        onClick={sendMail}
      >
        Send
        {sending && (
          <div
            class="animate-spin inline-block size-4 w-4 h-4 me-3 text-white border-[3px] border-current border-t-transparent rounded-full"
            aria-label="loading"
          />
        )}
      </Button>
    </div>
  );
};
