import { Handlers } from "$fresh/server.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";
import formData from "npm:form-data";
import Mailgun from "mailgun.js";
const { SMTP_USER, MAILGUN_API_KEY, MAILGUN_DOMAIN } = Deno.env.toObject();

export const handler: Handlers<string | null> = {
  async POST(req, _ctx) {
    const mailgun = new Mailgun(formData);

    const client = mailgun.client({ username: "api", key: MAILGUN_API_KEY });
    const { sender, message } = await req.json();

    const messageData = {
      from: sender, // sender address
      to: SMTP_USER, // list of receivers
      subject: `[Portfolio] - New message from ${sender}`,
      text: message,
    };

    client.messages
      .create(MAILGUN_DOMAIN, messageData)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    return new Response("Email sent!");
  },
};
