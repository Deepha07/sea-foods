import React from 'react';
import { Search } from 'lucide-react';
import './Products.css';
import Footer from '../components/Footer';


const SEA_FISH = [
  { id: 1, name: 'Sear Fish', detail: 'Mixed Size', image: '/seer_fish_main.png' },
  { id: 2, name: 'Indian Mackerel', detail: 'Mixed Sizes', image: '/indian_mackerel.png' },
  { id: 3, name: 'Emperor Fish ', detail: 'Emperor Fish per kg 4 to 2', image: '/emperor_fish.png' },
  { id: 4, name: 'Goat Fish', detail: 'Goat fish mixed', image: '/goat_fish.png' },
  { id: 5, name: 'Lady Fish', detail: 'Mixed Sizes', image: '/naduva.png' },
  { id: 6, name: 'Sear Fish', detail: 'Sear Fish Mixed Sizes', image: '/paarai.png' },
];

const SHELL_FISH = [
  { id: 7, name: 'Flower Shrimp', detail: 'Mixed Sizes', image: '/flower_shrimp_product.png' },
  { id: 8, name: 'Flower Shrimp U15', detail: 'Mixed Sizes', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=600&q=80' },
  { id: 9, name: 'Flower Shrimp U20', detail: 'Mixed Sizes', image: '/rtc_shrimp.png' },
  { id: 10, name: 'Flower Shrimps', detail: '300g to 500g', image: '/tiger_prawns_big.png' },
  { id: 11, name: 'Blue Crab', detail: '4 to 5 pieces per kg', image: '/blue_crab_product.png' },
  { id: 12, name: 'Brown Crab', detail: '3 to 5 pieces per kg', image: '/brown_crab.png' },
  { id: 13, name: 'Rock Lobster', detail: '300g to 1kg', image: '/rock_lobster.png' },
];

const READY_TO_COOK = [
  { id: 14, title: 'Squid Ready to Cook', subtext: 'Cleaned, sliced, and prepared to industrial standards for immediate culinary application.', image: '/shell_squid.png' },
  { id: 15, title: 'Flower Shrimp Ready 40 Count', subtext: 'Perfectly portioned and cleaned shrimp for high-volume commercial kitchens.', image: '/shrimp_lineup.png' },
  { id: 16, title: 'Squid 3 to 4 Pieces Per Kg', subtext: 'Sized for premium restaurant service, cleaned and ready for the grill or pan.', image: '/vacuum_squid.png' },
];

const Products = () => {
  return (
    <div className="products-page">
  
      <section className="products-hero">
        <div className="container">
          <span className="hero-tag">PREMIUM COLLECTIONS</span>
          <h1 className="hero-title white-text">OUR OCEANIC <br />HARVEST.</h1>
          <p className="hero-subtext">Sourced from the depths of the Indian Ocean, our selection represents the pinnacle of maritime freshness and professional processing standards.</p>
        </div>
      </section>

     
      <section className="product-nav-section">
        <div className="container">
          <div className="search-bar-full">
             <Search size={20} className="search-icon-fixed" />
             <input type="text" placeholder="Search for seafood..." />
          </div>
          <div className="product-category-links">
            <a href="#sea-fish">SEA FISH</a>
            <a href="#shell-fish">SHELL FISH</a>
            <a href="#ready-to-cook">READY TO COOK</a>
          </div>
        </div>
      </section>

     
      <section id="sea-fish" className="product-grid-section">
        <div className="container">
          <h2 className="grid-section-title">SEA FISH</h2>
          <div className="uniform-staggered-grid">
            {SEA_FISH.map((item, index) => (
              <div key={item.id} className="grid-card">
                <div className="card-img-container">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="card-info">
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      <section id="shell-fish" className="product-grid-section">
        <div className="container">
          <h2 className="grid-section-title">SHELL FISH</h2>
          <div className="uniform-staggered-grid">
            {SHELL_FISH.map((item, index) => (
              <div key={item.id} className="grid-card">
                <div className="card-img-container">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="card-info">
                  <h3>{item.name}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="ready-to-cook" className="ready-to-cook-section">
        <div className="container">
          <h2 className="centered-title">READY TO COOK</h2>
          <div className="divider"></div>
          
          <div className="rtc-list">
            {READY_TO_COOK.map((item, index) => (
              <div key={item.id} className={`rtc-item ${index % 2 !== 0 ? 'reverse' : ''}`}>
                <div className="rtc-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="rtc-text">
                  <h3>{item.title}</h3>
                  <p>{item.subtext}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

       <Footer />
    </div>
  );
};

export default Products;
