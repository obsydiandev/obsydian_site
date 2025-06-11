// Konfiguracja serwera SMTP dla nodemailer
export const mailConfig = {
  host: process.env.SMTP_HOST || 'smtp.example.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // true dla 465, false dla innych portów
  auth: {
    user: process.env.SMTP_USER || 'user@example.com',
    pass: process.env.SMTP_PASS || 'haslo',
  },
};
