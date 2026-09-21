import React from 'react';

export const ProductCard = ({ product }) => {
  const { title, category, price, rating, image, description, inStock } = product;

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
        {/* Пример плашки скидки, если нужна */}
        {price < 25 && <div className="discount-badge">%</div>}
      </div>

      <p className="p-category">{category}</p>
      <h3 className="p-name">{title}</h3>

      <div className="p-footer">
        <div className="p-price">
          {price.toFixed(2)} <small>BYN</small>
        </div>
        <span className="p-volume">★ {rating}</span>
      </div>
    </div>
  );
};