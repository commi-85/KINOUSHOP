import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='navbar'>
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.jpg" alt="KINOUSHOP Logo" style={{ height: '50px' }} />
          </Link>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Rechercher un produit..." />
        </div>
        <ul>
          <li><Link to="/products/category/habillement">Habillement</Link></li>
          <li><Link to="/products/category/accessoires">Accessoires</Link></li>
          <li><Link to="/products/category/chaussures">Chaussures</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;