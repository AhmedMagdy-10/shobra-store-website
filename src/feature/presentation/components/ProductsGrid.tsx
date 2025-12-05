import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import type { Product } from 'src/feature/data/models/product';
import { useStore } from '../context/StoreContext';

interface ProductsGridProps {
    products: Product[];
    onProductClick: (product: Product) => void;
    loading: boolean;
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products, onProductClick, loading }) => {
    const { addToCart } = useStore();
    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    // Get quantity for a product (default 1)
    const getQuantity = (productId: number) => quantities[productId] || 1;

    // Increase quantity
    const increaseQuantity = (productId: number, e: React.MouseEvent) => {
        e.stopPropagation();
        setQuantities(prev => ({
            ...prev,
            [productId]: getQuantity(productId) + 1
        }));
    };

    // Decrease quantity
    const decreaseQuantity = (productId: number, e: React.MouseEvent) => {
        e.stopPropagation();
        const currentQty = getQuantity(productId);
        if (currentQty > 1) {
            setQuantities(prev => ({
                ...prev,
                [productId]: currentQty - 1
            }));
        }
    };

    const [showQuantityNumber, setShowQuantityNumber] = useState<{ [key: number]: boolean }>({});

    // Add to cart with quantity
    const handleAddToCart = (product: Product, e: React.MouseEvent) => {
        e.stopPropagation();
        const quantity = getQuantity(product.id);

        // Map Product to CartItem
        const cartItem = {
            productId: product.id,
            title: product.title,
            price: product.price,
            quantity: quantity,
            category: product.category,
            image: product.image,
        };

        addToCart(cartItem);

        // Reset quantity to 1 after adding
        setQuantities(prev => ({
            ...prev,
            [product.id]: 1
        }));
    };

    if (loading) {
        return (
            <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-main mx-auto"></div>
                <p className="text-gray-500 mt-4">جاري التحميل...</p>
            </div>
        );
    }

    if (products.length === 0) {
        return (
            <div className="text-center py-8">
                <ShoppingCart size={64} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">لا توجد منتجات</p>
            </div>
        );
    }

    // Add this state to track when to show quantity number

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {products.map(product => (
                <div
                    key={product.id}
                    onClick={() => onProductClick(product)}
                    className="bg-white rounded-2xl p-3 shadow-lg hover:shadow-xl transition-all cursor-pointer group flex flex-col h-full"
                >
                    {/* Product Image */}
                    <div className="relative flex-grow">
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-28 sm:h-32 md:h-36 lg:h-44 object-contain mb-2 bg-gray-50 rounded-lg p-2 group-hover:scale-105 transition-transform"
                            onError={(e) => {
                                e.currentTarget.src = 'https://via.placeholder.com/100?text=No+Image';
                            }}
                        />
                    </div>

                    {/* Product Info */}
                    <div className="text-right mb-3">
                        <h3 className="text-sm font-bold line-clamp-2 mb-1">{product.title}</h3>
                        <p className="text-xs text-gray-500 mb-2">{product.category}</p>
                        <p className="text-lg font-bold text-main mb-3">${product.price.toFixed(2)}</p>
                    </div>


                    {/* Action Buttons - Responsive for mobile */}


                    {/* Action Buttons */}
                    <div className="flex justify-between items-center gap-3 mt-auto w-full">
                        {/* Quantity Control - Hidden on mobile, visible from sm screens */}
                        <div className="hidden sm:flex items-center bg-white border-2 border-main rounded-xl overflow-hidden flex-1">
                            <button
                                onClick={(e) => {
                                    decreaseQuantity(product.id, e);
                                    setShowQuantityNumber(prev => ({ ...prev, [product.id]: true }));
                                    setTimeout(() => {
                                        setShowQuantityNumber(prev => ({ ...prev, [product.id]: false }));
                                    }, 2000);
                                }}
                                className="p-2 hover:bg-blue-50 active:bg-blue-100 transition-colors group/btn"
                                aria-label="تقليل الكمية"
                            >
                                <div className="w-6 h-6 rounded-full bg-main flex items-center justify-center">
                                    <Minus size={14} className="text-white group-hover/btn:scale-110 transition-transform" />
                                </div>
                            </button>

                            {/* Clickable text that toggles and shows quantity on change */}
                            <div
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowQuantityNumber(prev => ({
                                        ...prev,
                                        [product.id]: !prev[product.id]
                                    }));
                                }}
                                className="flex-1 flex items-center justify-center cursor-pointer"
                            >
                                <span className={`text-sm font-medium transition-all duration-300 ${showQuantityNumber[product.id] ? 'text-main font-bold' : 'text-gray-500 hover:text-main'
                                    }`}>
                                    {showQuantityNumber[product.id] ? getQuantity(product.id) : 'الكميه'}
                                </span>
                            </div>

                            <button
                                onClick={(e) => {
                                    increaseQuantity(product.id, e);
                                    setShowQuantityNumber(prev => ({ ...prev, [product.id]: true }));
                                    setTimeout(() => {
                                        setShowQuantityNumber(prev => ({ ...prev, [product.id]: false }));
                                    }, 2000);
                                }}
                                className="p-2 hover:bg-blue-50 active:bg-blue-100 transition-colors group/btn"
                                aria-label="زيادة الكمية"
                            >
                                <div className="w-6 h-6 rounded-full bg-main flex items-center justify-center">
                                    <Plus size={14} className="text-white group-hover/btn:scale-110 transition-transform" />
                                </div>
                            </button>
                        </div>

                        {/* Add to Cart Button - Full width on mobile, normal width on desktop */}
                        <button
                            onClick={(e) => handleAddToCart(product, e)}
                            className="bg-main text-white px-4 py-2 rounded-xl hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-1 font-bold text-sm whitespace-nowrap shadow-md hover:shadow-lg w-full sm:w-auto sm:flex-1"
                            aria-label="أضف للسلة"
                        >
                            <ShoppingCart size={16} />
                            <span className="hidden sm:inline">أضف للسلة</span>
                            <span className="sm:hidden">إضافة</span>
                        </button>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ProductsGrid;