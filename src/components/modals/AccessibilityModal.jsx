export default function AccessibilityModal() {
  return (
    <div className="accessibility-modal" id="accessibility-modal">
      <div className="accessibility-modal__backdrop" id="accessibility-backdrop"></div>
      <div className="accessibility-modal__panel">
        <div className="accessibility-modal__header">
          <h2 className="accessibility-modal__title" data-ru="Настройки доступности" data-en="Accessibility Settings">
            Настройки доступности
          </h2>
          <button className="accessibility-modal__close-x" id="accessibility-close-x">
            &times;
          </button>
        </div>

        <div className="accessibility-modal__section">
          <h3 className="accessibility-modal__label" data-ru="Размер шрифта" data-en="Font Size">
            Размер шрифта
          </h3>
          <div className="accessibility-modal__options" id="a11y-font-size">
            <label className="accessibility-modal__option">
              <input className="radio" type="radio" name="a11y-font" value="normal" defaultChecked />
              <span className="accessibility-modal__option-text" style={{ fontSize: '1em' }} data-ru="Стандартный (Aa)" data-en="Standard (Aa)">
                Стандартный (Aa)
              </span>
            </label>
            <label className="accessibility-modal__option">
              <input className="radio" type="radio" name="a11y-font" value="large" />
              <span className="accessibility-modal__option-text" style={{ fontSize: '1.1em' }} data-ru="Средний (Aa+)" data-en="Medium (Aa+)">
                Средний (Aa+)
              </span>
            </label>
            <label className="accessibility-modal__option">
              <input className="radio" type="radio" name="a11y-font" value="xlarge" />
              <span className="accessibility-modal__option-text" style={{ fontSize: '1.2em' }} data-ru="Крупный (Aa++)" data-en="Large (Aa++)">
                Крупный (Aa++)
              </span>
            </label>
          </div>
        </div>

        <div className="accessibility-modal__section">
          <h3 className="accessibility-modal__label" data-ru="Цветовая схема" data-en="Color Scheme">
            Цветовая схема
          </h3>
          <div className="accessibility-modal__options accessibility-modal__options--schemes" id="a11y-color-scheme">
            <label className="accessibility-modal__option">
              <input className="radio" type="radio" name="a11y-scheme" value="default" defaultChecked />
              <span className="accessibility-modal__swatch accessibility-modal__swatch--default">Aa</span>
              <span className="accessibility-modal__option-text" data-ru="Обычная тема" data-en="Default theme">
                Обычная тема
              </span>
            </label>
            <label className="accessibility-modal__option">
              <input className="radio" type="radio" name="a11y-scheme" value="black-white" />
              <span className="accessibility-modal__swatch accessibility-modal__swatch--black-white">Aa</span>
              <span className="accessibility-modal__option-text" data-ru="Чёрным по белому" data-en="Black on white">
                Чёрным по белому
              </span>
            </label>
            <label className="accessibility-modal__option">
              <input className="radio" type="radio" name="a11y-scheme" value="white-black" />
              <span className="accessibility-modal__swatch accessibility-modal__swatch--white-black">Aa</span>
              <span className="accessibility-modal__option-text" data-ru="Белым по чёрному" data-en="White on black">
                Белым по чёрному
              </span>
            </label>
            <label className="accessibility-modal__option">
              <input className="radio" type="radio" name="a11y-scheme" value="blue-darkblue" />
              <span className="accessibility-modal__swatch accessibility-modal__swatch--blue-darkblue">Aa</span>
              <span className="accessibility-modal__option-text" data-ru="Синим по голубому" data-en="Blue on light blue">
                Синим по голубому
              </span>
            </label>
          </div>
        </div>

        <div className="accessibility-modal__section">
          <label className="accessibility-modal__option">
            <input className="checkbox" type="checkbox" id="a11y-images-toggle" />
            <span className="accessibility-modal__option-text" style={{ fontWeight: 600 }} data-ru="Выключить изображения (показывать текст)" data-en="Turn off images (show text)">
              Выключить изображения (показывать текст)
            </span>
          </label>
        </div>

        <div className="accessibility-modal__actions">
          <button className="btn-secondary" id="accessibility-reset" data-ru="Сбросить" data-en="Reset">
            Сбросить
          </button>
          <button className="btn-primary" id="accessibility-apply-btn" data-ru="Применить" data-en="Apply">
            Применить
          </button>
        </div>
      </div>
    </div>
  );
}