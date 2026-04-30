import { create } from 'zustand'

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface UserState {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  addToCart: (item: CartItem) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
  toggleWishlist: (id: string) => void;
  clearCart: () => void;
}

export const useStore = create<UserState>((set) => ({
  cart: [],
  wishlist: [],
  isCartOpen: false,
  setIsCartOpen: (open) => set({ isCartOpen: open }),
  addToCart: (item) => set((state) => {
    const existing = state.cart.find((i) => i.id === item.id);
    if (existing) {
      return {
        cart: state.cart.map((i) => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      };
    }
    return { cart: [...state.cart, { ...item, quantity: 1 }] };
  }),
  decreaseQuantity: (id) => set((state) => {
    const existing = state.cart.find((i) => i.id === id);
    if (existing && existing.quantity > 1) {
      return {
        cart: state.cart.map((i) => 
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
      };
    }
    return { cart: state.cart.filter((i) => i.id !== id) };
  }),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((i) => i.id !== id)
  })),
  toggleWishlist: (id) => set((state) => ({
    wishlist: state.wishlist.includes(id) 
      ? state.wishlist.filter((i) => i !== id) 
      : [...state.wishlist, id]
  })),
  clearCart: () => set({ cart: [] }),
}));
