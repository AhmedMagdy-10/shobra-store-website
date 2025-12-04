import React, { useState } from 'react';
import { X, Heart, Plus, Minus, Share2, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../data/models/product';
import { useStore } from '../context/StoreContext';

interface ProductDetailsModalProps {
    product: Product;
    onClose: () => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ product, onClose }) => {
    const [quantity, setQuantity] = useState(1);
    const [isFavorite, setIsFavorite] = useState(false);
    const { addToCart } = useStore();

    const handleAddToCart = () => {
        const productId = (product as any).id ?? (product as any).productId ?? Date.now();
        const cartItem = {
            productId: Number(productId),
            title: product.title,
            price: Number(product.price),
            quantity,
            category: product.category,
            image: product.image,
        };
        addToCart(cartItem);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-0 md:p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-t-3xl md:rounded-3xl w-full md:max-w-2xl max-h-[85vh] overflow-y-auto"
                onClick={e => e.stopPropagation()}
            >
                {/* Handle Bar */}
                <div className="flex justify-center pt-3 pb-2">
                    <div className="w-12 h-1 bg-gray-300 rounded-full" />
                </div>

                {/* Product Image */}
                <div className="relative h-72 bg-gradient-to-b from-blue-50 to-white">
                    <img src={product.image} alt={product.title} className="w-full h-full object-contain p-8" />

                    <button
                        onClick={onClose}
                        className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
                    >
                        <X size={20} />
                    </button>

                    <button
                        onClick={() => setIsFavorite(!isFavorite)}
                        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition"
                    >
                        <Heart size={20} className={isFavorite ? 'fill-red-500 text-red-500' : ''} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 text-right">
                    {/* Category & Rating */}
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-1 bg-amber-50 px-3 py-1.5 rounded-full">
                            <Star size={16} className="fill-amber-400 text-amber-400" />
                            <span className="font-bold text-sm">{product.rating.rate}</span>
                            <span className="text-xs text-gray-500">({product.rating.count})</span>
                        </div>

                        <div className="bg-blue-50 px-3 py-1.5 rounded-full">
                            <span className="text-xs font-bold text-main">{product.category.toUpperCase()}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold mb-4">{product.title}</h2>

                    {/* Price & Quantity */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2 border-2 border-gray-300 rounded-full">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition"
                            >
                                <Minus size={16} className="text-main" />
                            </button>
                            <span className="font-bold px-4">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition"
                            >
                                <Plus size={16} className="text-main" />
                            </button>
                        </div>

                        <div className="text-right">
                            <p className="text-xs text-gray-500">السعر</p>
                            <p className="text-3xl font-bold text-main">${(product.price * quantity).toFixed(2)}</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-2">الوصف</h3>
                        <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                        <h3 className="text-lg font-bold mb-3">المميزات</h3>
                        <div className="space-y-3">
                            {['ضمان الجودة', 'شحن مجاني', 'إرجاع خلال 30 يوم', 'دعم فني 24/7'].map(feature => (
                                <div key={feature} className="flex items-center gap-3 justify-end">
                                    <span className="text-gray-600">{feature}</span>
                                    <div className="bg-blue-50 p-2 rounded-lg">
                                        <ShoppingCart size={16} className="text-main" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <button className="p-3 border-2 border-main rounded-2xl hover:bg-blue-50 transition">
                            <Share2 size={20} className="text-main" />
                        </button>

                        <button
                            onClick={handleAddToCart}
                            className="flex-1 bg-main text-white font-bold py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-700 transition"
                        >
                            <ShoppingCart size={20} />
                            أضف إلى السلة
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsModal;