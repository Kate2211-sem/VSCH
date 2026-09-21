import React from 'react';

const AboutPreview = ({ 
  title, 
  description, 
  imageSrc, 
  buttonText, 
  onLearnMore 
}) => {
  return (
    <section className="about-preview">
      <div className="container">
        <div className="about-preview__content">
          <div className="about-preview__image-block">
            <div className="about-preview__circle"></div>
            <img src={imageSrc} alt={title} />
          </div>

          <div className="about-preview__text-block">
            <h2 className="about-preview__title">
              {title}
            </h2>
            <p className="about-preview__desc">
              {description}
            </p>
            <button
              className="btn-gradient-blue about-preview__btn"
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