import React from 'react';

const AboutPreview = (props) => {
  // Деструктуризация с фолбеками прямо внутри тела функции
  const { 
    title = "Ваше место для красоты", 
    description = "Парикмахерская Ок - это счастливые девушки и парни, яркие цвета волос и воздушные локоны. Это дружная семья, которая встретит Вас и окутает заботой с первого шага в парикмахерскую.",
    buttonText = "Узнать больше о нас",
    imageSrc = "img/about/hairstyle.png",
    onLearnMore
  } = props;

  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-preview__content">
          <div className="about-preview__image-block">
            <div className="about-preview__circle"></div>
            <img src={imageSrc} alt={title} />
          </div>

          <div className="about-preview__text-block">
            <h2 
              className="about-preview__title" 
              data-ru="Ваше место для красоты" 
              data-en="Your place for beauty"
            >
              {title}
            </h2>
            <p
              className="about-preview__desc"
              data-ru="Парикмахерская Ок - это счастливые девушки и парни, яркие цвета волос и воздушные локоны. Это дружная семья, которая встретит Вас и окутает заботой с первого шага в парикмахерскую."
              data-en="Hairdresser's OK is a place for happy girls and guys, bright hair colors, and bouncy curls. We are a friendly family that will welcome you and surround you with care from your very first step into our salon."
            >
              {description}
            </p>
            <button
              className="btn-gradient-blue about-preview__btn"
              data-ru="Узнать больше о нас"
              data-en="Learn more about us"
              onClick={onLearnMore}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;