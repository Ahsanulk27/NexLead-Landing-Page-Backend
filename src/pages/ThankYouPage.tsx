import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-button-dark">
      <Header />

      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto bg-button-dark border border-border-muted rounded-lg p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-yellow bg-opacity-10 rounded-full mb-8">
              <CheckCircle size={40} className="text-primary-yellow" />
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-text-light">
              Thank You!
            </h1>

            <p className="text-lg text-text-muted mb-8">
              Your submission has been received successfully. One of our experts
              will contact you within 24 hours to discuss how we can help your
              business grow.
            </p>

            <Link to="/" className="btn-primary inline-block">
              Return to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYouPage;
