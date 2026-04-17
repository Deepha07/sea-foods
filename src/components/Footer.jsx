import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h2 className="footer-title">Global Distribution Hub</h2>
          
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">PRIMARY ADDRESS</span>
              <p>12/72, ThoniThurai, Mandapam,<br />Ramanathapuram - 623518</p>
            </div>
            
            <div className="info-group">
              <div className="info-item">
                <span className="info-label">INQUIRIES</span>
                <a href="mailto:ennemseafoods@gmail.com">ennemseafoods@gmail.com</a>
              </div>
              
              <div className="info-item">
                <span className="info-label">LOGISTIC SUPPORT</span>
                <p>+91 00000 00000</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-map">
          <div className="map-placeholder">
            <div className="map-tag">
              <MapPin size={16} fill="#001B39" color="white" />
              <span>Ramanathapuram</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} ENNEM SEA FOODS. All rights reserved.</p>
        <div className="footer-links">
          <span>Quality First</span>
          <span>Sustainability</span>
          <span>Tradition</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
