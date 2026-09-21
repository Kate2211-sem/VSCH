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
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A2a8fee646bd1c6f9440f3b70db2c16fc4ebfaf5bff9ba9ec078bc1e757386d17&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>

            <div className="map-marker">
              
              <span>{address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsMap;