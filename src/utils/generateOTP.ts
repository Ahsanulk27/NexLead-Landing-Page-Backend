
export const generateOTP = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("Generated OTP:", otp);  // Log OTP to check
    return otp;
  };