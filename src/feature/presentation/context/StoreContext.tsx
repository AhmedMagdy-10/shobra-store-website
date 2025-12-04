import { createContext, useContext, useReducer, ReactNode } from 'react';

type CartItem = {
    productId: number;
    title: string;
    price: number;
    quantity: number;
    category: string;
    image: string;
};

type State = {
    cartItems: CartItem[];
    currentPage: number;
    selectedCategory: string | null;
};

type Action =
    | { type: 'SET_PAGE'; payload: number }
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: number }
    | { type: 'INCREASE'; payload: number }
    | { type: 'DECREASE'; payload: number }
    | { type: 'CLEAR' }
    | { type: 'SET_CATEGORY'; payload: string | null };

const initialState: State = {
    cartItems: [],
    currentPage: 0,
    selectedCategory: null,
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_PAGE':
            return { ...state, currentPage: action.payload };
        case 'ADD_ITEM': {
            const existing = state.cartItems.find(i => i.productId === action.payload.productId);
            if (existing) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(i =>
                        i.productId === action.payload.productId ? { ...i, quantity: i.quantity + action.payload.quantity } : i
                    ),
                };
            }
            return { ...state, cartItems: [...state.cartItems, action.payload] };
        }
        case 'REMOVE_ITEM':
            return { ...state, cartItems: state.cartItems.filter(i => i.productId !== action.payload) };
        case 'INCREASE':
            return {
                ...state,
                cartItems: state.cartItems.map(i => (i.productId === action.payload ? { ...i, quantity: i.quantity + 1 } : i)),
            };
        case 'DECREASE':
            return {
                ...state,
                cartItems: state.cartItems
                    .map(i => (i.productId === action.payload ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))
                    .filter(i => i.quantity > 0),
            };
        case 'CLEAR':
            return { ...state, cartItems: [] };
        case 'SET_CATEGORY':
            return { ...state, selectedCategory: action.payload };
        default:
            return state;
    }
}

type StoreContextValue = {
    cartItems: CartItem[];
    totalItems: number;
    totalPrice: number;
    currentPage: number;
    selectedCategory: string | null;
    setCurrentPage: (page: number) => void;
    addToCart: (item: CartItem) => void;
    removeFromCart: (productId: number) => void;
    increaseQuantity: (productId: number) => void;
    decreaseQuantity: (productId: number) => void;
    clearCart: () => void;
    getCategoryProducts: (category: string | null) => void;
};

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const totalItems = state.cartItems.reduce((s, i) => s + i.quantity, 0);
    const totalPrice = state.cartItems.reduce((s, i) => s + i.price * i.quantity, 0);

    const value: StoreContextValue = {
        cartItems: state.cartItems,
        totalItems,
        totalPrice,
        currentPage: state.currentPage,
        selectedCategory: state.selectedCategory,
        setCurrentPage: (page: number) => dispatch({ type: 'SET_PAGE', payload: page }),
        addToCart: (item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item }),
        removeFromCart: (productId: number) => dispatch({ type: 'REMOVE_ITEM', payload: productId }),
        increaseQuantity: (productId: number) => dispatch({ type: 'INCREASE', payload: productId }),
        decreaseQuantity: (productId: number) => dispatch({ type: 'DECREASE', payload: productId }),
        clearCart: () => dispatch({ type: 'CLEAR' }),
        getCategoryProducts: (category: string | null) => {
            dispatch({ type: 'SET_CATEGORY', payload: category });
        },
    };

    return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
};

export const useStore = (): StoreContextValue => {
    const ctx = useContext(StoreContext);
    if (!ctx) throw new Error('useStore must be used within StoreProvider');
    return ctx;
};