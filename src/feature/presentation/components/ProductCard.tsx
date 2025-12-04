import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../../data/models/product';
import { useStore } from '../context/StoreContext';
import ProductDetailsModal from './ProductDetailsModal';


const ProductCard: React.FC<{ product: Product; onClick?: () => void }> = ({ product, onClick }) => {
    const [showDetails, setShowDetails] = useState(false);
    const { addToCart } = useStore();

    const handleAdd = (e: React.MouseEvent) => {
        e.stopPropagation();
        const cartItem = {
            productId: product.id,
            title: product.title,
            price: Number(product.price),
            quantity: 1,
            category: product.category,
            image: product.image,
        };
        addToCart(cartItem);
    };

    return (
        <>
            <div
                onClick={onClick}
                className="bg-white rounded-2xl border-2 border-blue-500 p-3 cursor-pointer hover:shadow-xl transition-shadow"
            >
                <div className="relative bg-gray-50 rounded-xl p-2 h-32 mb-2">
                    <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                    <button className="absolute top-1 left-1 bg-white p-1.5 rounded-full shadow hover:bg-gray-100 transition">
                        <Heart size={18} />
                    </button>
                </div>

                <h3 className="text-sm font-bold text-right line-clamp-2 mb-2 min-h-[2.5rem]">
                    {product.title}
                </h3>

                <p className="text-lg font-bold text-main text-right mb-3">${product.price}</p>

                <button
                    onClick={handleAdd}
                    className="w-full bg-main text-white font-bold py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                >
                    + أضف للسلة
                </button>
            </div>

            {showDetails && <ProductDetailsModal product={product} onClose={() => setShowDetails(false)} />}
        </>
    );
};

export default ProductCard;