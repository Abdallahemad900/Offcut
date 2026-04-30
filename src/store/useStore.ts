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
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  toggleWishlist: (id: string) => void;
  clearCart: () => void;
}

export const useStore = create<UserState>((set) => ({
  cart: [],
  wishlist: [],
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
