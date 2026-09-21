import React from 'react';

export const Filters = ({ categories, selectedCategory, onSelectCategory, searchQuery, onSearchChange }) => {
  return (
    <div className="shop__filters">
      {/* Фильтр по категориям */}
      <div className="filter-item">
        <select 
          className="filter-select" 
          value={selectedCategory} 
          onChange={(e) => onSelectCategory(e.target.value)}
        >
          <option value="all">Все категории</option>
          <option value="masks">Маски</option>
          <option value="sprays">Спреи</option>
          <option value="shampoos">Шампуни</option>
        </select>
      </div>

      {/* Поиск по названию */}
      <div className="filter-item">
        <input
          type="text"
          className="filter-input"
          placeholder="Поиск товара..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
};