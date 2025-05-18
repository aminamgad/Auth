import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 465, // 465
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from : `Auth System`,
    to,
    subject,
    html
  }

  await transporter.sendMail(mailOptions)
};
