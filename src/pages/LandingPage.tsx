import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Benefits from "../components/Benefits";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import About from "../components/About";
import Pricing from "../components/Pricing";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
