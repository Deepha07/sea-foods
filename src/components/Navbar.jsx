import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo" onClick={closeMenu}>
          ENNEM SEA FOODS
        </Link>
        
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>HOME</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>ABOUT</NavLink>
          <NavLink to="/products" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>PRODUCTS</NavLink>
          <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>CONTACT</NavLink>
          
          <div className="mobile-nav-actions">
            <button className="btn btn-primary enquire-btn">Enquire Now</button>
            <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="btn btn-outline chat-btn">
              <MessageCircle size={18} />
              Chat with us
            </a>
          </div>
        </div>
        
        <div className="nav-actions desktop-only">
          <button className="btn btn-primary enquire-btn">Enquire Now</button>
          <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="btn btn-outline chat-btn">
            <MessageCircle size={18} />
            Chat with us
          </a>
        </div>

        <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
