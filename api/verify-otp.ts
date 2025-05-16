// api/verify-otp.ts

import { VercelRequest, VercelResponse } from "@vercel/node";
import User, { IUser } from "../models/User";
import OTPModel from "../models/OTP";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }

    // Convert email to lowercase for case-insensitive comparison
    const normalizedEmail = email.toLowerCase();

    console.log("Verifying OTP for email:", normalizedEmail);
    console.log("OTP provided:", otp);

    const otpRecord = await OTPModel.findOne({
      email: normalizedEmail,
      otp: otp,
      expiresAt: { $gt: new Date() },
    });

    console.log("Found OTP record:", otpRecord);

    if (!otpRecord) {
      // Check if OTP exists but is expired
      const expiredOTP = await OTPModel.findOne({
        email: normalizedEmail,
        otp: otp,
      });

      if (expiredOTP) {
        return res
          .status(400)
          .json({ message: "OTP has expired. Please request a new one." });
      }
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const user = (await User.findOne({ email: normalizedEmail })) as IUser;

    if (user) {
      user.isVerified = true;
      await user.save();
      console.log("User verified:", user.email);
    }

    // Delete the used OTP
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
    console.error("Error verifying OTP:", error);
    return res.status(500).json({ message: "Error verifying OTP" });
  }
}
