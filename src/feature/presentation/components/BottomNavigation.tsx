import React, { useEffect, useState } from 'react';
import { Home, ShoppingCart, FileText, Rocket, Settings, Menu, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const BottomNavigation: React.FC = () => {
    const { currentPage, setCurrentPage, totalItems } = useStore();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pages = [
        { name: 'الرئيسية', icon: Home },
        { name: 'السلة', icon: ShoppingCart },
        { name: 'الفواتير', icon: FileText },
        { name: 'العروض', icon: Rocket },
        { name: 'الإعدادات', icon: Settings },
    ];

    const handlePageClick = (index: number) => {
        setCurrentPage(index);
        setIsMenuOpen(false);
    };

    useEffect(() => {
        // lock body scroll when mobile menu is open
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMenuOpen(false); };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [isMenuOpen]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="bg-main mx-4 mt-4 rounded-[30px] shadow-2xl backdrop-blur-lg">
                <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex justify-start order-1">
                        <div className="flex items-center gap-2 md:gap-3">
                            {/* Icon Container */}
                            <div className="bg-blue/20 backdrop-blur-sm rounded-2xl p-2.5 md:p-3 shadow-lg border border-white/10">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="text-main"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <line
                                        x1="3"
                                        y1="6"
                                        x2="21"
                                        y2="6"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M16 10a4 4 0 0 1-8 0"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            {/* Text */}
                            <div className="flex flex-col">
                                <h1 className="text-xl md:text-2xl font-bold text-main leading-tight">
                                    شبرا الطائف
                                </h1>
                                <p className="text-xs text-main/70 hidden md:block">
                                    Shobra Store
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 items-center justify-end">
                        <div className="flex items-center gap-1 md:gap-3 lg:gap-4">
                            {pages.map((page, index) => {
                                const Icon = page.icon;
                                const isActive = currentPage === index;
                                return (
                                    <button
                                        key={index}
                                        onClick={() => handlePageClick(index)}
                                        className={`relative flex flex-col items-center gap-1 px-3 md:px-5 py-2 rounded-2xl transition-all duration-300 active:scale-95 group ${isActive ? 'bg-main shadow-lg scale-105' : 'hover:bg-blue/10'}`}
                                        aria-label={page.name}
                                    >
                                        <div className="relative">
                                            <Icon size={22} className={`transition-colors ${isActive ? 'text-second' : 'text-main group-hover:text-main'}`} />
                                            {index === 1 && totalItems > 0 && (
                                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-pulse">
                                                    {totalItems}
                                                </span>
                                            )}
                                        </div>
                                        <span className={`text-xs font-bold transition-colors ${isActive ? 'text-second' : 'text-main'}`}>{page.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            className="p-2 rounded-lg bg-main text-second transition-colors hover:bg-blue-700"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                <div className="h-1 bg-gradient-to-r from-transparent via-blue/20 to-transparent" />
            </div>

            {/* Mobile full-screen overlay menu */}
            <div
                className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                aria-hidden={!isMenuOpen}
            >
                {/* backdrop */}
                <div
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsMenuOpen(false)}
                />
                {/* panel */}
                <div className={`absolute inset-x-4 top-20 rounded-2xl bg-second/95 shadow-2xl mx-auto max-w-lg transform transition-all duration-300 ${isMenuOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-[-10px] scale-95 opacity-0'}`}>
                    <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <img src="/logo.png" alt="logo" className="w-28 h-auto object-contain" onError={(e) => { (e.target as HTMLImageElement).src = 'https://via.placeholder.com/160x50?text=Shobra'; }} />
                                <span className="font-bold text-lg text-main">شبرا</span>
                            </div>
                            <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-md bg-main text-second"><X size={20} /></button>
                        </div>

                        <div className="flex flex-col gap-3">
                            {pages.map((page, index) => {
                                const Icon = page.icon;
                                const isActive = currentPage === index;
                                return (
                                    <button
                                        key={index}
                                        onClick={() => handlePageClick(index)}
                                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-right transition ${isActive ? 'bg-main text-second' : 'bg-white/5 text-main hover:bg-white/10'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon size={20} className={`${isActive ? 'text-second' : 'text-main'}`} />
                                            <span className="font-medium">{page.name}</span>
                                        </div>
                                        {index === 1 && totalItems > 0 && (
                                            <span className="bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                                                {totalItems}
                                            </span>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer to preserve layout */}
            <div className="h-20 md:h-24" />
        </header>
    );
};

export default BottomNavigation;