export default function ToastNotification() {
  return (
    <div id="toast-notification" className="toast-notification">
      <div className="toast-content">
        <div className="toast-icon">✓</div>
        <div className="toast-message">
          <strong className="toast-title">Добавлено!</strong>
          <span className="toast-text">Товар добавлен в корзину</span>
        </div>
        <button className="toast-close" onClick={() => window.hideToast && window.hideToast()}>
          &times;
        </button>
      </div>
      <div className="toast-actions">
        <button className="toast-btn toast-btn-secondary" onClick={() => window.hideToast && window.hideToast()}>
          Продолжить
        </button>
        <button className="toast-btn toast-btn-primary" onClick={() => window.goToCart && window.goToCart()}>
          В корзину
        </button>
      </div>
    </div>
  );
}