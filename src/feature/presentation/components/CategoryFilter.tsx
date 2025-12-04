import React from 'react';
import { useStore } from '../context/StoreContext';

const CategoryFilter: React.FC = () => {
    const { selectedCategory, getCategoryProducts } = useStore();

    const categories = [
        { label: 'كل المنتجات', value: null },
        { label: 'ملابس رجالي', value: "men's clothing" },
        { label: 'ملابس حريمي', value: "women's clothing" },
        { label: 'الكترونيات', value: 'electronics' },
        { label: 'اكسسوارات', value: 'jewelery' },
    ];

    return (
        <div className="flex justify-center mb-8">
            <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide max-w-[1348px] px-4">
                {categories.map((cat) => (
                    <button
                        key={cat.label}
                        onClick={() => getCategoryProducts(cat.value)}
                        className={`px-4 md:px-6 py-2 md:py-2.5 rounded-2xl border-2 font-bold text-xs md:text-sm whitespace-nowrap transition-all active:scale-95 ${selectedCategory === cat.value
                            ? 'bg-main text-white border-main shadow-lg'
                            : 'bg-white text-main border-main hover:bg-blue-50 shadow'
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;