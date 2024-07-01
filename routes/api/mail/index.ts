import { Handlers } from "$fresh/server.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";
import Mailgun from "https://deno.land/x/mailgun@v1.1.0/index.ts";

const { SMTP_USER, MAILGUN_API_KEY, MAILGUN_DOMAIN } = Deno.env.toObject();

export const handler: Handlers<string | null> = {
  async POST(req, _ctx) {
    const mailgun = new Mailgun({
      key: MAILGUN_API_KEY,
      domain: MAILGUN_DOMAIN,
    });

    const { sender, message } = await req.json();
    return await mailgun.send({
      from: sender, // sender address
      to: SMTP_USER, // list of receivers
      subject: `[Portfolio] - New message from ${sender}`,
      text: message,
    });
  },
};