import { Handlers } from "$fresh/server.ts";
import { SmtpClient } from "https://deno.land/x/smtp@v0.7.0/mod.ts";
import "https://deno.land/x/dotenv@v3.2.2/load.ts";
const { SMTP_USER, SMTP_PASS, SMTP_HOST } = Deno.env.toObject();

export const handler: Handlers<string | null> = {
  async POST(req, _ctx) {
    const client = new SmtpClient();
    await client.connectTLS({
      hostname: SMTP_HOST,
      port: 465,
      username: SMTP_USER,
      password: SMTP_PASS,
    });

    const { sender, message } = await req.json();

    await client.send({
      from: sender, // sender address
      to: SMTP_USER, // list of receivers
      subject: `[Portfolio] - New message from ${sender}`,
      content: message,
    });
    await client.close();

    return new Response();
  },
};
