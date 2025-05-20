import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useInView } from "react-intersection-observer";
import { CheckCircle, AlertCircle } from "lucide-react";
import axios from "axios";

// API base URL
// const API_URL = import.meta.env.VITE_API_URL;

type FormData = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const sendOTP = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const response = await axios.post(`/api/send-otp`, data);
      setSuccess("OTP sent to your email!");
      setOtpSent(true);
      setError("");
      return response.data;
    } catch (error: any) {
      setError(
        error.response?.data?.message || "Error sending OTP. Please try again."
      );
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const verifyOTP = async () => {
    try {
      setIsSubmitting(true);
      const email = getValues("email");
      const response = await axios.post(`/api/verify-otp`, {
        email,
        otp,
      });
      setSuccess("Email verified successfully!");
      setTimeout(() => {
        navigate("/thank-you");
      }, 1500);
      return response.data;
    } catch (error: any) {
      setError(error.response?.data?.message || "Invalid or expired OTP");
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmit = async (data: FormData) => {
    setError("");
    setSuccess("");

    try {
      if (!otpSent) {
        await sendOTP(data);
      } else {
        await verifyOTP();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-button-dark">
      <div className="container-custom">
        <div
          ref={ref}
          className={`text-center mb-16 animate-on-scroll ${
            inView ? "is-visible" : ""
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-light">
            Ready to Scale Your Business?
          </h2>
          <p className="text-lg md:text-xl text-text-muted max-w-3xl mx-auto">
            Fill out the form below and one of our experts will contact you
            within 24 hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-primary-bg p-8 rounded-lg shadow-lg border border-border-muted">
          {error && (
            <div className="bg-red-500 bg-opacity-20 border border-red-500 rounded-md p-4 mb-6 flex items-center text-text-light">
              <AlertCircle size={20} className="mr-2" />
              <p>{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-500 bg-opacity-20 border border-green-500 rounded-md p-4 mb-6 flex items-center text-text-light">
              <CheckCircle size={20} className="mr-2" />
              <p>{success}</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {!otpSent ? (
              <>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 font-medium text-text-light"
                  >
                    Full Name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`input-field bg-button-dark text-text-light placeholder-text-muted focus:bg-button-dark focus:outline-none focus:ring-2 focus:ring-primary-yellow active:bg-button-dark hover:bg-button-dark ${
                      errors.name ? "border-red-500 ring-red-500" : ""
                    }`}
                    placeholder="John Doe"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-400 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-text-light"
                  >
                    Email Address*
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`input-field bg-button-dark text-text-light placeholder-text-muted focus:bg-button-dark focus:outline-none focus:ring-2 focus:ring-primary-yellow active:bg-button-dark hover:bg-button-dark ${
                      errors.email ? "border-red-500 ring-red-500" : ""
                    }`}
                    placeholder="john@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-400 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 font-medium text-text-light"
                  >
                    Phone Number*
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={`input-field bg-button-dark text-text-light placeholder-text-muted focus:bg-button-dark focus:outline-none focus:ring-2 focus:ring-primary-yellow active:bg-button-dark hover:bg-button-dark ${
                      errors.phone ? "border-red-500 ring-red-500" : ""
                    }`}
                    placeholder="+15551234567"
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^\+?[1-9]\d{0,14}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-red-400 text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block mb-2 font-medium text-text-light"
                  >
                    Company Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    className="input-field bg-button-dark text-text-light placeholder-text-muted focus:bg-button-dark focus:outline-none focus:ring-2 focus:ring-primary-yellow active:bg-button-dark hover:bg-button-dark"
                    placeholder="Your Company"
                    {...register("company")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 font-medium text-text-light"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="input-field bg-button-dark text-text-light placeholder-text-muted focus:bg-button-dark focus:outline-none focus:ring-2 focus:ring-primary-yellow active:bg-button-dark hover:bg-button-dark resize-none"
                    placeholder="Tell us about your business needs..."
                    {...register("message")}
                  ></textarea>
                </div>
              </>
            ) : (
              <div>
                <div className="bg-primary-yellow bg-opacity-20 border border-primary-yellow rounded-md p-4 mb-6 flex items-center text-text-light">
                  <CheckCircle size={20} className="mr-2" />
                  <p>
                    We've sent a verification code to your email. Please enter
                    it below.
                  </p>
                </div>
                <label
                  htmlFor="otp"
                  className="block mb-2 font-medium text-text-light"
                >
                  Verification Code*
                </label>
                <input
                  id="otp"
                  type="text"
                  className="input-field bg-button-dark text-text-light placeholder-text-muted focus:bg-button-dark focus:outline-none focus:ring-2 focus:ring-primary-yellow active:bg-button-dark hover:bg-button-dark"
                  placeholder="Enter the 6-digit code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Processing..."
                : otpSent
                ? "Verify & Submit"
                : "Get Started"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
