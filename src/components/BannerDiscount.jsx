import React from 'react';

const BannerDiscount = ({ 
  title, 
  target, 
  preText, 
  discount, 
  buttonText, 
  onBook 
}) => {
  return (
    <div className="promo-banner">
      <div className="promo-banner__info">
        <p className="promo-text">{title}</p>
        <p className="promo-target">{target}</p>
      </div>
      <div className="promo-banner__value">
        <span className="promo-pre">{preText}</span>
        <span className="promo-percent">{discount}</span>
      </div>
      <button 
        className="btn-gradient promo-btn" 
        onClick={onBook}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BannerDiscount;