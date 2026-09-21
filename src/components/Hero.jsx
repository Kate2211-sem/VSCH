import React from 'react';

const Hero = ({ onGoToShop, onResetSettings }) => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1
            className="hero-title"
            data-ru="Хорошие волосы это залог красивого образа!"
            data-en="Good hair is the key to a beautiful look!"
          >
            Хорошие волосы это<br />
            залог красивого образа!
          </h1>
          <p
            className="hero-description"
            data-ru="Вы готовы к погружению в яркую страничку Вашей истории? Добро Пожаловать!"
            data-en="Are you ready to dive into a bright page of your story? Then Welcome!"
          >
            Вы готовы к погружению в яркую страничку Вашей истории? Тогда Добро Пожаловать!
          </p>

          <div className="hero-actions-group">
            <div className="hero-buttons">
              <button 
                type="button" 
                className="btn-primary" 
                onClick={onGoToShop}
                data-ru="Перейти в магазин" 
                data-en="Go to shop"
              >
                Перейти в магазин
              </button>
              <a href="#profile" className="btn-secondary" data-ru="Личный кабинет" data-en="Account">
                Личный кабинет
              </a>
              <button 
                type="button" 
                id="reset-settings-btn" 
                className="profile-reset-btn"
                onClick={onResetSettings}
              >
                <span>🔄</span> Сбросить настройки сайта
              </button>
            </div>
          </div>
        </div>

        <div className="hero__visuals">
          <img src="img/hero/hero-detail.png" alt="Детали укладки" className="hero-img hero-img--detail" />
          <img src="img/hero/hero-main.png" alt="Главная модель" className="hero-img hero-img--main" />
        </div>

        <div className="floating-arrows">
          <span className="arrow arrow-left">❮</span>
          <span className="arrow arrow-right">❯</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;