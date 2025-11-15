import { resendClient } from "../lib/resend.js"
import { createWelcomeEmailTemplate } from "./emailTemplates.js";
import { emailSender } from "../lib/resend.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
    const {data, error} = await resendClient.emails.send({
        from: `${emailSender.name} <${emailSender.email}>`,
        to: email,
        subject: "Welcome to Pingify!",
        html: createWelcomeEmailTemplate(name, clientURL),  
    });

    if (error) {
        console.error("Error sending welcome email:", error);
        throw new Error("Failed to send welcome email");
    }

    console.log("Welcome email sent successfully:", data);
}
        