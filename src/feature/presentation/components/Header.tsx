import React from 'react';
import { Search, Bell } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex gap-3">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                        <Bell size={24} className="text-main" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                        <Search size={24} className="text-main" />
                    </button>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-main">متجر شبرا</h1>
            </div>
        </header>
    );
};

export default Header;