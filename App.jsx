import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import productsData from './data/products.json';
import './App.css';
import './shop.css';

import Header from './components/Header';
import { BookingModal } from './components/BookingModal';
import { NotificationModal } from './components/NotificationModal';
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
import NotFound from './components/NotFound';

import { ShopPage } from './pages/ShopPage';
import { CartPage } from './pages/CartPage';
import { FavoritesPage } from './pages/FavoritesPage';

// Главная страница передает событие открытия записи на кнопки баннеров и контактов
const MainPage = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  const [lang, setLang] = useState('RU');
  const [theme, setTheme] = useState('light');

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

  const womenServices = [
    { id: 1, name: 'Стрижка модельная', price: 'от 20 руб.' },
    { id: 2, name: 'Стрижка кончиков', price: '15 руб.' },
    { id: 3, name: 'Окрашивание однотонное', price: 'от 60 руб.' },
    { id: 4, name: 'Окрашивание сложное', price: 'от 110 руб.' },
  ];

  const menServices = [
    { id: 1, name: 'Стрижка модельная', price: '15 руб.' },
    { id: 2, name: 'Борода и усы', price: '15 руб.' },
    { id: 3, name: 'Стрижка машинкой', price: '5 руб.' },
    { id: 4, name: 'Камуфлирование седины', price: '25 руб.' },
  ];

  const manicureServices = [
    { id: 1, name: 'Аппаратный маникюр', price: 'от 20 руб.' },
    { id: 2, name: 'Маникюр без покрытия', price: '15 руб.' },
    { id: 3, name: 'Маникюр с покрытием', price: 'от 40 руб.' },
    { id: 4, name: 'Наращивание', price: 'от 60 руб.' },
  ];

  const instagramPosts = [
    { id: 1, img: 'img/inst/1.png', alt: 'Inst 1', overlayText: '@ok_salon_minsk' },
    { id: 2, img: 'img/inst/2.png', alt: 'Inst 2', overlayText: '@ok_salon_minsk' },
    { id: 3, img: 'img/inst/3.png', alt: 'Inst 3', overlayText: 'Перейти в Instagram →' },
    { id: 4, img: 'img/inst/4.png', alt: 'Inst 4', overlayText: '@ok_salon_minsk' },
    { id: 5, img: 'img/inst/5.png', alt: 'Inst 5', overlayText: '@ok_salon_minsk' },
  ];

  const blogPostsData = [
    {
      id: 1,
      title: 'Как ухаживать за волосами зимой',
      date: '15 Января 2026',
      image: 'img/blog/post-1.png',
      link: '#blog-1',
    },
    {
      id: 2,
      title: 'Тренды маникюра этого сезона',
      date: '02 Февраля 2026',
      image: 'img/blog/post-2.png',
      link: '#blog-2',
    },
    {
      id: 3,
      title: 'Актуальный парфюм',
      date: '02 Февраля 2026',
      image: 'img/blog/post-3.png',
      link: '#blog-3',
    },
  ];

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

      <BannerDiscount
        discount="20%"
        onBook={onOpenBooking}
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

      <BannerSeniorDiscount
        discount="30%"
        onBook={onOpenBooking}
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
        onBook={onOpenBooking}
      />
    </div>
  );
};

export function App() {
  const [lang, setLang] = useState('RU');
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [products] = useState(productsData);

  // Состояния для модальных окон
  const [bookingOpen, setBookingOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleToggleFavorite = (product) => {
    setFavorites((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }
      return [...prev, { ...product, count: 1 }];
    });
  };

  const handleToggleLang = () => setLang((prev) => (prev === 'RU' ? 'EN' : 'RU'));
  const handleToggleTheme = () => {
    document.body.classList.toggle('dark-theme');
  };

  // Открытие окна записи
  const handleOpenBooking = () => {
    setBookingOpen(true);
  };

  // Обработка успешной записи из BookingModal
  const handleBookingSuccess = (message) => {
    setNotificationMessage(message);
    setNotificationOpen(true);
  };

  return (
    <>
      {/* Шапка сайта */}
      <Header
        lang={lang}
        favoritesCount={favorites.length}
        cartCount={cart.reduce((sum, item) => sum + item.count, 0)}
        onToggleLang={handleToggleLang}
        onToggleTheme={handleToggleTheme}
        onOpenBooking={handleOpenBooking}
      />

      {/* Основной контент */}
      <main>
        <Routes>
          <Route path="/" element={<MainPage onOpenBooking={handleOpenBooking} />} />

          <Route
            path="/shop"
            element={
              <ShopPage
                products={products}
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
                onAddToCart={handleAddToCart}
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favorites={favorites}
                onToggleFavorite={handleToggleFavorite}
                onAddToCart={handleAddToCart}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                setCart={setCart}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Подвал */}
      <Footer />

      {/* Модальное окно онлайн-записи */}
      <BookingModal
        open={bookingOpen}
        onClose={() => setBookingOpen(false)}
        onSubmitSuccess={handleBookingSuccess}
      />

      {/* Модальное окно уведомления об успехе */}
      <NotificationModal
        isOpen={notificationOpen}
        message={notificationMessage}
        onClose={() => setNotificationOpen(false)}
      />
    </>
  );
}

export default App;