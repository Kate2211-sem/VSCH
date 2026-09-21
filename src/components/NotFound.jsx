import React from 'react';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '120px 20px', minHeight: '60vh' }}>
      <h1 style={{ fontSize: '96px', color: '#fe5b14', margin: 0 }}>404</h1>
      <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Страница не найдена</h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Запрашиваемая страница не существует или была перемещена.
      </p>
      <a 
        href="/" 
        className="btn-gradient" 
        style={{ textDecoration: 'none', display: 'inline-block', padding: '12px 30px' }}
      >
        На главную
      </a>
    </div>
  );
};

export default NotFound;