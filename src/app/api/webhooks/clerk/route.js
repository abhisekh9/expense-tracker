import { NextResponse } from "next/server";
import { sendWelcomeEmail } from "@/lib/mailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { type, data } = body;

    if (type !== "user.created") {
      return NextResponse.json({ error: "Invalid event type" }, { status: 400 });
    }

    const userEmail = data.email_addresses?.[0]?.email_address;
    const firstName = data.first_name || "User";

    if (!userEmail) {
      return NextResponse.json({ error: "Invalid email data" }, { status: 400 });
    }

    console.log(`📩 Sending email to: ${userEmail}`);

    const result = await sendWelcomeEmail(userEmail, firstName);

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ message: "Welcome email sent" }, { status: 200 });
  } catch (error) {
    console.error("❌ Server error:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}
