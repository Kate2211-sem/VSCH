import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '72px', color: '#FE5B14', marginBottom: '10px' }}>404</h1>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Страница не найдена</h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>
        Извините, запрашиваемая страница не существует или была перемещена.
      </p>
      <Link 
        to="/" 
        style={{
          padding: '12px 24px',
          background: '#FE5B14',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}
      >
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFound;