import React from 'react';

const ContactsMap = ({ 
  title, 
  addressLabel, 
  address, 
  phoneLabel, 
  phone, 
  buttonText, 
  mapLinkText, 
  mapUrl, 
  logoImg, 
  onBook 
}) => {
  return (
    <section className="contacts">
      <div className="container contacts__container">
        <div className="contacts__content">
          <h2 className="contacts__title">{title}</h2>

          <div className="contacts__item">
            <p className="contacts__label">{addressLabel}</p>
            <p className="contacts__info">{address}</p>
          </div>

          <div className="contacts__item">
            <p className="contacts__label">{phoneLabel}</p>
            <p className="contacts__info">{phone}</p>
          </div>

          <button className="btn-gradient contacts__btn" onClick={onBook}>
            {buttonText}
          </button>

          <a
            href="https://yandex.ru/maps"
            target="_blank"
            rel="noreferrer"
            className="map-link"
          >
            {mapLinkText}
          </a>
        </div>

        <div className="contacts__map-wrapper">
          <div id="map" className="contacts__map" style={{ position: 'relative', width: '100%', height: '100%' }}>
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen={true}
              style={{ display: 'block', border: 'none' }}
              title="Yandex Map"
            ></iframe>

            <div className="map-marker">
              <img src={logoImg} alt="OK!" />
              <span>{address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsMap;