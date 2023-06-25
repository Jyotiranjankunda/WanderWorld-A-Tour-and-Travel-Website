import "./ContactFormStyles.css";
import React from 'react';

function ContactForm() {
  return (
    <div className="form-container">
        <h1>Send a message to us!</h1>
        <form>
            <input type="text"  placeholder="Name"/>
            <input type="email"  placeholder="Email"/>
            <input type="text"  placeholder="Subject"/>
            <textarea rows="4" placeholder="Message"></textarea>
            <button>Send Message</button>
        </form>
    </div>
  );
}

export default ContactForm;