import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Register from './components/Register';
import Login from './components/Login';
import Layout from './components/Layout';
import './App.css'; // Importer le fichier CSS global

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/products/category/:category" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
