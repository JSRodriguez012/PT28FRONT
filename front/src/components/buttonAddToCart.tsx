"use client";

import { useCart } from "@/contexts/CartContext";
import { IProduct } from "@/interfaces/IProduct";

interface ButtonProps {
  product: IProduct;
}

const ButtonAddToCart = ({ product }: ButtonProps) => {
  const { addToCart } = useCart();

  return (
    <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8 ">

      <button
        onClick={() => addToCart(product)}
        className="cursor-pointer px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg flex items-c>enter gap-2">
  Agregar al carrito
</button>

      </div>
    );
};

export default ButtonAddToCart
