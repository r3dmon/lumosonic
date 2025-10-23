import { api, APIError } from "encore.dev/api";
import { secret } from "encore.dev/config";

const resendApiKey = secret("ResendAPIKey");

interface ContactFormParams {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
}

interface ContactFormResponse {
  success: boolean;
  message: string;
}

export const submit = api<ContactFormParams, ContactFormResponse>(
  { expose: true, method: "POST", path: "/api/contact" },
  async (params) => {
    const apiKey = resendApiKey();
    if (!apiKey) {
      throw APIError.unavailable("Email service is not configured. Please contact support.");
    }

    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: "info@lumosonic.nl",
          subject: `New Contact Form Submission from ${params.firstName} ${params.lastName}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${params.firstName} ${params.lastName}</p>
            <p><strong>Email:</strong> ${params.email}</p>
            ${params.company ? `<p><strong>Company:</strong> ${params.company}</p>` : ""}
            <p><strong>Message:</strong></p>
            <p>${params.message.replace(/\n/g, "<br>")}</p>
          `,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: "Unknown error" }));
        console.error("Resend API error:", errorData);
        
        if (response.status === 401 || response.status === 403) {
          throw APIError.unavailable("Email service authentication failed. Please contact support.");
        }
        
        throw APIError.internal("Failed to send email. Please try again or contact us directly.");
      }

      const data = await response.json();
      console.log("Email sent successfully:", data);

      return {
        success: true,
        message: "Thank you for reaching out. We'll get back to you soon!",
      };
    } catch (error) {
      if (error instanceof APIError) {
        throw error;
      }
      
      console.error("Error sending email:", error);
      throw APIError.internal("Unable to send message at this time. Please try again later or email us directly at info@lumosonic.nl");
    }
  }
);
