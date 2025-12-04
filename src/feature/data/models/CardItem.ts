export interface CartItem {
    productId: number;
    title: string;
    price: number;
    image: string;
    category: string;
    quantity: number;
}

export const calculateTotalPrice = (item: CartItem): number => {
    return item.price * item.quantity;
};