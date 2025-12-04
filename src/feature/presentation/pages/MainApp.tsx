import React from 'react';
import { FileText, Rocket, Settings } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import PlaceholderScreen from './PlaceholderScreen';

const MainApp: React.FC = () => {
    const { currentPage } = useStore();

    const pages = [
        { component: <HomeScreen /> },
        { component: <CartScreen /> },
        { component: <PlaceholderScreen title="الفواتير" icon={<FileText size={80} />} /> },
        { component: <PlaceholderScreen title="العروض" icon={<Rocket size={80} />} /> },
        { component: <PlaceholderScreen title="الإعدادات" icon={<Settings size={80} />} /> },
    ];

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            <Header />
            <main className="max-w-7xl mx-auto">
                {pages[currentPage].component}
            </main>
            <BottomNavigation />
        </div>
    );
};

export default MainApp;