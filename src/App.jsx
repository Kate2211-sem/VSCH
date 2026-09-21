import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import './shop.css';

// Импорт ВСЕХ компонентов из папки components
import Header from './components/Header';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import Services from './components/Services';
import MenHall from './components/MenHall';
import Manicure from './components/Manicure';
import BannerDiscount from './components/BannerDiscount';
import BannerSeniorDiscount from './components/BannerSeniorDiscount';
import AboutPreview from './components/AboutPreview';
import CosmeticsShop from './components/CosmeticsShop';
import BeautyBlog from './components/BeautyBlog';
import InstagramFeed from './components/InstagramFeed';
import ContactsMap from './components/ContactsMap';
import Footer from './components/Footer';
import { ShopPage } from './pages/ShopPage';

// Компонент страницы 404
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

// Главная страница со всем вашим содержимым
const MainPage = () => {
  const navigate = useNavigate();

  // Состояния
  const [lang, setLang] = useState('RU');
  const [theme, setTheme] = useState('light');

  // Данные для InfoCards
  const infoCardsData = [
    {
      id: 1,
      modifier: 'info-card--phone',
      icon: '/img/hero/phone.png',
      iconAlt: 'Телефон',
      title: '+375 25 655-44-33',
      subtitle: 'Запись и информация',
      subtitleEn: 'Booking & Info',
      titleLight: false,
    },
    {
      id: 2,
      modifier: 'info-card--accent',
      icon: '/img/hero/location.png',
      iconAlt: 'Адрес',
      title: 'Ул. Ленинградская, 10',
      titleEn: '10 Leningradskaya St.',
      subtitle: 'Вход со двора',
      subtitleEn: 'Entrance from courtyard',
      titleLight: true,
    },
    {
      id: 3,
      modifier: 'info-card--hours',
      icon: '/img/hero/clock.png',
      iconAlt: 'Время',
      title: '9:00 - 21:00',
      subtitle: 'Ежедневно',
      subtitleEn: 'Daily',
      titleLight: false,
    },
  ];

  // Услуги Женский зал
  const womenServices = [
    { id: 1, name: 'Стрижка модельная', price: 'от 20 руб.' },
    { id: 2, name: 'Стрижка кончиков', price: '15 руб.' },
    { id: 3, name: 'Окрашивание однотонное', price: 'от 60 руб.' },
    { id: 4, name: 'Окрашивание сложное', price: 'от 110 руб.' },
  ];

  // Услуги Мужской зал
  const menServices = [
    { id: 1, name: 'Стрижка модельная', price: '15 руб.' },
    { id: 2, name: 'Борода и усы', price: '15 руб.' },
    { id: 3, name: 'Стрижка машинкой', price: '5 руб.' },
    { id: 4, name: 'Камуфлирование седины', price: '25 руб.' },
  ];

  // Услуги Маникюр
  const manicureServices = [
    { id: 1, name: 'Аппаратный маникюр', price: 'от 20 руб.' },
    { id: 2, name: 'Маникюр без покрытия', price: '15 руб.' },
    { id: 3, name: 'Маникюр с покрытием', price: 'от 40 руб.' },
    { id: 4, name: 'Наращивание', price: 'от 60 руб.' },
  ];

  // Посты Instagram
  const instagramPosts = [
    { id: 1, img: 'img/inst/1.png', alt: 'Inst 1', overlayText: '@ok_salon_minsk' },
    { id: 2, img: 'img/inst/2.png', alt: 'Inst 2', overlayText: '@ok_salon_minsk' },
    { id: 3, img: 'img/inst/3.png', alt: 'Inst 3', overlayText: 'Перейти в Instagram →' },
    { id: 4, img: 'img/inst/4.png', alt: 'Inst 4', overlayText: '@ok_salon_minsk' },
    { id: 5, img: 'img/inst/5.png', alt: 'Inst 5', overlayText: '@ok_salon_minsk' },
  ];

  // Статьи для блога BeautyBlog
  const blogPostsData = [
    {
      id: 1,
      title: 'Как ухаживать за волосами зимой',
      date: '15 Января 2026',
      image: 'img/blog/post-1.png',
      link: '#blog-1'
    },
    {
      id: 2,
      title: 'Тренды маникюра этого сезона',
      date: '02 Февраля 2026',
      image: 'img/blog/post-2.png',
      link: '#blog-2'
    },
    {
      id: 3,
      title: 'Актуальный парфюм',
      date: '02 Февраля 2026',
      image: 'img/blog/post-3.png',
      link: '#blog-3'
    }
  ];

  // Обработчики
  const handleOpenBooking = () => alert('Открытие записи');
  
  // Мягкий переход на страницу /shop без перезагрузки
  const handleGoToShop = () => { 
    navigate('/shop'); 
  };

  const handleResetSettings = () => {
    setLang('RU');
    setTheme('light');
    document.body.classList.remove('dark-theme');
  };

  return (
    <div className={`app theme-${theme}`}>
      <Hero
        onGoToShop={handleGoToShop}
        onResetSettings={handleResetSettings}
      />

      <InfoCards cards={infoCardsData} />

      {/* Баннер для новых клиентов */}
      <BannerDiscount 
        discount="20%" 
        onBook={handleOpenBooking} 
        target="Новым клиентам"
        buttonText="Записаться"
      />

      <Services
        services={womenServices}
        onViewPrices={() => alert('Показать цены женского зала')}
      />

      <MenHall
        services={menServices}
        onViewPrices={() => alert('Показать цены мужского зала')}
      />

      <Manicure
        services={manicureServices}
        onViewPrices={() => alert('Показать цены на маникюр')}
      />

      {/* Баннер для пенсионеров */}
      <BannerSeniorDiscount 
        discount="30%" 
        onBook={handleOpenBooking} 
        subtitle="Акция действует ежедневно!"
        target="Дарим скидку пенсионерам"
        buttonText="Записаться"
      />

      <AboutPreview />

      <CosmeticsShop onGoToShop={handleGoToShop} />

      <BeautyBlog
        title="Блог и советы"
        linkText="Читать все"
        readMoreText="Читать далее"
        posts={blogPostsData}
      />

      <InstagramFeed posts={instagramPosts} />

      <ContactsMap
        title="Контакты"
        addressLabel="Адрес:"
        address="Минск, Ленинградская 10"
        phoneLabel="Телефон:"
        phone="+375 25 655-44-33"
        buttonText="Записаться онлайн"
        mapLinkText="Открыть на карте"
        mapUrl="https://yandex.by/maps/-/CDx..."
        onBook={() => console.log('Запись')}
      />
    </div>
  );
};

export function App() {
  const [lang, setLang] = useState('RU');
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  const handleToggleLang = () => setLang((prev) => (prev === 'RU' ? 'EN' : 'RU'));
  const handleToggleTheme = () => {
    document.body.classList.toggle('dark-theme');
  };
  const handleOpenBooking = () => alert('Открытие записи');

  return (
    <>
      {/* Общая шапка сайта для всех страниц */}
      <Header
        lang={lang}
        favoritesCount={favoritesCount}
        cartCount={cartCount}
        onToggleLang={handleToggleLang}
        onToggleTheme={handleToggleTheme}
        onOpenBooking={handleOpenBooking}
      />

      <main>
        <Routes>
          {/* Главная страница с лендингом */}
          <Route path="/" element={<MainPage />} />
          
          {/* Страница магазина */}
          <Route path="/shop" element={<ShopPage />} />

          {/* Страница 404 для несуществующих адресов */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Общий подвал сайта */}
      <Footer />
    </>
  );
}

export default App;