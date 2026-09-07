export default function PriceModal() {
  return (
    <div id="price-modal" className="price-modal">
      <div className="price-modal__container">
        <button className="price-modal__close" id="price-modal-close">
          &times;
        </button>
        <div className="price-modal__content">
          <h2 className="price-modal__title" id="price-modal-title" data-ru="Прайс-лист" data-en="Price List">
            Прайс-лист
          </h2>
          <div className="price-modal__table-wrapper">
            <table className="price-modal__table">
              <thead>
                <tr>
                  <th data-ru="Услуга" data-en="Service">Услуга</th>
                  <th data-ru="Время" data-en="Time">Время</th>
                  <th data-ru="Стоимость" data-en="Price">Стоимость</th>
                </tr>
              </thead>
              <tbody id="price-modal-body"></tbody>
            </table>
          </div>
          <div className="price-modal__actions">
            <button className="btn-gradient" id="price-modal-book" data-ru="Записаться на эту услугу" data-en="Book this service">
              Записаться онлайн
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}