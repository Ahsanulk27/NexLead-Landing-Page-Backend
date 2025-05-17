// api/send-otp.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import User from '../models/User.js';
import OTPModel from '../models/OTP.js';
import { generateOTP } from '../utils/generateOTP';
import { sendOTPEmail } from '../utils/sendEmail';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log(req.method);
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  try {
    const { email, name, phone, company, message } = req.body;
    if (!email) return res.status(400).json({ message: "Email is required" });

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, name, phone, company, message });
      await user.save();
    }

    const otp = generateOTP();
    const otpRecord = new OTPModel({
      email,
      otp,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000)
    });

    await otpRecord.save();
    await sendOTPEmail(email, otp);

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending OTP" });
  }
}
