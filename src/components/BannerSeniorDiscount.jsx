import React from 'react';

const BannerSeniorDiscount = ({ 
  title, 
  subtitle, 
  discount, 
  buttonText, 
  onBook 
}) => {
  return (
    <section className="promo-section-second">
      <div className="container">
        <div className="promo-banner">
          <div className="promo-banner__info">
            <p className="promo-text">{title}</p>
            <p className="promo-target">{subtitle}</p>
          </div>
          <div className="promo-banner__value">
            <span className="promo-percent">{discount}</span>
          </div>
          <button
            className="btn-gradient promo-btn"
            onClick={onBook}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerSeniorDiscount;