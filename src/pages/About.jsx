import React from 'react';
import { Check, Ship, MapPin } from 'lucide-react';
import './About.css';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="about-page">
      
      <section className="about-hero">
        <div className="container hero-content-small fade-in">
          <span className="section-badge">OUR LEGACY</span>
          <h1 className="about-title">Sourced from the <span className="highlight">Depths</span>, <br />Delivered with Integrity.</h1>
          <p className="about-desc">
            ENNEM SEA FOODS represents the pinnacle of maritime excellence, 
            bridging the gap between traditional coastal expertise and modern global standards.
          </p>
        </div>
        <div className="hero-bg-overlay"></div>
      </section>

    
      <section className="mission-section">
        <div className="container mission-grid">
          <div className="mission-text">
            <h2 className="section-title">The Mission</h2>
            <blockquote className="mission-quote">
              "Deliver quality seafood while supporting local fishing communities."
            </blockquote>
            <p className="mission-paragraph">
              Our commitment goes beyond commerce. We believe in a sustainable ecosystem where the 
              bounty of the sea supports the generations of families who have dedicated their lives 
              to the maritime trade. By providing direct access to markets, we ensure fair value 
              for fishermen and premium quality for our clients.
            </p>
            <ul className="mission-list">
              <li><Check size={18} /> Zero-Middleman Sourcing</li>
              <li><Check size={18} /> Cold Chain Excellence</li>
              <li><Check size={18} /> Community Empowerment</li>
            </ul>
          </div>
          <div className="mission-visual">
            <img src="/about_mission.png" alt="Fresh Sea Fish" />
          </div>
        </div>
      </section>

     
      <section className="roots-section">
        <div className="container roots-grid">
          <div className="roots-image">
             <img src="/about_roots_ship.png" alt="Fishing Vessel" className="roots-ship-img" />
          </div>
          <div className="roots-text">
            <h2 className="section-title">Our Roots in Ranathapuram</h2>
            <p>
              Fresh seafood sourced directly from coastal fishermen. At ENNEM SEA FOODS, 
              we pride ourselves on a logistics chain that minimizes the time between the 
              ocean and your table.
            </p>
            <div className="location-card">
              <MapPin className="loc-icon" />
              <div>
                <span className="loc-label">LOCATION</span>
                <p>12/72, ThoniThurai, Mandapam, Ramanathapuram - 623518, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="curator-section">
        <div className="container text-center">
          <h2 className="section-title">The Nautical Curator</h2>
          <p className="section-intro">Defining the standards of high-end fishery.</p>
          
          <div className="value-cards">
            <div className="value-card">
              <span className="v-num">01.</span>
              <h3>PROVENANCE</h3>
              <p>Every item in our catalog is traceable to a specific coastal coordinate, ensuring total transparency.</p>
            </div>
            <div className="value-card">
              <span className="v-num">02.</span>
              <h3>QUALITY</h3>
              <p>Our selection process is rigorous. We curate only the finest specimens that meet our precision metrics.</p>
            </div>
            <div className="value-card">
              <span className="v-num">03.</span>
              <h3>DELIVERY</h3>
              <p>Timeliness is non-negotiable. We bridge the gap between ocean and kitchen with unparalleled speed.</p>
            </div>
          </div>
        </div>
      </section>

       <Footer />
    </div>
  );
};

export default About;
