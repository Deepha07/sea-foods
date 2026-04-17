import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MessageCircle, Send } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          ENNEM SEA FOODS
        </Link>
        
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>HOME</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>ABOUT</NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>PRODUCTS</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>CONTACT</NavLink>
        </div>
        
        <div className="nav-actions">
          <button className="btn btn-primary enquire-btn">Enquire Now</button>
          <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer" className="btn btn-outline chat-btn">
            <MessageCircle size={18} />
            Chat with us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
