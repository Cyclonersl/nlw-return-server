import { MailAdapter, SendMailData } from "../mail-adapter";

import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "897be8aa174593",
    pass: "b299b10ed477b4",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Adriano Odorizzi <adriano.rsl@gmail.com>",
      subject,
      html: body,
    });
  }
}
