import React from 'react';
import './index.css';
import { StoreProvider, useStore } from './feature/presentation/context/StoreContext';
import BottomNavigation from './feature/presentation/components/BottomNavigation';
import Footer from './feature/presentation/components/Footer';
import CartScreen from './feature/presentation/pages/CartScreen';
import HomeScreen from './feature/presentation/pages/HomeScreen';

const AppContent: React.FC = () => {
  const { currentPage } = useStore();

  const pages = [
    <HomeScreen key="home" />,
    <CartScreen key="cart" />,
    <div key="invoices" className="p-4 text-center">الفواتير - قريباً</div>,
    <div key="offers" className="p-4 text-center">العروض - قريباً</div>,
    <div key="settings" className="p-4 text-center">الإعدادات - قريباً</div>,
  ];

  return (
    <div className="bg-gray-100 min-h-screen pt-24 rtl" dir="rtl">
      <BottomNavigation />
      {pages[currentPage]}
      <Footer />
    </div>
  );
};

function App(): JSX.Element {
  return (
    <StoreProvider>
      <AppContent />
    </StoreProvider>
  );
}

export default App;
