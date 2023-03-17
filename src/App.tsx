import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from './types';



function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://dummyjson.com/products');
      setProducts(result.data.products);
    };

    fetchData();
  }, []);

  const handleDelete = (productId: number) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.rating}</td>
              <td>{product.stock}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>
                <button onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
