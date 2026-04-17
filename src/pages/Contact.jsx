import React from 'react';
import { Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
     
      <section className="contact-hero">
        <div className="container">
          <div className="hero-flex">
            <div className="hero-main">
              <span className="connect-badge">CONNECT WITH US</span>
              <h1 className="hero-title large">REACH THE<br />DEPTHS.</h1>
            </div>
            <div className="hero-intro">
               <div className="intro-line"></div>
               <p>Inquiries regarding bulk export, quality certifications, or distribution partnerships are welcomed with professional urgency.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="contact-body-section">
        <div className="container">
          <div className="contact-split-grid">
            <div className="contact-links-col">
              <div className="contact-info-block">
                <span className="info-tag-header"><MapPin size={14} /> HEADQUARTERS</span>
                <p>12/72, ThoniThurai,<br />Mandapam,<br />Ramanathapuram - 623518</p>
              </div>

              <div className="contact-info-block">
                <span className="info-tag-header"><Mail size={14} /> ELECTRONIC MAIL</span>
                <p>ennemseafoods@gmail.com</p>
              </div>

              <a href="https://wa.me/yournumber" className="chat-inline-btn">
                <div className="whatsapp-icon-bg">
                   <MessageCircle size={18} fill="#25D366" color="#25D366" />
                </div>
                <span>Chat with us</span>
              </a>
            </div>

            <div className="contact-form-wrapper">
              <div className="form-card">
                <form className="contact-inquiry-form">
                  <div className="form-grid-row">
                    <div className="form-input-group">
                      <label>FULL NAME</label>
                      <input type="text" placeholder="Ram Kumar" />
                    </div>
                    <div className="form-input-group">
                      <label>PHONE NUMBER</label>
                      <input type="text" placeholder="+91 00000 00000" />
                    </div>
                  </div>
                  
                  <div className="form-input-group">
                    <label>MESSAGE INQUIRY</label>
                    <textarea placeholder="Briefly describe your requirements..."></textarea>
                  </div>
                  
                  <button type="submit" className="enquire-submit-btn">
                    Enquire Now <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="full-map-banner">
        <div className="map-banner-container">
          <img src="/map_replacement.png" alt="Ramanathapuram Coast" className="banner-bg-img" />
          <div className="map-overlay-card">
            <div className="pin-icon-square">
               <MapPin size={24} fill="#001B39" color="white" />
            </div>
            <div className="map-text">
               <h4>Ramanathapuram</h4>
               <span>Show in Map</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
