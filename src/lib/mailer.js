import nodemailer from "nodemailer";
import { getWelcomeEmail } from "./emailTemplate";

export function sendWelcomeEmail(userEmail, firstName) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Get email content
    const { subject, html } = getWelcomeEmail(firstName);

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject,
      html,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("❌ Email sending failed:", error);
        reject({ success: false, error: "Failed to send email" });
      } else {
        console.log(`✅ Email sent to ${userEmail}`);
        resolve({ success: true, message: "Email sent successfully", info });
      }
    });
  });
}
