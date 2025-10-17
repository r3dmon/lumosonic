import { api } from "encore.dev/api";

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
    console.log("Contact form submission received:", {
      name: `${params.firstName} ${params.lastName}`,
      email: params.email,
      company: params.company || "N/A",
      message: params.message,
    });

    return {
      success: true,
      message: "Thank you for reaching out. We'll get back to you soon!",
    };
  }
);
