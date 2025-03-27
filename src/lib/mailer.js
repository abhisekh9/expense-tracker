import nodemailer from "nodemailer";
import { getWelcomeEmail } from "./emailTemplate";

export async function sendWelcomeEmail(userEmail, firstName) {
  try {
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

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${userEmail}`);
    return { success: true, message: "Email sent successfully" };
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    return { success: false, error: "Failed to send email" };
  }
}
