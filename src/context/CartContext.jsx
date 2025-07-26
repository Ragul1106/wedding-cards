import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState(() => {
      const storedCart = localStorage.getItem("cartItems");
      return storedCart ? JSON.parse(storedCart) : [];
    });
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity, image, title) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity,image, 
        title, }];
    });
    setIsCartModalOpen(true);
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
       value={{
        cartItems,
        addToCart,
        removeFromCart, 
        totalItems,
        isCartModalOpen,
        setIsCartModalOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);