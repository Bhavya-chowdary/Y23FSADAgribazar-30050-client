import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MockDataProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/agri-products.json'); // Fetching local JSON file
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Agricultural Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '250px', textAlign: 'center' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><strong>Price: ${product.price}</strong></p>
            <button style={{ backgroundColor: "green", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MockDataProducts;
