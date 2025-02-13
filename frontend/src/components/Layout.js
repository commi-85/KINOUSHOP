import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CategoryHighlight from './CategoryHighlight';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <CategoryHighlight />
      <div className="welcome-message">
        Bienvenue chez KINOUSHOP
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;