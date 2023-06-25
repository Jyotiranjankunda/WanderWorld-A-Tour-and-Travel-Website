import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import aboutImg from '../assets/01.jpg';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

function About() {
  return (
    <div>
        <Navbar />
        <Hero 
          cName = "hero-mid"
          heroImg = {aboutImg}
          title = "About"
          btnClass = "hide"
        />
        <AboutUs/>
        <Footer/>
    </div>
  );
}

export default About;