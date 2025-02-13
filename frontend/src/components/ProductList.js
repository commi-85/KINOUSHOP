import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/category/${category}`);
        console.log(response.data); // Vérifiez les données ici
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <div>
      <h1>Produits - {category}</h1>
      <ul>
        {products.map(product => (
          <li key={product.name}>
            <h2>{product.name}</h2>
            <p>{product.price} F CFA</p>
            <img src={process.env.PUBLIC_URL + product.imageUrl} alt={product.name} />
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;