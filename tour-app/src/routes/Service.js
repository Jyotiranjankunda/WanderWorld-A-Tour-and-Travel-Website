import React from 'react';
import Navbar from '../components/Navbar';
import Hero from "../components/Hero";
import serviceImg from '../assets/02.jpg';
import Footer from '../components/Footer';
import Trip from '../components/Trip';

function Service() {
  return (
    <div>
        <Navbar />
        <Hero 
          cName = "hero-mid"
          heroImg = {serviceImg}
          title = "Service"
          btnClass = "hide"
        />
        <Trip/>
        <Footer/>
    </div>
  );
}

export default Service;