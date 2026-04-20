"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { formatCurrency } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";

export default function CartDrawer() {
  const isOpen = useCartStore((state) => state.isOpen);
  const items = useCartStore((state) => state.items);
  const closeCart = useCartStore((state) => state.closeCart);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            aria-label="Close cart"
            onClick={closeCart}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 270, damping: 30 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-gray-200 p-5">
              <h2 className="text-lg font-semibold text-gray-900">Your Cart</h2>
              <button onClick={closeCart} className="text-sm text-gray-500 hover:text-gray-900" type="button">
                Close
              </button>
            </div>
            <div className="flex-1 space-y-4 overflow-auto p-5">
              {items.length === 0 ? (
                <p className="text-sm text-gray-500">Your cart is empty.</p>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-3 rounded-xl border border-gray-100 p-3">
                    <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-[#FFF7E8]">
                      <Image src={item.image} alt={item.name} fill className="object-cover" sizes="64px" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{item.name}</p>
                      <p className="text-sm text-gray-500">{formatCurrency(item.price)}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          className="h-7 w-7 rounded-md border border-gray-300"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="w-5 text-center text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          className="h-7 w-7 rounded-md border border-gray-300"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                        <button
                          type="button"
                          className="ml-auto text-xs text-red-500"
                          onClick={() => removeItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="space-y-4 border-t border-gray-200 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">Subtotal</p>
                <p className="text-lg font-semibold text-gray-900">{formatCurrency(subtotal)}</p>
              </div>
              <button
                type="button"
                className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white"
              >
                Checkout (Soon)
              </button>
              <button
                type="button"
                onClick={clearCart}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm"
              >
                Clear Cart
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
