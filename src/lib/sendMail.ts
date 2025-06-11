import nodemailer from 'nodemailer';
import { mailConfig } from './mailConfig';

export async function sendMail({ to, subject, html, replyTo }: { to: string; subject: string; html: string; replyTo?: string }) {
  const transporter = nodemailer.createTransport(mailConfig);
  return transporter.sendMail({
    from: mailConfig.auth.user,
    to,
    subject,
    html,
    replyTo,
  });
}
