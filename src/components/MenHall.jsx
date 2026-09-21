import React from 'react';

const MenHall = ({
  title = "Мужской зал",
  imageSrc = "img/men/men-hall.png",
  services = [],
  onViewPrices
}) => {
  return (
    <section className="men-hall">
      <div className="container">
        <div className="men-hall__content">
          <div className="men-hall__price-block">
            <h3 className="men-hall__price-title">{title}</h3>

            <div className="men-hall__price-list">
              <ul className="price-list__names">
                {services.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
              <ul className="price-list__values">
                {services.map((item) => (
                  <li key={item.id}>{item.price}</li>
                ))}
              </ul>
            </div>

            <button 
              type="button"
              className="btn-gradient-blue men-hall__btn" 
              onClick={onViewPrices}
            >
              Смотреть все цены
            </button>
          </div>

          <div className="men-hall__image">
            <svg className="men-hall__circle" xmlns="http://www.w3.org/2000/svg" width="155" height="155" viewBox="0 0 155 155" fill="none">
              <g filter="url(#filter0_d_331_2117)">
                <circle cx="69.5" cy="67.5" r="62.5" fill="#C4C4C4"/>
                <circle cx="69.5" cy="67.5" r="62.5" fill="url(#paint0_linear_331_2117)"/>
                <circle cx="69.5" cy="67.5" r="62.5" fill="url(#paint1_linear_331_2117)"/>
              </g>
              <defs>
                <filter id="filter0_d_331_2117" x="0" y="0" width="155" height="155" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="8" dy="10"/>
                  <feGaussianBlur stdDeviation="7.5"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_331_2117"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_331_2117" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_331_2117" x1="132" y1="66.3636" x2="7" y2="66.3636" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FCFB4F"/>
                  <stop offset="1" stopColor="#FD9F13"/>
                </linearGradient>
                <linearGradient id="paint1_linear_331_2117" x1="132" y1="66.3636" x2="7" y2="66.3636" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#8BA4D8"/>
                  <stop offset="1" stopColor="#00C3FF"/>
                </linearGradient>
              </defs>
            </svg>
            <img src={imageSrc} alt={title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenHall;