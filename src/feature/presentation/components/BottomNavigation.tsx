import React from 'react';
import { Home, ShoppingCart, FileText, Rocket, Settings } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const BottomNavigation: React.FC = () => {
    const { currentPage, setCurrentPage, totalItems } = useStore();

    const pages = [
        { name: 'الرئيسية', icon: Home },
        { name: 'السلة', icon: ShoppingCart },
        { name: 'الفواتير', icon: FileText },
        { name: 'العروض', icon: Rocket },
        { name: 'الإعدادات', icon: Settings },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="bg-second mx-4 mt-4 rounded-[30px] shadow-2xl backdrop-blur-lg">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo with main color filter */}
                        <div className="flex-shrink-0 mr-6">
                            <img
                                src="src/assets/shubra logo.svg"
                                alt="Shobra Store Logo"
                                className="bg-second h-8 w-auto md:h-10 lg:h-12 object-contain"
                                style={{
                                    maxWidth: '160px',
                                    width: 'auto',
                                    height: 'auto',
                                    maxHeight: '50px'
                                }}
                                onError={(e) => {
                                    // Fallback if image fails to load
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';

                                    // Create a fallback div with text
                                    const fallback = document.createElement('div');
                                    fallback.className = 'bg-main rounded-lg md:rounded-xl flex items-center justify-center px-4 py-2 shadow-lg';
                                    fallback.innerHTML = '<span class="text-second text-lg md:text-xl font-bold">شبرا ستور</span>';
                                    target.parentNode?.insertBefore(fallback, target.nextSibling);
                                }}
                            />
                        </div>

                        {/* Navigation Links - Expanded to take space */}
                        <nav className="flex-1 flex items-center justify-end">
                            <div className="flex items-center gap-1 md:gap-3 lg:gap-4">
                                {pages.map((page, index) => {
                                    const Icon = page.icon;
                                    const isActive = currentPage === index;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentPage(index)}
                                            className={`relative flex flex-col items-center gap-1 px-3 md:px-5 py-2 rounded-2xl transition-all duration-300 active:scale-95 group ${isActive
                                                ? 'bg-main shadow-lg scale-105'
                                                : 'hover:bg-blue/10'
                                                }`}
                                            aria-label={page.name}
                                            aria-current={isActive ? 'page' : undefined}
                                        >
                                            {/* Icon */}
                                            <div className="relative">
                                                <Icon
                                                    size={22}
                                                    className={`transition-colors ${isActive
                                                        ? 'text-second'
                                                        : 'text-main group-hover:text-main'
                                                        }`}
                                                />

                                                {/* Cart Badge */}
                                                {index === 1 && totalItems > 0 && (
                                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-pulse">
                                                        {totalItems}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Label */}
                                            <span
                                                className={`text-xs font-bold transition-colors hidden md:block ${isActive
                                                    ? 'text-second'
                                                    : 'text-main group-hover:text-main'
                                                    }`}
                                            >
                                                {page.name}
                                            </span>

                                            {/* Active Indicator */}
                                            {isActive && (
                                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-second rounded-full md:hidden" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Decorative Bottom Border */}
                <div className="h-1 bg-gradient-to-r from-transparent via-blue/20 to-transparent" />
            </div>

            {/* Spacer to prevent content from going under header */}
            <div className="h-20 md:h-24" />
        </header>
    );
};

export default BottomNavigation;