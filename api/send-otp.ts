import { VercelRequest, VercelResponse } from "@vercel/node";
import User from "../models/User.js";
import OTPModel from "../models/OTP.js";
import { generateOTP } from "../utils/generateOTP.js";
import { sendOTPEmail } from "../utils/sendEmail.js";
import dbConnect from "../utils/db.js";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await dbConnect();

    const { email, name, phone, company, message } = req.body;

    if (!email || !name || !phone) {
      return res.status(400).json({ message: "Email, name, and phone are required" });
    }

    const normalizedEmail = email.toLowerCase();

    let user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      user = new User({
        email: normalizedEmail,
        name,
        phone,
        company,
        message,
      });
      await user.save();
    }

    const otp = generateOTP();

    const otpRecord = new OTPModel({
      email: normalizedEmail,
      otp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000), // expires in 10 minutes
    });

    await otpRecord.save();

    await sendOTPEmail(normalizedEmail, otp);

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error("Error in send-otp:", err);
    res.status(500).json({ message: "Error sending OTP" });
  }
}
