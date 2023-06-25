import React from 'react';
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import contactImg from '../assets/10.jpg';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div>
        <Navbar />
        <Hero 
          cName = "hero-mid"
          heroImg = {contactImg}
          title = "Contact"
          btnClass = "hide"
        />
        <ContactForm />
        <Footer />
    </div>
  );
}

export default Contact;