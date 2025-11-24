"use client";

import { IProduct } from "@/interfaces/IProduct";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const CARTLOCALSTORAGE = "cart";

interface CartContextProps {
  cartItems: IProduct[]; // STATE
  addToCart: (product: IProduct) => void; // MÉTODO
  removeFromCart: (productId: number) => void; // Metodo
  clearCart: () => void; // MÉTODO
  getTotal: () => number; // MÉTODO
  getIdItems: () => number[]; // MÉTODO (TRAMPA)
  getItemsCount: () => number;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getTotal: () => 0,
  getIdItems: () => [],
  getItemsCount: () => 0,
});

interface CartProvider {
  children: React.ReactElement;
}

export const CartProvider: React.FC<CartProvider> = ({ children }) => {
  const { dataUser } = useAuth();
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.setItem(CARTLOCALSTORAGE, JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const cartInfo = localStorage.getItem(CARTLOCALSTORAGE);
      if (cartInfo) {
        setCartItems(JSON.parse(cartInfo));
      }
    }
  }, []);   

    const addToCart = (product: IProduct) => {
    // 1.- DEBE HABER UN USUARIO LOGUEADO.
    // 2.- NO PUEDO AGREGAR VARIOS PRODUCTOS DEL MISMO TIPO.
    if (!dataUser) {
        alert("Debes estar logueado.");
        return;
    }

    const productoExistente = cartItems.some((item) => item.id === product.id);
    if (productoExistente) {
        alert("Solo se permite una unidad por persona.");
        return;
    }

    setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== productId)
    );
    };

    const clearCart = () => {
    setCartItems([]);
    if (typeof window !== "undefined" && window.localStorage) {
        localStorage.removeItem(CARTLOCALSTORAGE);
    }
    };

    const getTotal = () => {
     return cartItems.reduce((total, item) => total + item.price, 0);
    };

    const getIdItems = () => {
      return cartItems.map((item) => item.id);
    };

    const getItemsCount = () => {
     return cartItems.length;
    };

return (
    <CartContext.Provider
        value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal,
        getIdItems,
        getItemsCount,
        }}
    >
        {children}
    </CartContext.Provider>
    );
};

export const useCart =() => useContext(CartContext)