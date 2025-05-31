"use client";

import React from "react";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import {
  useCart,
  CartItem as CartItemType,
} from "@/components/context/CartContext";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleDelete = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="w-full border-b pb-5 flex gap-3 border-b-success-900 mb-3">
      <div className="w-16 h-16 flex-shrink-0 relative">
        <Image
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover rounded"
          width={76}
          height={76}
        />
        <button
          onClick={handleDelete}
          className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center transition-colors"
          aria-label="Delete item"
        >
          <X className="w-3 h-3" />
        </button>
      </div>
      <div className="flex-1 space-y-[7px]">
        <p className="font-normal text-base leading-[135%] text-dark-200 line-clamp-2">
          {item.name}
        </p>
        <div className="w-full flex items-center justify-between">
          <p className="font-bold text-lg leading-[99%] text-success-100/75">
            ${item.price}
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDecrement}
              className="w-5 h-5 rounded-full bg-success-100 text-white flex items-center justify-center"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="font-bold text-lg leading-[135%] text-dark-200">
              {item.quantity}
            </span>
            <button
              onClick={handleIncrement}
              className="w-5 h-5 rounded-full bg-success-100 text-white flex items-center justify-center"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
