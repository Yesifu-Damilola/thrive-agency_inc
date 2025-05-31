"use client";

import React, { useEffect, useRef } from "react";
import { ArrowRight, X } from "lucide-react";
import { useCart } from "@/components/context/CartContext";
import CartItem from "./CartItem";

const CartSidebar: React.FC = () => {
  const { isCartOpen, closeCart, cartItems, getCartTotal } = useCart();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close cart
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        isCartOpen
      ) {
        closeCart();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isCartOpen, closeCart]);

  // Prevent scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const total = getCartTotal();

  return (
    <section className="fixed inset-0 bg-black/50 z-50 flex justify-end transition-opacity">
      <div
        ref={sidebarRef}
        className="lg:w-[22%] w-[85%] h-full bg-white flex flex-col animate-slide-in"
      >
        {/* Header */}
        <div className="w-full p-6 bg-success-700">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-lg leading-[130%] text-dark-200">
              Review Your Cart
            </h4>
            <button
              onClick={closeCart}
              className="w-12 h-10 rounded-lg border py-3 px-4 bg-white border-success-900 flex items-center justify-center"
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 p-4 px-6 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full">
              <p className="text-lg text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 px-6 border-t border-success-900">
            <div className="border-b pb-4 mb-4 border-success-900">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h5 className="font-normal text-base leading-[135%] text-dark-200">
                    Subtotal
                  </h5>
                  <p className="font-normal text-xs leading-[135%] text-dark-200">
                    Final charges may vary based on your location and
                    selections.
                  </p>
                </div>
                <p className="font-bold text-lg leading-[99%] text-success-100/75">
                  ${total}
                </p>
              </div>
            </div>

            <button className="w-full rounded-xl py-5 px-8 flex items-center justify-center gap-3 font-bold text-lg leading-[99%] text-dark-100 bg-success-500 transition-colors">
              Checkout ${total}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartSidebar;
