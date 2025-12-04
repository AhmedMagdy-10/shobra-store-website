import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import CategoryFilter from '../components/CategoryFilter';
import ProductsGrid from '../components/ProductsGrid';
import ProductDetailsModal from '../components/ProductDetailsModal';
import { useStore } from '../context/StoreContext';
import type { Product } from 'src/feature/data/models/product';

const HomeScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { selectedCategory } = useStore();

  useEffect(() => {
    setLoading(true);
    const url = selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : 'https://fakestoreapi.com/products';

    fetch(url)
      .then(res => res.json())
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch products:', err);
        setLoading(false);
      });
  }, [selectedCategory]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="p-4">
      <Banner />
      <CategoryFilter />
      <ProductsGrid
        products={products}
        onProductClick={handleProductClick}
        loading={loading}
      />

      {selectedProduct && (
        <ProductDetailsModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default HomeScreen;