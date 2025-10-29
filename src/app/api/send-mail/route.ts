import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as {
      name: string;
      email: string;
      message: string;
    };

    console.log("Incoming email data:", { name, email, message });

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;

    if (!user || !pass) {
      throw new Error("Missing EMAIL_USER or EMAIL_PASS environment variable");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const mailOptions = {
      from: user,
      to: user,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Mail sent successfully:", info.messageId);

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
