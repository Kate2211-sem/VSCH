export default function QuickViewModal() {
  return (
    <div id="quick-view-modal" className="modal-overlay" style={{ display: 'none' }}>
      <div className="modal-content">
        <button className="modal-close" onClick={() => window.closeModal && window.closeModal()}>
          &times;
        </button>
        <div id="modal-body"></div>
      </div>
    </div>
  );
}