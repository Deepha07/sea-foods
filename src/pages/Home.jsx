import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Snowflake, Truck, ArrowRight, MessageCircle, Droplet } from 'lucide-react';
import './Home.css';
import Footer from '../components/Footer';


const Home = () => {
  return (
    <div className="home-page">
    
      <section className="home-hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title-large">Fresh Chilled & Ready To Cook Sea Foods</h1>
              <p className="hero-description">
                Premium maritime exports and local supply, maintaining the highest standards of cold-chain integrity from the ocean to your kitchen.
              </p>
              <div className="hero-btns">
                <Link to="/products" className="btn btn-primary">View Products</Link>
                <Link to="/about" className="btn btn-text">Our Process <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-main-img">
                <img src="/salmon_hero.png" alt="Fresh Salmon" />
              </div>
              <div className="hero-side-elements">
                <div className="side-img">
                  <img src="/shrimp_hero.png" alt="Fresh Shrimps" />
                </div>
                <div className="hero-accent-card">
                  <Droplet size={24} className="accent-icon" />
                  <h4>SUSTAINABLY SOURCED</h4>
                  <p>Direct from coastal waters to your kitchen within 24 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="coast-banner">
        <div className="container">
          <div className="banner-content">
            <div className="banner-left">
               <span className="ship-icon">🚢</span>
               <p>Fresh from Ramanathapuram Coast</p>
            </div>
            <div className="banner-right">
              <p>DAILY CATCH DELIVERIES</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="pillars-section">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar">
              <div className="pillar-icon-box">
                <ShieldCheck size={24} />
              </div>
              <h4>FRESH CATCH</h4>
              <p>Daily arrivals from the Ramanathapuram coasts ensuring zero preservation chemicals.</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon-box">
                <Snowflake size={24} />
              </div>
              <h4>HYGIENIC PROCESSING</h4>
              <p>State-of-the-art facility following International food safety protocols and triple-wash systems.</p>
            </div>
            <div className="pillar">
              <div className="pillar-icon-box">
                <Truck size={24} />
              </div>
              <h4>DIRECT COASTAL SUPPLY</h4>
              <p>Optimized logistics network reducing transit time from coast to consumer by 40%.</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="curated-section">
        <div className="container">
          <div className="curated-header">
            <span className="badge">THE DAILY CATCH</span>
            <h2 className="section-title centered">Curated Selection</h2>
          </div>
          
          <div className="curated-grid">
            <Link to="/products?category=sea+fish" className="curated-card large-card">
              <div className="card-bg">
                <img src="/tuna_illustration_1776327070938.png" alt="Sea Fish" />
              </div>
              <div className="card-content">
                <span className="premium-label">PREMIUM GRADE</span>
                <h3>Sea fish</h3>
              </div>
            </Link>
            
            <div className="small-cards-col">
              <Link to="/products?category=shell+fish" className="curated-card">
                <div className="card-bg">
                  <img src="/blue_crab_illustration_1776327116102.png" alt="Crabs" />
                </div>
                <div className="card-content">
                  <h3>Crabs</h3>
                </div>
              </Link>
              
              <div className="small-cards-row">
                <Link to="/products" className="curated-card">
                  <div className="card-bg">
                    <img src="/squids.png" alt="Squids" />
                  </div>
                  <div className="card-content">
                    <h3>Squids</h3>
                  </div>
                </Link>
                <Link to="/products" className="curated-card">
                  <div className="card-bg">
                    <img src="/shrimps.png" alt="Shrimps" />
                  </div>
                  <div className="card-content">
                    <h3>Shrimps</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="b2b-cta-section">
        <div className="container">
          <div className="b2b-cta-content">
            <div className="b2b-text">
              <h2>Partnering with Hotels, <br />Restaurants & Retailers</h2>
              <p>We provide bulk supply solutions with consistent quality and reliable delivery schedules across the region.</p>
            </div>
            <Link to="/contact" className="btn btn-outline-white">Enquire Now</Link>
          </div>
        </div>
      </section>

       <Footer />

     
      <a href="https://wa.me/yournumber" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={18} />
        <span>Chat with us</span>
      </a>
    </div>
  );
};

export default Home;
