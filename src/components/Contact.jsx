
//contact.jsx
import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-title">CONTACT</h2>
        <p className="section-subtitle">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>

        <div className="contact-info-horizontal">
          <div className="info-box">
            <i className="icon fa fa-map-marker"></i>
            <h3>Address</h3>
            <p>Pune Maharashtra</p>
          </div>
          <div className="info-box">
            <i className="icon fa fa-phone"></i>
            <h3>Call Us</h3>
            <p>+91 9999090000</p>
          </div>
          <div className="info-box">
            <i className="icon fa fa-envelope"></i>
            <h3>Email Us</h3>
            <p>presento@example.com</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
          </div>
          <input type="text" placeholder="Subject" required /> <br/><br/>
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
