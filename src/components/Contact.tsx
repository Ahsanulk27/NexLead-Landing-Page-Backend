import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
          <h2 className="section-title text-text-light">Get in Touch</h2>
          <p className="section-subtitle text-text-muted">
            Ready to transform your business? Contact us today to discuss your
            needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-primary-bg p-6 rounded-lg shadow-lg border border-border-muted">
              <h3 className="text-2xl font-bold mb-6 text-text-light">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary-yellow mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-text-light">Email</h4>
                    <p className="text-text-muted">nexleadtech@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary-yellow mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-text-light">Phone</h4>
                    <p className="text-text-muted">+44 790 3704 083</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary-yellow mt-1 mr-4" />
                  <div>
                    <h4 className="font-semibold text-text-light">Address</h4>
                    <p className="text-text-muted">
                      2 Grayscroft Road, London,
                      <br />
                      SW16 5UP, United Kingdom
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-bg p-6 rounded-lg shadow-lg border border-border-muted">
              <h3 className="text-2xl font-bold mb-6 text-text-light">
                Business Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-text-muted">Monday - Friday</span>
                  <span className="font-semibold text-text-light">
                    9:00 AM - 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Saturday</span>
                  <span className="font-semibold text-text-light">
                    10:00 AM - 4:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Sunday</span>
                  <span className="font-semibold text-text-light">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-primary-bg p-6 rounded-lg shadow-lg border border-border-muted">
            <h3 className="text-2xl font-bold mb-6 text-text-light">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-light mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field bg-button-dark text-text-light placeholder-text-muted focus:bg-button-dark focus:outline-none focus:ring-2 focus:ring-primary-yellow active:bg-button-dark hover:bg-button-dark"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-light mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field bg-button-dark text-text-light placeholder-text-muted focus:bg-button-dark focus:outline-none focus:ring-2 focus:ring-primary-yellow active:bg-button-dark hover:bg-button-dark"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text-light mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field bg-button-dark text-text-light placeholder-text-muted focus:bg-button-dark focus:outline-none focus:ring-2 focus:ring-primary-yellow active:bg-button-dark hover:bg-button-dark"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-light mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-field bg-button-dark text-text-light placeholder-text-muted focus:bg-button-dark focus:outline-none focus:ring-2 focus:ring-primary-yellow active:bg-button-dark hover:bg-button-dark"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
