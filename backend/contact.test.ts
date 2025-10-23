import { describe, it, expect, beforeEach, vi } from "vitest";
import { submit } from "./contact";

global.fetch = vi.fn();

describe("Contact Form", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should send email successfully", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: "test-email-id" }),
    });

    const result = await submit({
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      company: "Test Corp",
      message: "Test message",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Thank you for reaching out");
    expect(global.fetch).toHaveBeenCalledWith(
      "https://api.resend.com/emails",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          "Content-Type": "application/json",
        }),
      })
    );
  });

  it("should handle missing company field", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ id: "test-email-id" }),
    });

    const result = await submit({
      firstName: "Jane",
      lastName: "Smith",
      email: "jane@example.com",
      message: "Another test message",
    });

    expect(result.success).toBe(true);
  });

  it("should throw error when API key is not configured", async () => {
    await expect(
      submit({
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        message: "Test",
      })
    ).rejects.toThrow();
  });

  it("should handle API authentication errors with user-friendly message", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
      status: 401,
      json: async () => ({ message: "Invalid API key" }),
    });

    await expect(
      submit({
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        message: "Test",
      })
    ).rejects.toThrow("Email service authentication failed");
  });

  it("should handle general API errors with user-friendly message", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      ok: false,
      status: 500,
      json: async () => ({ message: "Internal server error" }),
    });

    await expect(
      submit({
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        message: "Test",
      })
    ).rejects.toThrow("Failed to send email");
  });

  it("should handle network errors with fallback message", async () => {
    (global.fetch as any).mockRejectedValueOnce(new Error("Network error"));

    await expect(
      submit({
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        message: "Test",
      })
    ).rejects.toThrow("Unable to send message");
  });
});
