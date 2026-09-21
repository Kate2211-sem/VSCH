import React, { useState, useMemo } from 'react';
import productsData from '../data/products.json';
import { ProductCard } from '../components/ProductCard';
import { Filters } from '../components/Filters';

export const ShopPage = () => {
  const [products] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Фильтрация списка товаров
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, selectedCategory, searchQuery]);

  return (
    <section className="shop" id="shop">
      <div className="container">
        {/* Заголовок магазина */}
        <div className="shop__header">
          <div className="shop__text">
            <h1 className="shop__title">Магазин косметики</h1>
            <p className="shop__description">
              Профессиональный уход за волосами и кожей в домашних условиях.
            </p>
          </div>
        </div>

        {/* Панель фильтров */}
        <Filters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Сетка товаров */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>Товары не найдены</p>
          )}
        </div>
      </div>
    </section>
  );
};