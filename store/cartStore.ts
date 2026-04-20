"use client";

import { create } from "zustand";

type CartItem = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type CartState = {
  /** Items currently present in the cart. */
  items: CartItem[];
  /** Controls slide-in cart drawer visibility. */
  isOpen: boolean;
  /** Adds an item to cart or increments quantity for existing item. */
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  /** Removes an item from cart by product id. */
  removeItem: (id: string) => void;
  /** Updates quantity for an item and removes it when quantity reaches zero. */
  updateQuantity: (id: string, quantity: number) => void;
  /** Clears all items from cart. */
  clearCart: () => void;
  /** Opens cart drawer. */
  openCart: () => void;
  /** Closes cart drawer. */
  closeCart: () => void;
};

export const useCartStore = create<CartState>((set) => ({
  items: [],
  isOpen: false,
  addItem: (item, quantity = 1) =>
    set((state) => {
      const found = state.items.find((cartItem) => cartItem.id === item.id);
      if (found) {
        return {
          items: state.items.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem,
          ),
          isOpen: true,
        };
      }
      return {
        items: [...state.items, { ...item, quantity }],
        isOpen: true,
      };
    }),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      items: state.items
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0),
    })),
  clearCart: () => set({ items: [] }),
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
}));
