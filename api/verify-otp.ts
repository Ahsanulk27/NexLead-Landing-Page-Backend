import { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";
import User from "../models/User.js";
import OTPModel from "../models/OTP.js";
import dbConnect from "../utils/db.js";
import qs from "qs";

const GOOGLE_SHEET_URL = process.env.GOOGLE_SHEET_WEBHOOK_URL;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    await dbConnect();
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }

    const normalizedEmail = email.toLowerCase();

    console.log("Verifying OTP for email:", normalizedEmail);
    console.log("OTP provided:", otp);

    const otpRecord = await OTPModel.findOne({
      email: normalizedEmail,
      otp,
      expiresAt: { $gt: new Date() },
    });

    if (!otpRecord) {
      const expiredOTP = await OTPModel.findOne({
        email: normalizedEmail,
        otp,
      });

      if (expiredOTP) {
        return res
          .status(400)
          .json({ message: "OTP has expired. Please request a new one." });
      }

      return res.status(400).json({ message: "Invalid OTP" });
    }

    const user = await User.findOne({ email: normalizedEmail });

    if (user) {
      user.isVerified = true;
      await user.save();
      console.log("✅ User verified:", user.email);

      // ✅ Send to Google Sheets
      try {
        if (!GOOGLE_SHEET_URL) {
          console.error("❌ GOOGLE_SHEET_URL is not set");
          return res
            .status(500)
            .json({ message: "Google Sheet URL is not configured" });
        }

        const formData = qs.stringify({
          name: user.name || "",
          email: user.email,
          phone: user.phone || "",
          company: user.company || "",
          message: user.message || "",
        });

        await axios.post(GOOGLE_SHEET_URL, formData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });

        console.log("✅ Data sent to Google Sheets successfully");
      } catch (sheetErr: any) {
        console.error("❌ Error sending to Google Sheets:", sheetErr?.response?.data || sheetErr.message);
        // Optionally: don't fail the whole process if sheets fail
      }
    }

    // ✅ Delete the used OTP
    await OTPModel.deleteOne({ _id: otpRecord._id });

    return res.status(200).json({
      message: "Email verified successfully",
      user: {
        name: user?.name,
        email: user?.email,
        isVerified: user?.isVerified,
      },
    });
  } catch (error) {
    console.error("❌ Error verifying OTP:", error);
    return res.status(500).json({ message: "Error verifying OTP" });
  }
}
