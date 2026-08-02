import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/validations";
import { CLINIC_NAME, CLINIC_EMAIL } from "@/lib/constants";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Validate payload
    const validationResult = contactSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data", details: validationResult.error.flatten() },
        { status: 400 }
      );
    }

    const { name, phone, email, message } = validationResult.data;

    // 2. Configure Email Transporter using Environment Variables
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER; // e.g. your-email@gmail.com
    const smtpPass = process.env.SMTP_PASS; // e.g. App Password
    const receiverEmail = process.env.RECEIVER_EMAIL || CLINIC_EMAIL || smtpUser;

    // Log for local debug
    console.log("📨 New Form Submission Received:", { name, phone, email, message });

    // If SMTP credentials are configured in .env.local, send real email
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ede5d8; border-radius: 12px; padding: 24px; background-color: #faf7f2;">
          <h2 style="color: #4a7d67; margin-top: 0;">🏥 New Consultation Request — ${CLINIC_NAME}</h2>
          <p style="font-size: 14px; color: #555552;">You have received a new inquiry from your website contact popup form.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
            <tr style="border-bottom: 1px solid #ede5d8;">
              <td style="padding: 12px 16px; font-weight: bold; width: 30%; color: #1c1c1a;">Full Name:</td>
              <td style="padding: 12px 16px; color: #2e2e2c;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #ede5d8;">
              <td style="padding: 12px 16px; font-weight: bold; color: #1c1c1a;">Phone Number:</td>
              <td style="padding: 12px 16px; color: #2e2e2c;"><a href="tel:${phone}" style="color: #4a7d67; font-weight: bold;">${phone}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #ede5d8;">
              <td style="padding: 12px 16px; font-weight: bold; color: #1c1c1a;">Email:</td>
              <td style="padding: 12px 16px; color: #2e2e2c;">${email || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #1c1c1a; vertical-align: top;">Message:</td>
              <td style="padding: 12px 16px; color: #2e2e2c; line-height: 1.5;">${message || "No message provided"}</td>
            </tr>
          </table>

          <p style="margin-top: 20px; font-size: 12px; color: #8a8a85; text-align: center;">
            Sent automatically from ${CLINIC_NAME} website.
          </p>
        </div>
      `;

      await transporter.sendMail({
        from: `"${CLINIC_NAME} Website" <${smtpUser}>`,
        to: receiverEmail,
        replyTo: email || undefined,
        subject: `🚨 New Lead: ${name} (${phone})`,
        html: htmlContent,
      });

      console.log("✅ Email sent successfully to:", receiverEmail);
    } else {
      console.warn("⚠️ SMTP credentials (SMTP_USER & SMTP_PASS) not set in .env.local. Email was not dispatched.");
    }

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("❌ Contact API Error:", error);
    return NextResponse.json({ success: false, error: "Failed to process form submission" }, { status: 500 });
  }
}

