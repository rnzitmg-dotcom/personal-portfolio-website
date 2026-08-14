"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";

type ContactResponse = {
  ok: boolean;
  message: string;
  errors?: Record<string, string>;
};

const attempts = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = attempts.get(ip);
  if (!current || current.resetAt < now) {
    attempts.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (current.count >= MAX_ATTEMPTS) return false;
  current.count += 1;
  return true;
}

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactResponse> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please review the highlighted fields.",
      errors: Object.fromEntries(
        parsed.error.issues.map((issue) => [
          String(issue.path[0]),
          issue.message,
        ]),
      ),
    };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerList.get("x-real-ip") ||
    "local";

  if (!checkRateLimit(ip)) {
    return {
      ok: false,
      message: "Too many requests. Please try again later.",
    };
  }

  const {
    EMAIL_USER,
    EMAIL_PASS,
    CONTACT_EMAIL = "digitalgeni65@gmail.com",
  } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    return {
      ok: false,
      message:
        "Email is not configured yet. Please add EMAIL_USER and EMAIL_PASS in the environment.",
    };
  }

  const data = parsed.data;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"ClickForge Website" <${EMAIL_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: data.email,
      subject: `New consultation request from ${data.fullName}`,
      text: [
        `Full Name: ${data.fullName}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Company: ${data.company || "Not provided"}`,
        `Service: ${data.service}`,
        `Budget: ${data.budget}`,
        "",
        "Message:",
        data.message,
      ].join("\n"),
      html: `
        <h2>New ClickForge Consultation Request</h2>
        <p><strong>Full Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
        <p><strong>Service:</strong> ${data.service}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replaceAll("\n", "<br />")}</p>
      `,
    });

    return {
      ok: true,
      message: "Thanks. Your consultation request has been sent successfully.",
    };
  } catch {
    return {
      ok: false,
      message:
        "The message could not be sent right now. Please try again or email digitalgeni65@gmail.com directly.",
    };
  }
}
