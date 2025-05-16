// api/verify-otp.ts

import { VercelRequest, VercelResponse } from '@vercel/node';
import User, { IUser } from '../models/User';
import OTPModel from '../models/OTP';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }

    const otpRecord = await OTPModel.findOne({
      email,
      otp,
      expiresAt: { $gt: new Date() }
    });

    if (!otpRecord) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    const user = await User.findOne({ email }) as IUser;

    if (user) {
      user.isVerified = true;
      await user.save();
    }

    return res.status(200).json({
      message: "Email verified successfully",
      user: {
        name: user?.name,
        email: user?.email,
        isVerified: user?.isVerified
      }
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res.status(500).json({ message: "Error verifying OTP" });
  }
}
