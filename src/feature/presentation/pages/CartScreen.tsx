import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';

interface CartItem {
    productId: number;
    title: string;
    price: number;
    quantity: number;
    category: string;
    image: string;
}

const CartScreen: React.FC = () => {
    const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, totalItems, totalPrice } = useStore();
    const [showClearDialog, setShowClearDialog] = useState(false);
    const [showCheckoutDialog, setShowCheckoutDialog] = useState(false);

    if (cartItems.length === 0) {
        return (
            <div className="flex items-center justify-center h-[calc(100vh-200px)]">
                <div className="text-center">
                    <ShoppingCart size={80} className="mx-auto text-gray-300 mb-4" />
                    <p className="text-xl text-gray-500">السلة فارغة</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col h-[calc(100vh-80px)]">
            <div className="p-4 flex justify-end">
                <button
                    onClick={() => setShowClearDialog(true)}
                    className="text-main font-bold mb-2 hover:text-blue-700 transition"
                    aria-label="مسح جميع المنتجات من السلة"
                >
                    مسح الكل
                </button>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pb-4">
                {cartItems.map((item: CartItem) => (
                    <div key={item.productId} className="bg-white rounded-2xl p-3 mb-3 shadow-lg flex gap-3 flex-row-reverse">
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => increaseQuantity(item.productId)}
                                className="w-8 h-8 bg-main rounded-lg flex items-center justify-center hover:bg-blue-700 transition active:scale-95"
                                aria-label={`زيادة كمية ${item.title}`}
                            >
                                <Plus size={16} className="text-white" />
                            </button>
                            <span className="text-center font-bold text-sm">{item.quantity}</span>
                            <button
                                onClick={() => decreaseQuantity(item.productId)}
                                className="w-8 h-8 bg-main rounded-lg flex items-center justify-center hover:bg-blue-700 transition active:scale-95"
                                aria-label={`تقليل كمية ${item.title}`}
                            >
                                <Minus size={16} className="text-white" />
                            </button>
                        </div>

                        <div className="flex-1">
                            <h3 className="font-bold text-sm line-clamp-2 mb-1 text-right">{item.title}</h3>
                            <p className="text-xs text-gray-500 mb-2 text-right">{item.category.toUpperCase()}</p>
                            <div className="flex items-center gap-2 justify-end">
                                {item.quantity > 1 && (
                                    <span className="text-xs text-gray-500">
                                        ${item.price.toFixed(2)} × {item.quantity}
                                    </span>
                                )}
                                <p className="text-lg font-bold text-main">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                            </div>
                        </div>

                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-20 h-20 object-contain bg-gray-50 rounded-xl p-2 flex-shrink-0"
                            onError={(e) => {
                                e.currentTarget.src = 'https://via.placeholder.com/80?text=No+Image';
                            }}
                        />

                        <button
                            onClick={() => removeFromCart(item.productId)}
                            className="self-start p-1 hover:bg-red-50 rounded transition"
                            aria-label={`حذف ${item.title} من السلة`}
                        >
                            <Trash2 size={18} className="text-red-500" />
                        </button>
                    </div>
                ))}
            </div>

            <div className="bg-white rounded-t-3xl p-5 shadow-2xl">
                <div className="flex justify-between items-center mb-4 flex-row-reverse">
                    <div className="text-right">
                        <p className="text-sm text-gray-500">الإجمالي</p>
                        <p className="text-3xl font-bold text-main">${totalPrice.toFixed(2)}</p>
                    </div>
                    <div className="bg-blue-50 px-4 py-2 rounded-full">
                        <span className="font-bold text-main">{totalItems} منتج</span>
                    </div>
                </div>

                <button
                    onClick={() => setShowCheckoutDialog(true)}
                    className="w-full bg-main text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-blue-700 transition active:scale-95"
                    aria-label="إتمام الطلب والانتقال للدفع"
                >
                    <ShoppingCart size={20} />
                    إتمام الطلب
                </button>
            </div>

            {/* Clear Cart Dialog */}
            {showClearDialog && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowClearDialog(false)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="bg-white rounded-2xl p-6 max-w-sm w-full"
                        onClick={e => e.stopPropagation()}
                    >
                        <h3 className="text-xl font-bold mb-3 text-right">مسح السلة</h3>
                        <p className="text-gray-600 mb-6 text-right">هل تريد حذف جميع المنتجات من السلة؟</p>
                        <div className="flex gap-3 flex-row-reverse">
                            <button
                                onClick={() => setShowClearDialog(false)}
                                className="flex-1 border-2 border-gray-300 py-2 rounded-lg font-bold hover:bg-gray-50 transition"
                            >
                                إلغاء
                            </button>
                            <button
                                onClick={() => {
                                    clearCart();
                                    setShowClearDialog(false);
                                }}
                                className="flex-1 bg-red-500 text-white py-2 rounded-lg font-bold hover:bg-red-600 transition"
                            >
                                مسح
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Checkout Success Dialog */}
            {showCheckoutDialog && (
                <div
                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
                    onClick={() => setShowCheckoutDialog(false)}
                    role="dialog"
                    aria-modal="true"
                >
                    <div
                        className="bg-white rounded-2xl p-6 max-w-sm w-full"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="text-center">
                            <div className="text-6xl mb-4">✅</div>
                            <h3 className="text-xl font-bold mb-3">تم الطلب بنجاح</h3>
                            <p className="text-gray-600 mb-6">سيتم التواصل معك قريباً لتأكيد الطلب</p>
                            <button
                                onClick={() => {
                                    setShowCheckoutDialog(false);
                                    clearCart();
                                }}
                                className="w-full bg-main text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition active:scale-95"
                            >
                                حسناً
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartScreen;
