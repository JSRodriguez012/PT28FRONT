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
      {/* <button
        onClick={() => addToCart(product)}
        className="cursor-pointer  text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text"
      >
        <svg
          className="w-5 h-5 -ms-2 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4h1.5L6 8h8m8h-2l-.5-2h-11m11 2-1.286 5.144A2 2 0 0 1 18.286 16H8m-2 3h.01M17 16.312M17 16.312M17"
          />
        </svg>
        Agregar al carrito
      </button> */}
      <button
  onClick={() => addToCart(product)}
  className="cursor-pointer px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg flex items-center gap-2"
>
  {/* <svg
    className="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 4h1.5L6 8h8m8h-2l-.5-2h-11m11 2-1.286 5.144A2 2 0 0 1 18.286 16H8m-2 3h.01M17 16.312"
    />
  </svg> */}
  Agregar al carrito
</button>

      </div>
    );
};

export default ButtonAddToCart
