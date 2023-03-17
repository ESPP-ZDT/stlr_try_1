import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from './types';
import ProductTable from './components/ProductTable';

const ProductList = () => {
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

  return <ProductTable products={products} onDelete={handleDelete} />;
};

export default ProductList;
