import React, { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Benefits from '../components/Benefits'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'

const LandingPage: React.FC = () => {


  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage