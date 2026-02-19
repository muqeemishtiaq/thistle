import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import HelpPage from './pages/HelpPage';
import ContactPage from './pages/ContactPage';
import OrderPage from './pages/OrderPage';
import './App.css';

const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const getPageName = (pathname) => {
    if (pathname === '/') return 'home';
    if (pathname === '/about') return 'about';
    if (pathname === '/services') return 'services';
    if (pathname.startsWith('/services/')) return 'service-detail';
    if (pathname === '/help') return 'help';
    if (pathname === '/contact') return 'contact';
    if (pathname === '/order') return 'order';
    return 'home';
  };

  return (
    <div style={{ perspective: 'none', overflow: 'hidden' }}>
      <Navbar currentPage={getPageName(location.pathname)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceName" element={<ServiceDetailPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
