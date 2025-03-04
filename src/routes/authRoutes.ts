import express from 'express';
import User from '../models/User';
import { generateOTP } from '../utils/generateOTP';
import { sendOTPEmail } from '../utils/sendEmail';
import OTPModel from '../models/OTP'; 

const router = express.Router();

// Route to send OTP
router.post("/send-otp", async (req, res) => {
  try {
    const { email, name, phone, company, message } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    console.log("Sending OTP to", email);
    
    // Check if user exists
    let user = await User.findOne({ email });
    
    // If no user exists yet, create a new one
    if (!user) {
      user = new User({
        email,
        name: name || '',
        phone: phone || '',
        company: company || '',
        message: message || ''
      });
      await user.save();
    }

    // Generate and save OTP
    const otp = generateOTP();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry
     // Create OTP record and save to database
    const otpRecord = new OTPModel({
      email,
      otp,
      expiresAt: otpExpires
    });
    
    await otpRecord.save(); // Save OTP to OTP collection
    
    
    await sendOTPEmail(email, otp);

    return res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return res.status(500).json({ message: "Error sending OTP" });
  }
});

// Route to verify OTP
// Route to verify OTP
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }

    // Find OTP record in the OTP collection
    const otpRecord = await OTPModel.findOne({
      email,
      otp,
      expiresAt: { $gt: Date.now() } // Check if OTP is not expired
    });

    if (!otpRecord) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Mark user as verified
    const user = await User.findOne({ email });
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
});

export default router;