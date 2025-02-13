import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryHighlight = () => {
  const [highlightedProducts, setHighlightedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        const products = response.data;

        // Filtrer un produit par catégorie
        const categories = ['habillement', 'accessoires', 'chaussures'];
        const highlights = categories.map(category => 
          products.find(product => product.category === category)
        ).filter(product => product !== undefined);

        setHighlightedProducts(highlights);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Produits en vedette</h2>
      <ul>
        {highlightedProducts.map(product => (
          <li key={product.name}>
            <h3>{product.name}</h3>
            <p>{product.price} F CFA</p>
            <img src={process.env.PUBLIC_URL + product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryHighlight;