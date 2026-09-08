import { useEffect } from 'react';
import './App.css';


import Header from './components/Header';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import Services from './components/Services';
import BannerDiscount from './components/BannerDiscount';
import MenHall from './components/MenHall';
import Manicure from './components/Manicure';
import CosmeticsShop from './components/CosmeticsShop';
import BannerSeniorDiscount from './components/BannerSeniorDiscount';
import AboutPreview from './components/AboutPreview';
import BeautyBlog from './components/BeautyBlog';
import InstagramFeed from './components/Instagram';
import ContactsMap from './components/ContactsMap';
import Footer from './components/Footer';


import AccessibilityModal from './components/modals/AccessibilityModal';
import ToastNotification from './components/modals/ToastNotification';
import QuickViewModal from './components/modals/QuickViewModal';
import PriceModal from './components/modals/PriceModal';

function App() {
  useEffect(() => {
    
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user && user.role === 'admin') {
      const heroButtons = document.querySelector('.hero-buttons');
      if (heroButtons) {
        const alreadyExists = heroButtons.querySelector('a[href="admin-orders.html"]');
        if (!alreadyExists) {
          const adminLink = document.createElement('a');
          adminLink.href = 'admin-orders.html';
          adminLink.className = 'btn-secondary';
          adminLink.textContent = '⚙️ Управление';
          adminLink.style.cssText = 'margin-left: 10px; background: #22c55e; color: #fff;';
          heroButtons.appendChild(adminLink);
        }
      }
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <InfoCards />
        <Services />
        <BannerDiscount />
        <MenHall />
        <Manicure />
        <CosmeticsShop />
        <BannerSeniorDiscount />
        <AboutPreview />
        <BeautyBlog />
        <Instagram />
        <ContactsMap />
      </main>
      <Footer />

      {/* Модальные окна и уведомления */}
      <AccessibilityModal />
      <ToastNotification />
      <QuickViewModal />
      <PriceModal />
    </div>
  );
}

export default App;